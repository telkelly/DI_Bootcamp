# Generated by Django 4.2.5 on 2023-09-12 17:13

from django.db import migrations, models
import django.utils.timezone


class Migration(migrations.Migration):

    dependencies = [
        ('films', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='film',
            name='release_date',
            field=models.DateField(default=django.utils.timezone.now),
        ),
    ]