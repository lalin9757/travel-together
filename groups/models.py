from django.db import models
from django.conf import settings

class Group(models.Model):
    name = models.CharField(max_length=200)
    description = models.TextField()
    destination = models.CharField(max_length=200)
    is_public = models.BooleanField(default=True)
    admin = models.ForeignKey('users.CustomUser', on_delete=models.CASCADE)  # ✅ String reference
    created_at = models.DateTimeField(auto_now_add=True)
    
    def __str__(self):
        return self.name

class GroupMember(models.Model):
    user = models.ForeignKey('users.CustomUser', on_delete=models.CASCADE)  # ✅ String reference
    group = models.ForeignKey(Group, on_delete=models.CASCADE, related_name='members')
    status = models.CharField(max_length=20, default='pending')
    joined_at = models.DateTimeField(auto_now_add=True)
    
    def __str__(self):
        return f"{self.user.username} - {self.group.name}"