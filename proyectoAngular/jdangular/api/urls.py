from django.contrib import admin
from django.urls import include, path
from .views import (
    MovieListView,
    MovieDetailView,
    MovieDeleteView,
    MovieCreateView,
    MovieUpdateView,
)


app_name = "movies"
urlpatterns = [
    path("", MovieListView.as_view(), name="Movie-List"),
    path("<int:pk>/", MovieDetailView.as_view(), name="Movie-Detail"),
    path("<int:pk>/delete", MovieDeleteView.as_view(), name="Movie-Delete"),
    path("create/", MovieCreateView.as_view(), name="Movie-Create"),
    path("update/", MovieUpdateView.as_view(), name="Movie-Update"),
]