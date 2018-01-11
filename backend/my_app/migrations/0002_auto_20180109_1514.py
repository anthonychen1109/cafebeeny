# -*- coding: utf-8 -*-
# Generated by Django 1.11.3 on 2018-01-09 15:14
from __future__ import unicode_literals

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('my_app', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='Item',
            fields=[
                ('itemid', models.PositiveIntegerField(max_length=11, primary_key=True, serialize=False)),
                ('name', models.CharField(max_length=100)),
                ('description', models.CharField(default=None, max_length=200)),
                ('price1', models.CharField(default=None, max_length=20)),
                ('price2', models.CharField(default=None, max_length=20)),
                ('price3', models.CharField(default=None, max_length=20)),
                ('sort', models.PositiveIntegerField(default=0, max_length=11)),
            ],
        ),
        migrations.CreateModel(
            name='Menu',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('menuid', models.PositiveIntegerField(max_length=11)),
                ('name', models.CharField(max_length=100)),
                ('subtext', models.CharField(default=None, max_length=100)),
                ('image', models.CharField(default=None, max_length=100)),
            ],
        ),
        migrations.RemoveField(
            model_name='article',
            name='lang_id',
        ),
        migrations.RemoveField(
            model_name='article',
            name='theme_id',
        ),
        migrations.RemoveField(
            model_name='article',
            name='topic_id',
        ),
        migrations.DeleteModel(
            name='Article',
        ),
        migrations.DeleteModel(
            name='Language',
        ),
        migrations.DeleteModel(
            name='Theme',
        ),
        migrations.DeleteModel(
            name='Topics',
        ),
        migrations.AddField(
            model_name='item',
            name='menu',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='my_app.Menu'),
        ),
    ]