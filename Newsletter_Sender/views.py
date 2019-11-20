from django.core.mail import BadHeaderError, send_mail
from django.http import HttpResponse, HttpResponseRedirect
from django.shortcuts import render, redirect
from django.views.generic import FormView

from Newsletter_Sender.forms.Newsletter_Sender.Sender_Form import ContactForm


def send_email(request):
	subject = request.POST.get('subject', '')
	message = request.POST.get('message', '')
	from_email = request.POST.get('from_email', '')
	if subject and message and from_email:
		try:
			send_mail(subject, message, from_email, ['admin@example.com'])
		except BadHeaderError:
			return HttpResponse('Invalid header found.')
		return HttpResponseRedirect('/contact/thanks/')
	else:
		# In reality we'd use a form class
		# to get proper validation errors.
		return HttpResponse('Make sure all fields are entered and valid.')


class SendEmail(FormView):
	form_class = ContactForm
	template_name = 'Newsletter_Sender/Newsletter_Sender.html'
	success_url = '/Newsletter/Overview/'  # TODO: SUCCESS PAGE

	def get(self, request, *args, **kwargs):
		contact = ContactForm()
		return render(request, self.template_name, {'contact': contact})

	def post(self, request, *args, **kwargs):
		contact = ContactForm(self, args, kwargs)
		return render(self.request, self.template_name, {'contact': contact})
