# Generated by Django 3.2.6 on 2021-08-09 18:18

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0007_auto_20210809_1311'),
    ]

    operations = [
        migrations.RenameField(
            model_name='movie',
            old_name='Play',
            new_name='play',
        ),
        migrations.RenameField(
            model_name='movie',
            old_name='Tamaño',
            new_name='tamanio',
        ),
    ]
