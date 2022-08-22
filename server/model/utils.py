from rest_framework import status
from rest_framework.response import Response
from .models import PredictionRequests
from .serializer import PredictionRequestsSerializer

def create_user_request(token, image):
	user_request = PredictionRequests.objects.filter(user_token=token)
	if not user_request.exists():
		try:
			user_request = PredictionRequests.objects.create(
				user_token = token,
				image = image
			)
			user_request.save()
		except Exception as e:
			raise Exception(e)
	else:
		user_request = user_request[0]
		try:
			user_request.image = image
			user_request.save(update_fields=['image'])
		except Exception as e:
			raise Exception(e)

def get_image_s3_url(token):
	user_request = PredictionRequests.objects.filter(user_token=token)
	if not user_request.exists():
		raise Exception("user request does not exist")
	else:
		user_request = user_request[0]
		serializer = PredictionRequestsSerializer(user_request)
		image_url = serializer.data.get("image")
		return image_url

def delete_user_request(token):
	user_request = PredictionRequests.objects.filter(user_token=token)
	if not user_request.exists():
		return
	else:
		try:
			user_request.delete()
		except Exception as e:
			raise Exception(e)