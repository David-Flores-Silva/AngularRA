from typing import Reversible
from django.db import models

# Create your models here.
class Movie(models.Model):
    title = models.CharField(max_length=32)
    desc = models.CharField(max_length=256)
    year = models.IntegerField()

    def get_absolute_url(self):
        return Reversible("movies:Movie_Detail", kwargs={"pk": self.id})
    
