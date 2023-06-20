from django.apps import AppConfig

class ApiConfig(AppConfig):
	default_auto_field = 'django.db.models.BigAutoField'
	name = 'api'

	def ready(self):
		# Import signals inside the ready() method
		from . import signals