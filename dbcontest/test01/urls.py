from django.urls import path
from . import views

urlpatterns = [
    path('', views.index, name="index"),
    path('datas/', views.getTestDatas, name="datas"),
    path('data/<int:id>', views.getTestData, name="data"),
    path('getMembers/', views.getMembers, name="getMembers"),
]