from django.db import models


class Family(models.Model):
    name = models.CharField(max_length=255)


class Animal(models.Model):
    legs = models.PositiveIntegerField()
    weight = models.DecimalField(max_digits=10, decimal_places=2)
    height = models.DecimalField(max_digits=10, decimal_places=2)
    speed = models.DecimalField(max_digits=10, decimal_places=2)
    family = models.ForeignKey(Family, on_delete=models.CASCADE)

    def __str__(self):
        return f"{self.id} - {self.family.name} - {self.legs}-legged Animal"



