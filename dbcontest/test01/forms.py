from django import forms
 
# Model Import 
from .models import UploadFileModel
 
class DocumentForm(forms.ModelForm):
    class Meta:
        model = UploadFileModel
        fields = ("files",)
