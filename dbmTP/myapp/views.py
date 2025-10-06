from django.shortcuts import render
import subprocess
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status

# Create your views here.
class RunRCode(APIView):
    def post(self, request):

        # extract R code from the request
        r_code = request.data.get('code')
        print("Executing R code:", r_code)
    # run the R code using subprocess
        try:
            result = subprocess.run(
                ['Rscript', '-e', r_code],
                capture_output=True,
                text=True,
                check=True
            )
            return Response({'output': result.stdout}, status=status.HTTP_200_OK)
        except subprocess.CalledProcessError as e:
            return Response({'error': e.stderr}, status=status.HTTP_400_BAD_REQUEST)

def index(request):
    return render(request, 'index.html')
        
