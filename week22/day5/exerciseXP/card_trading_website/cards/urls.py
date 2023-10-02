from django.urls import include, path
from . import views

urlpatterns = [
    path('cards/', views.display_all_cards, name='all-cards'),
    path('cards/<int:card_id>/', views.display_one_card, name='card-detail'),
    path('profile/<int:user_id>/', views.user_profile, name='user-profile'),
    path('cards/<int:card_id>/buy/<user_id>', views.buy_one_card, name = 'buy-one-card'),
    path('cards/<int:card_id>/sell/<user_id>', views.sell_one_card, name = 'sell-one-card'),
    path('leaderboard/', views.leaderboard, name='leaderboard'),
]