from gtts import gTTS


def tts_save(orderlist):
    datalist = []
    for i in orderlist:
        datalist.append(str(i))
    audio = 'tts.mp3'
    text = '제품명은 ' + datalist[1] + ',카테고리는 ' + datalist[2] + ',제조사는 ' + datalist[3] + ' 입니다.' +\
        '가격은 ' + str(datalist[4]) + '원,유효기간은' + str(datalist[5]) + '년,' + datalist[6] + '제품 입니다.'
    tts = gTTS(text=text, lang='ko')
    tts.save('function/tts_voice/' + audio)
    
    return text