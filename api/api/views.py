import time
from django.shortcuts import render

from rest_framework import status
from rest_framework.response import Response
from rest_framework.decorators import api_view
from PIL import Image

from . import utils

"""
"""
@api_view(["POST"])
def predict(request):
	# Get model type
	model = request.GET.get('model')
	if not model: model = 'cnn_v1'

	# Get image
	image_file = request.FILES.get('image')
	if not image_file:
		return Response({
			"error": "image not uploaded.",
			"message": "Upload an image."
		}, status=status.HTTP_400_BAD_REQUEST)
	# Validate image
	
	try:
		image = Image.open(image_file)
	except (IOError, OSError):
		return Response({
			"error": "Uploaded image not valid.",
			"message": "Upload a valid image."
		}, status=status.HTTP_400_BAD_REQUEST)


	# Create a request
	request_id = utils.create_prediction_request(image_file)
	if not request_id:
		return Response({
			"error": "Server failed while processing request",
			"message": "Resubmit request"
		}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)

	# Get image url
	image_url = utils.get_image_url(request_id)
	if not image_url:
		utils.update_request_status(request_id, 'FAILED')
		return Response({
			"error": "Server failed while retrieving image url",
			"message": "Resubmit request",
			"image": image_url
		}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)

	# Run inference
	
	utils.update_request_status(request_id, 'SUCCESS')
	return Response({
		"message": "prediction succesful",
		"model": model,
		"image": image_url
		# "time": f'{response_time * (10 ** 6)}'
	}, status=status.HTTP_200_OK)

# start_time = time.time()
# end_time = time.time()
# response_time = end_time - start_time