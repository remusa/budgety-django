from django.urls import include, path
from rest_framework.urlpatterns import format_suffix_patterns
from rest_framework.schemas import get_schema_view
from knox import views as knox_views

from budgety import views

schema_view = get_schema_view(title="Budgety API")


urlpatterns = [
    path("api/auth/", include("knox.urls")),
    path("api/auth/register", views.RegisterAPI.as_view()),
    path("api/auth/login", views.LoginAPI.as_view()),
    path("api/auth/user", views.UserAPI.as_view()),
    path("api/auth/logout", knox_views.LogoutView.as_view(), name='knox_logout'),
    path("api/schema/", schema_view),
    path("api/expenses/", views.ExpenseList.as_view(), name="expense-list"),
    path("api/expenses/<int:pk>", views.ExpenseDetail.as_view(), name="expense-detail"),
    path("api/incomes/", views.IncomeList.as_view(), name="income-list"),
    path("api/incomes/<int:pk>", views.IncomeDetail.as_view(), name="income-detail"),
    path("api/users/", views.UserList.as_view(), name="user-list"),
    path("api/users/<int:pk>/", views.UserDetail.as_view(), name="user-detail"),
    path("", views.api_root),
]

urlpatterns = format_suffix_patterns(urlpatterns)
