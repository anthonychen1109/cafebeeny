# Generated by Django 2.0.1 on 2018-01-24 15:32

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='menu',
            name='menuid',
            field=models.PositiveIntegerField(primary_key=True, serialize=False),
        ),
    ]