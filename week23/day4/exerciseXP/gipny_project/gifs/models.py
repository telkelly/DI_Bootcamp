from django.db import models
from django.utils import timezone


# Create your models here.
class Category(models.Model):
    name = models.CharField(max_length = 255)


class Gif(models.Model):
    title = models.CharField(max_length = 255)
    url = models.URLField()
    uploader_name = models.CharField(max_length = 255)
    created_at = models.DateTimeField(default = timezone.now(), blank = True)
    categories = models.ManyToManyField(Category)