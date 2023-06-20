from django.conf import settings

import time
import numpy as np
import tensorflow as tf

"""
Perform inference using the specified model on the given image.

Args:
	model (str): The name of the model to use for inference.
	image_url (str): The url of the image to perform inference on.

Returns:
	prediction (dict): A dict containing the prediction result
	response_time (float): The inference time
"""
def inference(model, image_url):
	start_time = time.time()
	if model == 'cnn_v1':
		prediction = cnn_v1(image_url)

	end_time = time.time()
	response_time = end_time - start_time
	return [prediction, response_time]

"""
Load the specified model

Args:
	model (str): The path to the model file.

Returns:
	tf.keras.Model: The loaded Keras model.

"""
def load_model(model):
	return tf.keras.models.load_model(model)

"""
Load and preprocess an image from the specified url.

Args:
	image_url (str): The url of the image to load.
	image_width (int): The desired width of the image.
	image_height (int): The desired height of the image.

Returns:
	numpy.ndarray: The processed image as a NumPy array.
"""
def process_image(image_url, image_width, image_height): 
	img = tf.keras.utils.load_img(
		tf.keras.utils.get_file(origin=image_url), 
		target_size=(image_width, image_height)
	)
	image_array = tf.keras.utils.img_to_array(img)
	image_array = tf.expand_dims(image_array, 0) # Create a batch
	return image_array

"""
Perform inference using the CNN V1 model on the specified image.

Args:
	image_url (str): The URL of the image to process.

Returns:
	prediction (dict): The prediction results containing the predicted index, scores, and number of classes.
"""
def cnn_v1(image_url):
	image_array = process_image(image_url, 224, 224)
	model = load_model(settings.CNN_V1)

	# Run inference and generate a prediction
	predictions = model.predict(image_array)
	predictions_array = tf.nn.softmax(predictions[0])
	
	# Clean response
	prediction = {
		"predicted_index": np.argmax(predictions_array),
		"scores": [],
		"no_of_classes": 0
	}

	no_of_classes = 0
	for i in range(len(predictions_array)):
		value = tf.get_static_value(predictions_array[i]) * 100
		value = float("{:.2f}".format(value))
		if value > 0:
			prediction["scores"].append([i, value])
			no_of_classes += 1
	prediction["no_of_classes"] = no_of_classes

	return prediction