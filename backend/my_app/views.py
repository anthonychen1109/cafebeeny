from django.shortcuts import render
from rest_framework import viewsets
from my_app.models import Menu, Item
from my_app.serializers import MenuSerializer, ItemSerializer

# Create your views here.

class MenuViewSet(viewsets.ModelViewSet):
    queryset = Menu.objects.all()
    serializer_class = MenuSerializer
