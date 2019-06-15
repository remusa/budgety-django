from django.test import TestCase
from .models import Expense, Income


class ExpenseModelTest(TestCase):
    @classmethod
    def setUpTestDate(cls):
        Expense.objects.create(total=123.45)
        Expense.objects.create(category="ENTERTAINMENT")
        Expense.objects.create(note="John Wick 3 tickets")
        # Expense.objects.create(date="2019-06-15T01:47:47.689168Z")

    def test_total_content(self):
        expense = Expense.objects.get(id=1)
        expected_object_total = f"{expense.total}"
        self.assertEquals(expected_object_total, 123.45)

    def test_category_content(self):
        expense = Expense.objects.get(id=1)
        expected_object_category = f"{expense.category}"
        self.assertEquals(expected_object_category, "Entertainment")

    def test_category_content(self):
        expense = Expense.objects.get(id=1)
        expected_object_note = f"{expense.note}"
        self.assertEquals(expected_object_note, "John Wick 3 tickets")

    # def test_category_content(self):
    #     expense = Expense.objects.get(id=1)
    #     expected_object_date = f"{expense.date}"
    #     self.assertEquals(expected_object_date, "2019-06-15T01:47:47.689168Z")
