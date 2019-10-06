from django import forms
from django.contrib.auth.models import User
from django.core.validators import MinValueValidator
from django.db import models
from django.utils.timezone import now


class Category(models.Model):
    auto_increment_id = models.AutoField(primary_key=True)
    name = models.CharField(max_length=150, blank=False)
    TYPE_CHOICES = [("EXPENSE", "Expense"), ("INCOME", "Income")]
    category_type = models.CharField(choices=TYPE_CHOICES, max_length=100, default="Expense")

    class Meta:
        verbose_name_plural = "Categories"

    def __str__(self):
        return self.name


class Expense(models.Model):
    amount = models.FloatField(validators=[MinValueValidator(0.0)])
    category = models.ForeignKey(
        Category,
        on_delete=models.SET_NULL,
        null=True,
        limit_choices_to={"category_type": "EXPENSE"},
    )
    note = models.CharField(max_length=150, blank=False)
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
    amount = models.FloatField(validators=[MinValueValidator(0.0)])
    category = models.ForeignKey(
        Category, on_delete=models.SET_NULL, null=True, limit_choices_to={"category_type": "INCOME"}
    )
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
