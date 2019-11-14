from django.shortcuts import render

# Create your views here.


def editor(request):
    return render(request, "MJML_Editor/MJML_Editor.html")
