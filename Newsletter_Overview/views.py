from django.views.generic import FormView
from django.shortcuts import render, redirect

from Newsletter_Overview.forms.Newsletter_Overview.Hello_Form import HelloForm
from Newsletter_Overview.forms.Newsletter_Overview.Login_Form import LoginForm


# Create your views here.

class HelloView(FormView):
    form_class = HelloForm
    template_name = 'Newsletter_Overview/Newsletter_Hello.html'
    success_url = '/Newsletter/Login/'

    def get(self, request, *args, **kwargs):
        hello_user = HelloForm()
        return render(self.request, self.template_name, {'hello_user': hello_user})


class LoginView(FormView):
    form_class = LoginForm
    template_name = 'Newsletter_Overview/Newsletter_Login.html'
    success_url = '/Newsletter/Overview/'

    def get(self, request, *args, **kwargs):
        user_login = LoginForm()
        return render(self.request, self.template_name, {'user_login': user_login})


def overview(request):
    return render(request, 'Newsletter_Overview/Newsletter_Overview.html', {'message': ''})