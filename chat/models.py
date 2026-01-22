from django.db import models

class Message(models.Model):
    group = models.ForeignKey('groups.Group', on_delete=models.CASCADE)  # ✅ String reference
    user = models.ForeignKey('users.CustomUser', on_delete=models.CASCADE)  # ✅ String reference
    text = models.TextField()
    timestamp = models.DateTimeField(auto_now_add=True)
    
    def __str__(self):
        return f"{self.user.username}: {self.text[:50]}"