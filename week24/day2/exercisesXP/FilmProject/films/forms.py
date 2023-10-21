from django import forms
from .models import Film, Director, Review


class FilmForm(forms.ModelForm):
    class Meta:
        model = Film
        fields = '__all__'


class DirectorForm(forms.ModelForm):
    class Meta:
        model = Director
        fields = '__all__'


class ReviewForm(forms.ModelForm):
    class Meta:
        model = Review
        fields = ['film', 'review_text', 'rating']
        widgets = {
            'film': forms.Select(attrs={'class': 'form-control'}),
            'review_text': forms.Textarea(attrs={'class': 'form-control', 'rows': 5}),
            'rating': forms.RadioSelect(choices=[(i, i) for i in range(1, 6)]),
        }