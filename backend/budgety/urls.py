from django.urls import include, path
from rest_framework.urlpatterns import format_suffix_patterns
from rest_framework.schemas import get_schema_view


from budgety import views

schema_view = get_schema_view(title="Budgety API")


urlpatterns = [
    path("schema/", schema_view),
    path("expenses/", views.ExpenseList.as_view(), name="expense-list"),
    path("expenses/<int:pk>", views.ExpenseDetail.as_view(), name="expense-detail"),
    path("incomes/", views.IncomeList.as_view(), name="income-list"),
    path("incomes/<int:pk>", views.IncomeDetail.as_view(), name="income-detail"),
    path("users/", views.UserList.as_view(), name="user-list"),
    path("users/<int:pk>/", views.UserDetail.as_view(), name="user-detail"),
    path("", views.api_root),
]

urlpatterns = format_suffix_patterns(urlpatterns)
