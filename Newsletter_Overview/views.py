from django.shortcuts import render


# Create your views here.

def home(request):
	return render(request, 'Newsletter_Overview/Newsletter_Overview.html', {'message': ''})
