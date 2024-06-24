using Microsoft.EntityFrameworkCore;


var builder = WebApplication.CreateBuilder(args);
builder.Services.AddCors(options =>
{
    options.AddPolicy("AllowLocalhost", builder => builder
        .WithOrigins("http://localhost:4200")
        .AllowAnyMethod()
        .AllowAnyHeader()
        .AllowCredentials());
});
builder.Services.AddDbContext<AppDbContext>();
var app = builder.Build();
app.UseCors("AllowLocalhost");


app.MapGet("/all", async (AppDbContext db) => {
    var users = db.Users.ToList();
    Console.WriteLine("backend envolved !!!!!");
        return Results.Ok(users);
});

app.MapPost("/create", async (AppDbContext db, User user) => {
    db.Users.Add(user);
    await db.SaveChangesAsync();
    return Results.Ok(user);
});

app.MapDelete("/delete/{userid}", async (AppDbContext db, Guid userid) => {
    Console.WriteLine("userid back call === !!! ");
    var user = await db.Users.FindAsync(userid);
    if (user == null)
        return Results.NotFound(new { message = "User not found" });

    db.Users.Remove(user);
    await db.SaveChangesAsync();

    return Results.Ok();
});

// app.MapPut("/user/{id}",);

// app.MapGet("/user/{id}",);



app.Run();
