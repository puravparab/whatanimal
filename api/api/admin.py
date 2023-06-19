from django.contrib import admin
from .models import PredictionRequest

@admin.register(PredictionRequest)
class PredictionRequest(admin.ModelAdmin):
	list_display = ('id', 'image', 'time', 'status', 'created_at')
	fields = ['image', 'time', 'status']

	search_fields = ('image', 'time', 'status')