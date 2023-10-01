from django.shortcuts import render, get_object_or_404, redirect
from .models import Card, User


# Create your views here.
def display_all_cards(request):
    available_cards = Card.objects.all()

    context = {
        'cards':available_cards
    }

    return render(request, 'cards/cards.html', context)


def display_one_card(request, card_id):
    card = get_object_or_404(Card, pk = card_id)

    context = {
        'card':card,
    }

    return render(request, 'cards/card_detail.html', context)


def user_profile(request, user_id):
    user = get_object_or_404(User, pk = user_id)

    context = {
        'user':user,
    }

    return render(request, 'users/user_profile.html', context)


def buy_one_card(request, card_id, user_id):
    card = get_object_or_404(Card, pk = card_id)
    user = get_object_or_404(User, pk = user_id)

    if user.amount_of_money >= card.price:
        card.current_owner = user
        card.save()

        user.points += card.xp_points
        user.save()

        user.amount_of_money -= card.price
        user.save()

        return redirect('user-profile', user_id = user.id)
    else:
        return redirect('card-detail', card_id = card.id)


def sell_one_card(request, card_id, user_id):
    card = get_object_or_404(Card, pk = card_id)
    user = get_object_or_404(User, pk = user_id)

    if card.current_owner == user:
        card.current_owner = None
        card.save()

        user.points -= card.xp_points
        user.save()

        card.previous_owner = user
        card.save()

        return redirect('home')

    return redirect('user-profile', user_id = user.id)
