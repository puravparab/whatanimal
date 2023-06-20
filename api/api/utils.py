from .models import PredictionRequest
from .serializer import PredictionRequestSerializer

"""
Creates a request entry in PredictionRequest table

Args:
	image (file): An image file

Returns:
	int: id of the created entry if successful, else None.
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
Get the s3 url of the image in the request entry

Args:
	request_id (int): The id of the request.

Returns:
	str: The url of the image associated with the request
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
Update the status of the specified request.

Args:
	request_id (int): The id of the request.
	status (str): The new status

Returns:
	None
"""
def update_request_status(request_id, status):
	request = PredictionRequest.objects.get(id=request_id)
	request.status = status
	request.save(update_fields=['status'])
	return

"""
Update the status and inference time of the specified request.

Args:
	request_id (int): The id of the request.
	status (str): The new status
	response_time (float): The inference time

Returns:
	None
"""
def update_request(request_id, status, response_time):
	request = PredictionRequest.objects.get(id=request_id)
	request.status = status
	request.time = response_time
	request.save(update_fields=['status', 'time'])
	return