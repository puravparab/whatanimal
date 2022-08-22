from django.middleware.csrf import get_token
from rest_framework import status
from rest_framework.response import Response
from rest_framework.parsers import JSONParser
from rest_framework.decorators import api_view, parser_classes

@api_view(["GET"])
@parser_classes([JSONParser])
def csrf(request):
	return Response({'csrftoken': get_token(request)}, status=status.HTTP_200_OK)