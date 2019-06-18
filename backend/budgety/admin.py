from django.contrib import admin
from .models import Expense, Income, ExpenseCategory, IncomeCategory

# Register your models here.

admin.site.register(ExpenseCategory)
admin.site.register(Expense)
admin.site.register(IncomeCategory)
admin.site.register(Income)
