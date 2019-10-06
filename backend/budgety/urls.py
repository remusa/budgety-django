from budgety import views
from django.urls import include, path
from knox import views as knox_views
from rest_framework.schemas import get_schema_view
from rest_framework.urlpatterns import format_suffix_patterns


schema_view = get_schema_view(title="Budgety API")


urlpatterns = [
    path("auth/", include("knox.urls")),
    path("auth/logout", knox_views.LogoutView.as_view(), name="knox_logout"),
    path("auth/register", views.RegisterAPI.as_view()),
    path("auth/login", views.LoginAPI.as_view()),
    path("auth/user", views.UserAPI.as_view()),
    path("schema/", schema_view),
    path("category/", views.CategoryList.as_view(), name="category-list"),
    path("category/<int:pk>", views.CategoryDetail.as_view(), name="category-detail"),
    path("expenses/", views.ExpenseList.as_view(), name="expense-list"),
    path("expenses/<int:pk>", views.ExpenseDetail.as_view(), name="expense-detail"),
    path("incomes/", views.IncomeList.as_view(), name="income-list"),
    path("incomes/<int:pk>", views.IncomeDetail.as_view(), name="income-detail"),
    path("users/", views.UserList.as_view(), name="user-list"),
    path("users/<int:pk>/", views.UserDetail.as_view(), name="user-detail"),
    path("", views.api_root),
]

urlpatterns = format_suffix_patterns(urlpatterns)
