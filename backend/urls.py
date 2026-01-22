from django.contrib import admin
from django.urls import path, include
from django.http import JsonResponse


def api_home(request):
    return JsonResponse({
        "message": "Travel Together API is running 🚀",
        "endpoints": {
            "auth": "/api/auth/",
            "groups": "/api/groups/",
            "chat": "/api/chat/",
        }
    })


urlpatterns = [
    path('admin/', admin.site.urls),

    path('api/', api_home),           # ✅ ADD THIS
    path('api/auth/', include('users.urls')),
    path('api/groups/', include('groups.urls')),
    path('api/chat/', include('chat.urls')),
]
