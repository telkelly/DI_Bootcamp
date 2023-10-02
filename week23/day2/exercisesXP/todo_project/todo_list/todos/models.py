from django.db import models
from django.utils import timezone


# Create your models here.
class Todo(models.Model):
    title = models.CharField(max_length = 255)
    details = models.CharField(max_length = 255)
    has_been_done = models.BooleanField(default = False)
    date_creation = models.DateTimeField(default = timezone.now)
    date_completion = models.DateTimeField(null = True, blank = True)
    deadline_date = models.DateTimeField(null = True, blank = True)