from rest_framework import permissions

from .models import Expense, Income


class IsOwner(permissions.BasePermission):
    """
    Custom permission to only allow owners of an object to edit it.
    """

    def has_object_permission(self, request, view, obj):
        """Custom permission class to allow only bucketlist owners to edit them."""
        if isinstance(obj, Expense) or isinstance(obj, Income):
            return obj.owner == request.user
        return obj.owner == request.user

        # if request.method in permissions.SAFE_METHODS:
        #     return True
        # return obj.owner == request.user

