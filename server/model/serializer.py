from rest_framework import serializers
from .models import PredictionRequests

class PredictionRequestsSerializer(serializers.ModelSerializer):
	class Meta:
		model = PredictionRequests
		fields = ('id', 'user_token', 'image', 'created_at')