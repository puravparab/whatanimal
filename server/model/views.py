from django.shortcuts import render
from rest_framework import status
from rest_framework.response import Response
from rest_framework.parsers import JSONParser, MultiPartParser
from rest_framework.decorators import api_view, parser_classes

from .predict import *
from .utils import *

@api_view(["POST"])
@parser_classes([MultiPartParser])
def analyze_image(request):
	data = request.data
	headers = request.headers
	csrftoken = headers.get("X-Csrftoken")
	image = data.get("image")
	
	if image == '':
		# Use default picture:
		csrftoken = 'default'
	else:
		# Create a user request:
		try:
			create_user_request(csrftoken, image)
		except Exception as e:
			return Response({
				"message": "error creating user request",
				"error": str(e)
			}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)

	# Get image url from S3:
	try:
		image_url = get_image_s3_url(csrftoken)
	except Exception as e:
		return Response({
			"message": "error retrieving image url fromm aws s3",
			"error": str(e)
		}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)

	# Run predictions:
	try:
		predictions = run_predictions(image_url, 224, 224)
	except Exception as e:
		return Response({
			"message": "prediction error", 
			"error": str(e)
			}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)

	# Score predictions:
	try:
		scoring = score_predictions(predictions)
	except Exception as e:
		return Response({
			"message": "scoring error", 
			"error": str(e)
			}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)

	# Delete user request
	if csrftoken != 'default':
		try:
			delete_user_request(csrftoken)
		except Exception as e:
			return Response({
				"message": "error deleting user request", 
				"error": str(e)
				}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)

	return Response({
		"message": "analysis succesful",
		"details": scoring
		}, status=status.HTTP_200_OK)