from django.urls import reverse_lazy
from django.views import generic
from .models import Film, Director
from .forms import FilmForm, DirectorForm


class HomePageView(generic.ListView):
    template_name = 'films/homepage.html'
    context_object_name = 'all_films'
    queryset = Film.objects.all()


class FilmCreateView(generic.CreateView):
    model = Film
    form_class = FilmForm
    template_name = 'film/addFilm.html'
    success_url = reverse_lazy('homepage')


class DirectorCreateView(generic.CreateView):
    model = Director
    form_class = DirectorForm
    template_name = 'director/addDirector.html'
    success_url = reverse_lazy('homepage')
