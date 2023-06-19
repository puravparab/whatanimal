from django.db import models

class PredictionRequest(models.Model):
	STATUS_CHOICES = [
		('PENDING', 'Pending'),
		('SUCCESS', 'Success'),
		('FAILED', 'Failed'),
	]

	image = models.ImageField(upload_to='requests', blank=False, null=False)
	time = models.FloatField(blank=True, null=True)
	status = models.CharField(max_length=20, choices=STATUS_CHOICES, default='PENDING')
	created_at = models.DateTimeField(auto_now_add=True, auto_now=False)

	def __str__(self):
		return (f'request #{self.id}')