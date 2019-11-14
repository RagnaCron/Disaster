from django.shortcuts import render

# Create your views here.


def choose(request):
    return render(request, "MJML_Editor/Choose_MJML.html")
