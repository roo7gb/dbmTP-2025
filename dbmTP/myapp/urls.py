from django.urls import path
from . import views
from django.views.generic import TemplateView

urlpatterns = [
    path('api/r/run/', views.RunRCode.as_view(), name='run_r_code'),  # API to run R code
    path('', TemplateView.as_view(template_name='index.html')),  # Serve the React app

]