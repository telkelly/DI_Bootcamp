from django.db import models

CATEGORY_CHOICES = (
    ('Dj', 'Django'),
    ('Py', 'Python'),
)


class Report(models.Model):
    location = models.CharField(max_length=100)
    temperature = models.FloatField()
    created_at = models.DateTimeField(auto_now=True)
    type = models.CharField(
        max_length = 100,  # Customize the max length as needed
        choices = (
            ('type1', 'Sunny'),  # Define your choices here
            ('type2', 'Cloudy'),
            ('type3', 'Windy'),
            ('type4', 'Rainy'),
            ('type5', 'Stormy'),
        ),
        default = 'type1',  # Set a default value if needed
    )

    def __str__(self):
        return self.location