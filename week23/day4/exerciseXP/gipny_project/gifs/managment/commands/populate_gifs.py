import random
import requests
from django.core.management.base import BaseCommand
from faker import Faker
from gipny_project.gifs.models import Gif

fake = Faker()
categories = ['Funny', 'Cute', 'Sports', 'Movies', 'Animals', 'Dance', 'Memes', 'Music', 'Gaming', 'Science']


class Command(BaseCommand):
    help = 'Populate Gifs'

    def handle(self, *args, **kwargs):
        api_url = "https://api.giphy.com/v1/gifs/trending?limit=20&rating=g&api_key=hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My"
        response = requests.get(api_url)
        data = response.json()

        Gif.objects.all().delete()

        for gif in data.get('data', []):
            gif_url = gif.get('url')
            gif_title = gif.get('title')
            uploader_name = fake.name()
            random_categories = random.sample(categories, 2)

            gif_instance = Gif(
                gif_url=gif_url,
                gif_title=gif_title,
                uploader_name=uploader_name,
            )

            gif_instance.save()

        self.stdout.write(self.style.SUCCESS('Successfully populated'))
