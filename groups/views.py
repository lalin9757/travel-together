from django.http import JsonResponse

def group_home(request):
    return JsonResponse({
        "message": "Groups API working ✅"
    })
