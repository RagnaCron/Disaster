from crispy_forms.helper import FormHelper
from crispy_forms.layout import Submit
from django import forms


class HelloForm(forms.Form):

    def __init__(self, *callback_args, **callback_kwargs):
        super(HelloForm, self).__init__(*callback_args, **callback_kwargs)
        self.helper = FormHelper()
        self.helper.form_method = 'get'
        self.helper.add_input(Submit('submit', 'Login'))
