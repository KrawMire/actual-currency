﻿var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

builder.Services.AddControllers();

// For the development. Just avoiding CORS policy
builder.Services.AddCors(options =>
{
    options.AddPolicy("AllOrigins", corsBuilder =>
    {
        corsBuilder.AllowAnyHeader()
        .AllowAnyMethod()
        .AllowAnyOrigin();
    });
});

var app = builder.Build();

// Configure the HTTP request pipeline.

app.UseAuthorization();

app.MapControllers();

// For the development. Just avoiding CORS policy
app.UseCors("AllOrigins");

app.Run();