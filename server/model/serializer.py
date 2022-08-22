from rest_framework import serializers
from .models import PredictionRequests

class PredictionRequests(serializers.ModelSerializer):
	class Meta:
		model = Blurt
		fields = ('id', 'user_token', 'image', 'created_at')