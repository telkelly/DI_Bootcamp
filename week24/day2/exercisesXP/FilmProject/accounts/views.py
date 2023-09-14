from django.contrib.auth import authenticate, login, logout
from django.contrib.auth.models import User
from django.shortcuts import render, redirect, get_object_or_404
from django.views import View, generic
from django.views.generic import DetailView

from FilmProject.accounts.forms import SignUpForm, LoginForm


# Create your views here.
class SignUpView(View):
    form_class = SignUpForm
    template_name = 'accounts/register.html'

    def get(self, request, *args, **kwargs):
        form = self.form_class()
        return render(request, self.template_name, {'form':form})

    def post(self, request, *args, **kwargs):
        form = self.form_class(request.POST)
        if form.is_valid():
            # Save the user object returned by form.save() to get the created user instance
            user = form.save()

            # Authenticate the user
            authenticated_user = authenticate(
                username = form.cleaned_data.get('username'),
                password = form.cleaned_data.get('password1')
            )

            # Log the user in if they are authenticated
            if authenticated_user:
                login(request, authenticated_user)
                return redirect(
                    '/films/homepage/')  # Assuming 'films' is the name of your films app and 'homepage' is the name of your homepage route
            return render(request, self.template_name, {'form':form})

        else:
            form = SignUpForm()

        return render(request, 'accounts/signup.html', {'form':form})

    class LoginView(generic.View):
        form_class = LoginForm
        template_name = 'accounts/login.html'

        def get(self, request, *args, **kwargs):
            form = self.form_class()
            return render(request, self.template_name, {'form':form})

        def post(self, request, *args, **kwargs):
            form = self.form_class(request.POST)
            if form.is_valid():
                username = form.cleaned_data['username']
                password = form.cleaned_data['password']

                user = authenticate(request, username = username, password = password)

                if user is not None:
                    if user.is_active:
                        login(request, user)
                        return redirect('/films/homepage/')
                    else:
                        form.add_error(None, 'This account is inactive.')
                else:
                    form.add_error(None, 'Invalid username or password.')

            return render(request, self.template_name, {'form':form})

        class LogoutView(View):
            def get(self, request, *args, **kwargs):
                logout(request)
                return redirect('/films/homepage/')

        class ProfileView(DetailView):
            model = User
            template_name = 'accounts/userprofile.html'
            context_object_name = 'user_profile'  # This is the name you'd use in your template

            def get_object(self):
                user_id = self.kwargs.get('user_id')
                return get_object_or_404(User, id = user_id)