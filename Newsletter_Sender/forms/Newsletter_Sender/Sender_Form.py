from crispy_forms.helper import FormHelper
from crispy_forms.layout import Submit
from django import forms
from django.core.validators import validate_email


# Source: https://docs.djangoproject.com/en/2.2/ref/forms/validation/#using-validation-in-practice
class MultiEmailField(forms.Field):
	def to_python(self, value):
		"""Normalize data to a list of strings."""
		# Return an empty list if no input was given.
		if not value:
			return []
		return value.split(',')

	def validate(self, value):
		"""Check if value consists only of valid emails."""
		# Use the parent's handling of required fields, etc.
		super().validate(value)
		for email in value:
			validate_email(email)


class ContactForm(forms.Form):
	recipients = MultiEmailField(required=True)
	from_email = forms.EmailField(required=True)
	subject = forms.CharField(required=True, max_length=100)
	message = forms.CharField(widget=forms.Textarea, required=True)

	def __init__(self, *callback_args, **callback_kwargs):
		super(ContactForm, self).__init__(*callback_args, **callback_kwargs)
		self.helper = FormHelper()
		self.helper.form_method = 'post'
		self.helper.add_input(Submit('submit', 'Send'))

	def clean(self):
		cleaned_data = super().clean()
		return cleaned_data
