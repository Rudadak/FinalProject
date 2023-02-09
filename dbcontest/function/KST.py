#  import torch
# from sentence_transformers import util
# import numpy as np
# from konlpy.tag import Kkma
# md = torch.load('C:/Users/admin/Documents/GitHub/FinalProject/dbcontest/function/source/info.tar')


# word_embedding_model = md['word_embedding_model']
# pooling_model = md['pooling_model']
# model = md['model']
# embedder = md['embedder']
# df = md['df']
# ## 전체
# tot_corpus = md['tot_corpus']
# tot_embedding = md['tot_embedding']
# ## 기초
# bas_corpus = md['bas_corpus']
# bas_embedding = md['bas_embedding']
# ## 색조
# col_corpus = md['col_corpus']
# col_embedding = md['col_embedding']
# ## 미리 정한 키워드
# bas = ['스킨', '스킨로션','로션', '크림','에밀젼','에밀전','에센스','에세스','수분크림',\
#        '미스트','촉촉', '세럼','토너','패드','닦토','팩','성분','순한']
# col = ['가루','쉐도우','섀도우','새도우','팔레트','파레트','립스틱','립','틴트','발색','매트',\
#        '메트','벨벳','밸벳','글로시','입술','글로스','유리알','유리','쿠션','파운','파운데이션',\
#        '파데','노세범','파대','밀착력','밀착','컬링','볼륨','롱','마스카라','베이스','속눈썹','컬링력',\
#        '아이라인','아이라이너','번지는','유지력', '색']
# ## konlpy 클래스 호출
# kkma = Kkma()
# def kst_model(query):
#     # 쿼리문에서 카테고리 분석하기
#     k  =kkma.nouns(query)
#     no = [2 if i in bas else 3 if i in col else 1 for i in k]
#     answer = [2 if 2 in no and 1 in no else 3 if 3 in no and 1 in no else 1]
#     num = answer[0] # 분석된 내용으로 카테고리 선택하기
#     if num == 1:
#         embed = tot_embedding
#         corpus = tot_corpus
#     elif num == 2:
#         embed = bas_embedding
#         corpus = bas_corpus
#     elif num == 3:
#         embed = col_embedding
#         corpus = col_corpus
#     # 관련 코퍼스와 임베딩으로 유사 문장 서치
#     query_embedding = embedder.encode(query, convert_to_tensor=True)
#     cos_scores = util.pytorch_cos_sim(query_embedding, embed)[0]
#     cos_scores = cos_scores.cpu()
#     top_results = np.argpartition(-cos_scores, range(5))[0:5]
#     answer = []
#     test = []
#     for v, idx in enumerate(top_results[0:7]):
#         text = corpus[idx].strip()
#         for i in range(3344):  # 전체 df에서
#             if text in df['rv'][i] and text not in test:
#                 pname = df['pname'][i]
#                 if text not in answer:
#                     test.append(text)
#                     answer.append([pname, f"리뷰 내용: {text}", f"(유사도: {round(float(cos_scores[idx]),4)})"])
#     return answer

