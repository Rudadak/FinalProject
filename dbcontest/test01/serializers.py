from rest_framework.serializers import ModelSerializer
from .models import Test01

class TestDataSerializer(ModelSerializer):
    class Meta:
        model = Test01
        fields = '__all__'