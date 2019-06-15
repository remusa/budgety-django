from django.contrib.auth.models import User
from rest_framework import serializers

from .models import Expense, Income


class ExpenseSerializer(serializers.HyperlinkedModelSerializer):
    owner = serializers.ReadOnlyField(source="owner.username")

    class Meta:
        model = Expense
        fields = ("url", "id", "total", "category", "note", "date", "owner")


class IncomeSerializer(serializers.HyperlinkedModelSerializer):
    owner = serializers.ReadOnlyField(source="owner.username")

    class Meta:
        model = Income
        fields = ("url", "id", "total", "category", "note", "date", "owner")


class UserSerializer(serializers.HyperlinkedModelSerializer):
    expenses = serializers.HyperlinkedRelatedField(
        many=True, view_name="expense-detail", read_only=True
    )
    incomes = serializers.HyperlinkedRelatedField(
        many=True, view_name="income-detail", read_only=True
    )

    # expenses = serializers.HyperlinkedRelatedField(many=True, queryset=Expense.objects.all())
    # incomes = serializers.HyperlinkedRelatedField(many=True, queryset=Income.objects.all())

    class Meta:
        model = User
        fields = ("url", "id", "username", "expenses", "incomes")
