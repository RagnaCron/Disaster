from crispy_forms.helper import FormHelper
from crispy_forms.layout import Submit
from django import forms

from Newsletter_Overview.models import User


class LoginForm(forms.Form):
    email = forms.EmailField(min_length=5)
    # class Meta:
        # model = User
        # fields = ('email',)

    def __init__(self, *callback_args, **callback_kwargs):
        super(LoginForm, self).__init__(*callback_args, **callback_kwargs)
        self.helper = FormHelper()
        self.helper.form_method = 'post'
        self.helper.add_input(Submit('submit', 'Login'))
