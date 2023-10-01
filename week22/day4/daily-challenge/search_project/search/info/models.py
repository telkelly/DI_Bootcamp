from django.db import models
from phonenumber_field.modelfields import PhoneNumberField


# Create your models here.
class Phone(models.Model):
    id = models.AutoField(primary_key=True)
    name = models.CharField(max_length = 255)
    email = models.EmailField(unique=True)
    phone_number = PhoneNumberField()
    address = models.CharField(max_length = 255)

    def __str__(self):
        return str(self.phone_number)