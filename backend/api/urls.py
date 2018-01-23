from django.conf.urls import url
from .views import CreateMenu

urlpatterns = [
    url(r'^$', CreateMenu.as_view(), name='create'),
]
