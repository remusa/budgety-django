# Generated by Django 2.2.2 on 2019-06-19 07:44

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('budgety', '0003_auto_20190619_0242'),
    ]

    operations = [
        migrations.AlterField(
            model_name='expense',
            name='category',
            field=models.CharField(choices=[('FOOD_&_DRINK', 'Food & Beverages'), ('BILLS_&_UTILITIES', 'Bills & Utilities'), ('TRANSPORTATION', 'Transportation'), ('SHOPPING', 'Shopping'), ('ENTERTAINMENT', 'Entertainment'), ('HEALTH_&_FITNESS', 'Health & Fitness'), ('GIFTS_&_DONATIONS', 'Gifts & Donations'), ('FAMILY', 'Family'), ('EDUCATION', 'Education'), ('INVESTMENT', 'Investment'), ('BUSINESS', 'Business'), ('INSURANCES', 'Insurances'), ('FEES_&_CHARGES', 'Fees & Charges'), ('WITHDRAWAL', 'Withdrawal'), ('OTHERS', 'Others')], default='Food & Drink', max_length=100),
        ),
    ]