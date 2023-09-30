from django.shortcuts import render, get_object_or_404
from .models import Card


# Create your views here.
def display_all_cards(request):
    available_cards = Card.objects.all()

    context = {
        'cards': available_cards
    }

    return render(request, 'cards/cards.html', context)


def display_one_card(request, card_id):
    # Get the card object or return a 404 error if not found
    card = get_object_or_404(Card, pk=card_id)

    context = {
        'card': card,
    }

    return render(request, 'card_detail.html', context)