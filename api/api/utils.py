from .models import PredictionRequest
from .serializer import PredictionRequestSerializer

"""
"""
def create_prediction_request(image):
	try:
		request = PredictionRequest.objects.create(
			image = image,
			time = None,
			status = 'PENDING'
		)
		request.save()
		return request.id
	except:
		return None

"""
"""
def get_image_url(request_id):
	request = PredictionRequest.objects.filter(id=request_id)
	if not request:
		return None

	request = request[0]
	serializer = PredictionRequestSerializer(request)
	image_url =  serializer.data.get("image")
	return image_url

"""
"""
def update_request_status(request_id, status):
	request = PredictionRequest.objects.get(id=request_id)
	request.status = status
	request.save(update_fields=['status'])
	return

def update_request(request_id, status, response_time):
	request = PredictionRequest.objects.get(id=request_id)
	request.status = status
	request.time = response_time
	request.save(update_fields=['status', 'time'])
	return