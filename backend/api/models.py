from django.db import models

# Create your models here.

class Menu(models.Model):
    menuid = models.PositiveIntegerField(primary_key=True)
    name = models.CharField(max_length=100, null=False)
    subtext = models.CharField(max_length=100, default=None)
    image = models.CharField(max_length=100, default=None)
