from rest_framework import serializers
from .models import PredictionRequest

class PredictionRequestSerializer(serializers.ModelSerializer):
	class Meta:
		model = PredictionRequest
		fields = ('id', 'image', 'time', 'status')