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
from function.OCR import ocr


import json
 
from django.http import HttpResponse
from django.views.decorators.csrf import csrf_exempt
from django.utils.decorators import method_decorator
 
from .forms import DocumentForm



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
    test = tts_save(serializer.data.values())
    print(test)
    return Response(serializer.data)


@api_view(['POST'])
def getMembers(request):
    reqData = request.data
    name = reqData['name']
    # print(name)
    # print("id is : ", id)
    # print("name is : ", name)
    data = Test01.objects.filter(name__contains=name)
    serializer = TestDataSerializer(data, many=True)
    
    
    # print(test)
    return Response(serializer.data)


@method_decorator(csrf_exempt, name="dispatch")
def model_form_upload(request):
    if request.method == "POST":
        form = DocumentForm(request.POST,request.FILES)
        if form.is_valid():
            form.save()
            returns = ocr(form.files['files'])
            title = returns[1]
            text = returns[0]
            print(returns)
            return HttpResponse(json.dumps({'status':"Success","text": text, "title": title}))
        else:
            return HttpResponse(json.dumps({"status": "Failed"}))
