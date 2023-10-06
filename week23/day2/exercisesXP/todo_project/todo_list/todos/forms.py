from django.forms import ModelForm
from todos.models import Todo


class TodoForm(ModelForm):
    class Meta:
        model = Todo
        fields = ["title", "details", "has_been_done", "date_creation", "date_completion", "deadline_date"]




