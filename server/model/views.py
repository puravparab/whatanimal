from django.shortcuts import render
from rest_framework import status
from rest_framework.response import Response
from rest_framework.parsers import JSONParser, MultiPartParser
from rest_framework.decorators import api_view, parser_classes

@api_view(["POST"])
@parser_classes([MultiPartParser])
def get_image(request):
	data = request.data
	image = data.get("image")

	return Response({"message": "succesful"}, status=status.HTTP_200_OK)