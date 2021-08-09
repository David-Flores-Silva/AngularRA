from typing import List
from django.shortcuts import render
from django.contrib.auth.models import User,Group
from rest_framework import viewsets
from rest_framework.response import Response
from .serializers import MovieSerializer
from .models import Movie
from django.urls import reverse_lazy


from django.views.generic import (
    ListView,
    DetailView,
    DeleteView,
    CreateView,
    UpdateView,
    FormView,
)

# Create your views here.
class MovieViewSet(viewsets.ModelViewSet):
    queryset = Movie.objects.all()
    serializer_class = MovieSerializer


class MovieListView(ListView):
    model = Movie

class MovieDetailView(DetailView):
    model = Movie

class MovieDeleteView(DeleteView):
    model = Movie
    success_url = reverse_lazy("movies:Movie-List")

class MovieCreateView(CreateView):
    model = Movie
    fields = [
        "id",
        "title",
        "desc",
        "year",
        #"img",
    ]

class MovieUpdateView(UpdateView):
    model = Movie
    fields = "__all__"