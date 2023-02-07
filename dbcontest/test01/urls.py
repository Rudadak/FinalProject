from django.urls import path
from . import views

from rest_framework import routers
from django.urls import path, include
from test01 import views


urlpatterns = [
    path('', views.index, name="index"),
    path('datas/', views.getTestDatas, name="datas"),
    path('data/<int:id>', views.getTestData, name="data"),
    path('getMembers/', views.getMembers, name="getMembers"),
    path('camera/', views.model_form_upload, name = "camera"),
    path('sentence/', views.getSentence, name = "sentence"),
] 
