from django.shortcuts import render
from rest_framework import status
from rest_framework.response import Response
from rest_framework.parsers import JSONParser, MultiPartParser
from rest_framework.decorators import api_view, parser_classes

from .predict import *

@api_view(["POST"])
@parser_classes([MultiPartParser])
def analyze_image(request):
	data = request.data
	# image_url = data.get("image")
	# image_url = "https://storage.googleapis.com/download.tensorflow.org/example_images/592px-Red_sunflower.jpg"
	image_url = "http://192.168.1.103:8000/static/media/default_cat.4a5b78e35b26b637285d.png"
	
	try:
		predictions = run_predictions(image_url, 224, 224)
	except Exception as e:
		return Response({
			"message": "prediction error", 
			"error": str(e)
			}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)

	try:
		scoring = score_predictions(predictions)
	except Exception as e:
		return Response({
			"message": "scoring error", 
			"error": str(e)
			}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)

	return Response({
		"message": "analysis succesful",
		"details": scoring
		}, status=status.HTTP_200_OK)