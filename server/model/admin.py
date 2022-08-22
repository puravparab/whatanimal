from django.contrib import admin
from .models import PredictionRequests

@admin.register(PredictionRequests)
class PredictionRequests(admin.ModelAdmin):
	list_display = ('id', 'user_token', 'image', 'created_at')
	fields = ['user_token', 'image']