from cards.models import User, Card
from django.core.management.base import BaseCommand
from faker import Faker
import random

fake = Faker()


def create_users(num_users):
    users = []
    for _ in range(num_users):
        username = fake.user_name()
        email = fake.email()
        amount_of_money = 1000
        points = 0
        user = User.objects.create_user(username = username, email = email, amount_of_money = amount_of_money,
                                        points = points)
        users.append(user)
    return users


class Command(BaseCommand):
    def handle(self, *args, **kwargs):
        users = create_users(10)

        for user in users:
            num_cards_to_buy = random.randint(1, 10)  # Random number of cards to buy

            for _ in range(num_cards_to_buy):
                card = Card.objects.filter(current_owner = None).order_by('?').first()
                if card:
                    card.previous_owner = card.current_owner
                    card.current_owner = user
                    card.save()

                    user.points += card.xp_points
                    user.amount_of_money -= card.price

                    if card.previous_owner:
                        card.previous_owner.amount_of_money += card.price
                        card.previous_owner.save()


