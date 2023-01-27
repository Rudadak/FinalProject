from django.shortcuts import render

# Create your views here.

from rest_framework.response import Response
from rest_framework.decorators import api_view
from .models import Test01
from .serializers import TestDataSerializer
from django.shortcuts import render

import os
import sys
sys.path.append(os.path.dirname(os.path.abspath(os.path.dirname(__file__))))

from function.tts import *


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


@api_view(['POST'])
def getMembers(request):
    reqData = request.data
    id = reqData['id']
    name = reqData['name']
    # print("id is : ", id)
    # print("name is : ", name)
    data = Test01.objects.filter(id=id, name=name)
    serializer = TestDataSerializer(data, many=True)
    test = tts_save(serializer.data[0].values())
    print(test)
    return Response(serializer.data)