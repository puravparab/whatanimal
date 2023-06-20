from django.dispatch import receiver
from django.db.models.signals import pre_delete
from .models import PredictionRequest

# Delete image from s3 when requestis deleted
@receiver(pre_delete, sender=PredictionRequest)
def delete_image(sender, instance, **kwargs):
	instance.image.delete(save=False)