from django.shortcuts import render
from .models import Todo
from .forms import TodoForm


# Create your views here.
def add_todo(request):
    if request.method == 'POST':
        form = TodoForm(request.POST)

        if form.is_valid():
            form.save()

    else:
        form = TodoForm()

    todos = Todo.objects.all()

    return render(request, 'todos/tasks_list.html', {'form':form, 'todos':todos})
