import pymysql
import uuid
import json
import requests
import time



def title(result):
    
    max_ = []

    for i in range(len(result['images'][0]['fields'])):
        xx = []
        yy = []
        for j in range(4): 
            x = result['images'][0]['fields'][i]['boundingPoly']['vertices'][j]['x']
            y = result['images'][0]['fields'][i]['boundingPoly']['vertices'][j]['y']
            xx.append(x)
            yy.append(y)

        xxx = max(xx) - min(xx)
        yyy = max(yy) - min(yy)
        sum_ = xxx + yyy
        len_ = len(result['images'][0]['fields'][i]['inferText'])
        max_.append(round(sum_/len_,0))

    num = 0
    for i in max_:
        if max(max_) == i:
            break
        num += 1


    return result['images'][0]['fields'][num]['inferText']





def ocr(filename):
  

  # #필요한 기본 DB 정보
  # host = "localhost" #접속할 db의 host명
  # user = "root" #접속할 db의 user명
  # pw = "1234" #접속할 db의 password
  # db = "finaldb" #접속할 db의 table명 (실제 데이터가 추출되는 table)

  # # def OCR(filepath):

  # conn = pymysql.connect( host= host, user = user, password = pw, db = db)



  # sql = "SELECT files FROM test01_uploadfilemodel where files = 'documents/45101013_DSC7OkF.jpg'"
  # #sql문 실행
  # cur = conn.cursor()

  # cur.execute(sql)

  # #데이터 받아오기
  # data = cur.fetchall()





  # DATABASES = {
  #     "default": {
  #         'ENGINE': 'django.db.backends.mysql',
  #         'NAME': 'finaldb',
  #         'USER': 'root',
  #         'PASSWORD': '1234',
  #         'HOST': 'localhost',
  #         'PORT': '3306',
  #     }
  # }


  api_url = 'https://qralnzfe0v.apigw.ntruss.com/custom/v1/20293/824e6f49536401b9da7aa3a8df48e13da7e7792fb5d354d94200f033e467fab6/general'
  secret_key = 'dGhFR1hxeU5Sa2VvbFBVTHprZGxmTHZGdG5nVllYdmI='


  fixpath = 'C:/Users/admin/Documents/GitHub/FinalProject/dbcontest/media/documents/'

  path = fixpath + str(filename)
  print(path)
  files = [('file', open(path,'rb'))]


  request_json = {'images': [{'format': 'jpg',
                                  'name': 'demo'
                                }],
                      'requestId': str(uuid.uuid4()),
                      'version': 'V2',
                      'timestamp': int(round(time.time() * 1000))
                    }
  
  payload = {'message': json.dumps(request_json).encode('UTF-8')}
  
  headers = {
    'X-OCR-SECRET': secret_key,
  }
  
  response = requests.request("POST", api_url, headers=headers, data=payload, files=files)
  result = response.json()

  text = ''
  for field in result['images'][0]['fields']:
      text += (field['inferText'])

  titles = title(result)
  
  returns = [text, titles]
  
  return returns




