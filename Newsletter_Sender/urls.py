from django.urls import path
from .views import SendEmail

app_name = 'Newsletter_Sender'
urlpatterns = [
	path('', SendEmail.as_view(), name='send'),
]
