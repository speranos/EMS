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


app.MapGet("/page/{pagenum}", async (AppDbContext db, int pagenum) => {
    int totalCount = await db.Users.CountAsync();
    var users = db.Users
    .Skip((pagenum - 1) * 9)
    .Take(9)
    .ToListAsync();
    return Results.Ok(users.Result);
});

app.MapGet("/user/{userid}", async (AppDbContext db, Guid userid) => {
    var user = db.Users.FindAsync(userid);
    return Results.Ok(user.Result);
});

app.MapGet("/count", async (AppDbContext db) => {
    int count = await db.Users.CountAsync();
    return Results.Ok(count);
});

app.MapPost("/create", async (AppDbContext db, User user) => {
    db.Users.Add(user);
    await db.SaveChangesAsync();
    return Results.Ok(user);
});

app.MapPut("/update", async (AppDbContext db, User user) => {
    db.Users.Update(user);
    await db.SaveChangesAsync();
    return Results.Ok();

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


app.Run();
