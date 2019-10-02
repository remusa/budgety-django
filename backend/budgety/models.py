from django import forms
from django.db import models
from django.contrib.auth.models import User
from django.utils.timezone import now

# class ExpenseCategory(models.Model):
#     choices = [(FOOD_DRINK, "Food & Drink"), (CLOTHES, "Clothes"), (ENTERTAINMENT, "Entertainment")]

#     name = models.CharField(_(""), max_length=50)


class ExpenseCategory(models.Model):
    expense_category = models.CharField(max_length=150)

    class Meta:
        verbose_name_plural = "Expense Categories"

    def __str__(self):
        return self.expense_category


class IncomeCategory(models.Model):
    income_category = models.CharField(max_length=150)

    class Meta:
        verbose_name_plural = "Income Categories"

    def __str__(self):
        return self.income_category


class Expense(models.Model):
    CATEGORY_CHOICES = [
        ("FOOD_&_DRINK", "Food & Beverages"),
        ("BILLS_&_UTILITIES", "Bills & Utilities"),
        ("TRANSPORTATION", "Transportation"),
        ("SHOPPING", "Shopping"),
        ("ENTERTAINMENT", "Entertainment"),
        ("HEALTH_&_FITNESS", "Health & Fitness"),
        ("GIFTS_&_DONATIONS", "Gifts & Donations"),
        ("FAMILY", "Family"),
        ("EDUCATION", "Education"),
        ("INVESTMENT", "Investment"),
        ("BUSINESS", "Business"),
        ("INSURANCES", "Insurances"),
        ("FEES_&_CHARGES", "Fees & Charges"),
        ("WITHDRAWAL", "Withdrawal"),
        ("OTHERS", "Others"),
    ]

    total = models.FloatField(blank=True, default=0)
    category = models.CharField(
        choices=CATEGORY_CHOICES, max_length=100, default="Food & Beverages"
    )
    # category = models.ForeignKey(ExpenseCategory, on_delete=models.SET_NULL, null=True)
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
    CATEGORY_CHOICES = [
        ("SALARY", "Salary"),
        ("INTEREST_MONEY", "Interest money"),
        ("GIFTS", "Gifts"),
        ("SELLING", "Selling"),
        ("AWARD", "Award"),
        ("OTHERS", "Others"),
    ]

    total = models.FloatField(blank=True, default=0)
    category = models.CharField(choices=CATEGORY_CHOICES, max_length=100, default="Salary")
    # category = models.ForeignKey(IncomeCategory, on_delete=models.SET_NULL, null=True)
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
