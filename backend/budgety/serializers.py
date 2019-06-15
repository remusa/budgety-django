from django.contrib.auth.models import User
from rest_framework import serializers

from .models import Expense, Income


class ExpenseSerializer(serializers.ModelSerializer):
    owner = serializers.ReadOnlyField(source="user.username")

    class Meta:
        model = Expense
        fields = ("id", "total", "category", "note", "date", "owner")


class IncomeSerializer(serializers.ModelSerializer):
    owner = serializers.ReadOnlyField(source="user.username")

    class Meta:
        model = Income
        fields = ("id", "total", "category", "note", "date", "owner")


class UserSerializer(serializers.ModelSerializer):
    expenses = serializers.PrimaryKeyRelatedField(many=True, queryset=Expense.objects.all())
    incomes = serializers.PrimaryKeyRelatedField(many=True, queryset=Income.objects.all())

    class Meta:
        model = User
        fields = ("id", "username", "expenses", "incomes")
