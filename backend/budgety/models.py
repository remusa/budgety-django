from django import forms
from django.db import models
from django.contrib.auth.models import User
from django.utils.timezone import now

# class ExpenseCategory(models.Model):
#     choices = [(FOOD_DRINK, "Food & Drink"), (CLOTHES, "Clothes"), (ENTERTAINMENT, "Entertainment")]

#     name = models.CharField(_(""), max_length=50)


class Expense(models.Model):
    CATEGORY_CHOICES = [("FOOD_&_DRINK", "Food & Drink"), ("ENTERTAINMENT", "Entertainment")]

    total = models.FloatField(blank=True, default=0)
    category = models.CharField(choices=CATEGORY_CHOICES, max_length=100, default="Food & Drink")
    note = models.CharField(max_length=150, blank=True, default="")
    date = models.DateTimeField(default=now, blank=True)
    created_at = models.DateTimeField(auto_now_add=True)
    owner = models.ForeignKey(
        "auth.User", related_name="expenses", on_delete=models.CASCADE, null=True
    )

    class Meta:
        ordering = ("date",)

    def __str__(self):
        return self.note


class Income(models.Model):
    CATEGORY_CHOICES = [("SALARY", "Salary")]

    total = models.FloatField(blank=True, default=0)
    category = models.CharField(choices=CATEGORY_CHOICES, max_length=100, default="Salary")
    note = models.CharField(max_length=150, blank=True, default="")
    date = models.DateTimeField(default=now, blank=True)
    created_at = models.DateTimeField(auto_now_add=True)
    owner = models.ForeignKey(
        "auth.User", related_name="incomes", on_delete=models.CASCADE, null=True
    )

    class Meta:
        ordering = ("date",)

    def __str__(self):
        return self.note
