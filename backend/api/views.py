from django.shortcuts import render
from rest_framework.response import Response
from . import serializers
from . import models
from rest_framework.views import APIView
# Create your views here.

class CreateMenu(APIView):

    def get(self, request, format=None):
        menu = models.Menu.objects.all()
        serializer = serializers.MenuSerializer(menu, many=True)
        return Response(serializer.data)

    def post(self, request, format=None):
        serializer = serializers.MenuSerializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        serializer.save()
        return Response(serializer.data, status=status.HTTP_201_created)
