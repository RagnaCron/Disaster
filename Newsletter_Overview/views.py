from django.views.generic import UpdateView
from django.shortcuts import render
from Newsletter_Overview.forms.Newsletter_Overview.Overview_Forms import LoginForm
from Newsletter_Overview.models import User

# Create your views here.


def home(request):
	return render(request, 'Newsletter_Overview/Newsletter_Overview.html', {'message': ''})


class LoginView(UpdateView):
    model = User
    form_class = LoginForm
    template_name = 'people/person_update_form.html'


