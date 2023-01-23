from django.urls import path
from . import views

urlpatterns = [
    path('', views.index, name="index"),
    path('test01datas/', views.getTestDatas, name="test01datas"),
    path('test01data/<int:id>', views.getTestData, name="test01data"),
]