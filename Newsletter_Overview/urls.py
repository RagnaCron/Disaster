from django.urls import path
from .views import overview, LoginView, HelloView

app_name = 'Newsletter_Overview'
urlpatterns = [
    path('', HelloView.as_view(), name='hello'),
    path('Login/', LoginView.as_view(), name='login'),
    path('Overview/', overview, name='home'),
]
