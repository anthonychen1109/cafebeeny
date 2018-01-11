from django.db import models

# Create your models here.

class Menu(models.Model):
    menuid = models.PositiveIntegerField(max_length=11, null=False)
    name = models.CharField(max_length=100, null=False)
    subtext = models.CharField(max_length=100, default=None)
    image = models.CharField(max_length=100, default=None)

    def __str__(self):
        return self.name

class Item(models.Model):
    itemid = models.PositiveIntegerField(max_length=11, primary_key=True)
    menu = models.ForeignKey(Menu, on_delete=models.CASCADE)
    name = models.CharField(max_length=100, null=False)
    description = models.CharField(max_length=200, default=None)
    price1 = models.CharField(max_length=20, default=None)
    price2 = models.CharField(max_length=20, default=None)
    price3 = models.CharField(max_length=20, default=None)
    sort = models.PositiveIntegerField(max_length=11, null=False, default=0)

    def __str__(self):
        return self.name
