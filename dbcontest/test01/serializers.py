from rest_framework.serializers import ModelSerializer
from .models import Test01


class TestDataSerializer(ModelSerializer):
    class Meta:
        model = Test01
        fields = '__all__'
        
        



# class PreprocessedImageSerializer(ModelSerializer):
#     class Meta:
#         model = PreprocessedImages
#         # fields = '__all__'
#         fields = ["image_title", "image_context"]
#         read_only_fields = ["image_id"]