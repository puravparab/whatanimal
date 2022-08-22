from django.db import models

class PredictionRequests(models.Model):
	user_token = models.CharField(max_length=200, blank=False, null=False)
	image = models.ImageField(upload_to='user', blank=False, null=False)
	created_at = models.DateTimeField(auto_now_add=True, auto_now=False)

	def __str__(self):
		return (f'session {self.id}')