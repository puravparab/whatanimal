from django.db.models.signals import pre_delete
from django.dispatch import receiver
from .models import PredictionRequests

@receiver(pre_delete, sender=PredictionRequests)
def delete_image(sender, instance, **kwargs):
	instance.image.delete(save=False)