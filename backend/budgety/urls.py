from django.urls import include, path
from rest_framework.urlpatterns import format_suffix_patterns
from rest_framework.schemas import get_schema_view
from knox import views as knox_views

from budgety import views

schema_view = get_schema_view(title="Budgety API")


urlpatterns = [
    path("api/v1/auth/", include("knox.urls")),
    path("api/v1/auth/register", views.RegisterAPI.as_view()),
    path("api/v1/auth/login", views.LoginAPI.as_view()),
    path("api/v1/auth/user", views.UserAPI.as_view()),
    path("api/v1/auth/logout", knox_views.LogoutView.as_view(), name="knox_logout"),
    path("api/v1/schema/", schema_view),
    path("api/v1/expenses/", views.ExpenseList.as_view(), name="expense-list"),
    path("api/v1/expenses/<int:pk>", views.ExpenseDetail.as_view(), name="expense-detail"),
    path("api/v1/incomes/", views.IncomeList.as_view(), name="income-list"),
    path("api/v1/incomes/<int:pk>", views.IncomeDetail.as_view(), name="income-detail"),
    path("api/v1/users/", views.UserList.as_view(), name="user-list"),
    path("api/v1/users/<int:pk>/", views.UserDetail.as_view(), name="user-detail"),
    path("", views.api_root),
]

urlpatterns = format_suffix_patterns(urlpatterns)
