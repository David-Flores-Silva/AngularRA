from typing import Reversible
from django.db import models

# Create your models here.
class Movie(models.Model):
    play = models.CharField(max_length=32)
    desc = models.CharField(max_length=256)
    tamanio = models.IntegerField()
    #img = models.ImageField()

    def get_absolute_url(self):
        return Reversible("movies:Movie_Detail", kwargs={"pk": self.id})
    
