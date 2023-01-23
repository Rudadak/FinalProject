from django.shortcuts import render

# Create your views here.

from rest_framework.response import Response
from rest_framework.decorators import api_view
from .models import Test01
from .serializers import TestDataSerializer
from django.shortcuts import render

def index(request):
    return render(request, 'index.html')


@api_view(['GET'])
def getTestDatas(request):
    datas = Test01.objects.all()
    serializer = TestDataSerializer(datas, many=True)
    return Response(serializer.data)


@api_view(['GET'])
def getTestData(request, id):
    data = Test01.objects.get(id=id)
    serializer = TestDataSerializer(data, many=False)
    return Response(serializer.data)