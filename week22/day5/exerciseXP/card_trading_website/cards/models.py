from django.db import models
from django.contrib.auth.models import AbstractUser
from django.utils.translation import gettext_lazy as _


class User(AbstractUser):
    username = models.CharField(max_length = 255, unique = True)
    email = models.EmailField(unique = True)
    amount_of_money = models.IntegerField(default = 1000)
    points = models.IntegerField(default = 0)

    def __str__(self):
        return self.username


class Card(models.Model):
    name_character = models.CharField(max_length = 255)
    species = models.CharField(max_length = 255)
    house = models.CharField(max_length = 255)
    image_url = models.URLField()
    date_of_birth = models.DateField(null = True, blank = True)
    patronus = models.CharField(max_length = 255)
    price = models.DecimalField(
        max_digits = 7,
        decimal_places = 2,
        default = 0,
        help_text = _('Random price between 200 and 2000')
    )
    xp_points = models.IntegerField(
        default = 0,
        help_text = _('Random points between 1 and 10')
    )
    current_owner = models.ForeignKey(
        User,
        related_name = 'cards_owned',
        null = True,
        blank = True,
        on_delete = models.SET_NULL
    )
    previous_owner = models.ForeignKey(
        User,
        related_name = 'cards_previously_owned',
        null = True,
        blank = True,
        on_delete = models.SET_NULL
    )

    def __str__(self):
        return self.name_character
