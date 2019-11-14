from django.urls import path
from .views import home

app_name = 'Newsletter_Overview'
urlpatterns = [
    path('', home, name='home'),

]
