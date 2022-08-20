from django.conf import settings
import tensorflow as tf
import numpy as np
import PIL

def load_image(image_url):
	image_path = tf.keras.utils.get_file('user_uploaded_image', origin=image_url)
	return image_path

def create_image_array(image_url, image_width, image_height):
	img = tf.keras.utils.load_img(
		image_url, target_size=(image_width, image_height)
	)

	img_array = tf.keras.utils.img_to_array(img)
	img_array = tf.expand_dims(img_array, 0) # Create a batch
	return img_array

def load_model():
	model = tf.keras.models.load_model(settings.TRAINED_MODEL)
	return model

def predict(image_array):
	model = load_model()
	predictions = model.predict(image_array)
	predictions_array = tf.nn.softmax(predictions[0])
	return predictions_array

def run_predictions(image_url, image_width, image_height):
	image_path = load_image(image_url)
	image_array = create_image_array(image_path, image_width, image_height)
	return predict(image_array)

def score_predictions(predictions):
	no_of_classes = len(predictions)
	score = {}

	score = {
		"scoring": [],
		"prediction_index": np.argmax(predictions),
		"no_of_classes": no_of_classes
	}

	for i in range(no_of_classes):
		value = tf.get_static_value(predictions[i]) * 100
		value = float("{:.2f}".format(value))
		score["scoring"].append(value)

	return score