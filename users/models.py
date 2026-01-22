from django.contrib.auth.models import AbstractUser
from django.db import models
from django.utils import timezone

class CustomUser(AbstractUser):
    # Additional fields
    phone = models.CharField(max_length=15, blank=True, null=True)
    profile_picture = models.ImageField(upload_to='profile_pics/', blank=True, null=True)
    bio = models.TextField(blank=True, null=True)
    location = models.CharField(max_length=100, blank=True, null=True)
    date_of_birth = models.DateField(blank=True, null=True)
    is_email_verified = models.BooleanField(default=False)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    
    # Travel preferences
    travel_interests = models.TextField(blank=True, null=True)
    preferred_group_size = models.CharField(max_length=20, blank=True, null=True)
    languages = models.CharField(max_length=200, blank=True, null=True)
    
    def __str__(self):
        return self.username
    
    class Meta:
        ordering = ['-date_joined']

class UserProfile(models.Model):
    user = models.OneToOneField(CustomUser, on_delete=models.CASCADE, related_name='profile')
    total_trips = models.IntegerField(default=0)
    rating = models.FloatField(default=5.0)
    reviews_count = models.IntegerField(default=0)
    
    def __str__(self):
        return f"{self.user.username}'s Profile"