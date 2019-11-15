from . import views
from django.urls import path

app_name = 'editor'
urlpatterns = [
    path("", views.editor, name="editor"),
    path("Create/", views.create, name="editor"),
]
