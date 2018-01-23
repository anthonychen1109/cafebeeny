from rest_framework import serializers
from .models import Menu, Item

class MenuSerializer(serializers.ModelSerializer):
    class Meta():
        model = Menu
        fields = '__all__'

class ItemSerializer(serializers.ModelSerializer):
    class Meta():
        model = Item
        fields = '__all__'
