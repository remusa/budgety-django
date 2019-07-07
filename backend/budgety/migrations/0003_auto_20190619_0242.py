# Generated by Django 2.2.2 on 2019-06-19 07:42

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('budgety', '0002_auto_20190617_2116'),
    ]

    operations = [
        migrations.AlterField(
            model_name='expense',
            name='category',
            field=models.CharField(choices=[('FOOD_&_DRINK', 'Food & Beverages'), ('ENTERTAINMENT', 'Entertainment')], default='Food & Drink', max_length=100),
        ),
        migrations.AlterField(
            model_name='income',
            name='category',
            field=models.CharField(choices=[('SALARY', 'Salary'), ('INTEREST_MONEY', 'Interest money'), ('GIFTS', 'Gifts'), ('SELLING', 'Selling'), ('AWARD', 'Award'), ('OTHERS', 'Others')], default='Salary', max_length=100),
        ),
    ]
