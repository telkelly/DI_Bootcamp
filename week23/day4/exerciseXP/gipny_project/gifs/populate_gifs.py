import random
import requests
from django.core.management import BaseCommand
from faker import Faker

fake = Faker()
categories = ['Funny', 'Cute', 'Sports', 'Movies', 'Animals', 'Dance', 'Memes', 'Music', 'Gaming', 'Science']


class Command(BaseCommand):
    def handle(self, *args, **kwargs):
        api_url = "https://api.giphy.com/v1/gifs/trending?limit=20&rating=g&api_key=hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My"
        response = requests.get(api_url)
        data = response.json()
        gifs_data = data.get('data', [])

        table = []

        for gif in gifs_data:
            gif_url = gif['url']
            gif_title = gif['title']
            uploader_name = fake.name()
            random_categories = random.sample(categories, 2)

            table.append({
                'Gif URL':gif_url,
                'Gif Title':gif_title,
                'Uploader Name': uploader_name,
                'Categories': ', '.join(random_categories)
            })

        return table

