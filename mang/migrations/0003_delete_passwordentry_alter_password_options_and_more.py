# Generated by Django 4.2.7 on 2025-01-17 06:42

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
        ('mang', '0002_passwordentry'),
    ]

    operations = [
        migrations.DeleteModel(
            name='PasswordEntry',
        ),
        migrations.AlterModelOptions(
            name='password',
            options={},
        ),
        migrations.RemoveField(
            model_name='password',
            name='logo',
        ),
        migrations.RemoveField(
            model_name='password',
            name='name',
        ),
        migrations.AddField(
            model_name='password',
            name='site_name',
            field=models.CharField(default='Unnamed', max_length=255),
        ),
        migrations.AlterField(
            model_name='password',
            name='email',
            field=models.CharField(max_length=255),
        ),
        migrations.AlterField(
            model_name='password',
            name='password',
            field=models.CharField(max_length=255),
        ),
        migrations.AlterField(
            model_name='password',
            name='user',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='passwords', to=settings.AUTH_USER_MODEL),
        ),
    ]
