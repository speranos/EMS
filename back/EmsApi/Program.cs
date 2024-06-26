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

builder.WebHost.ConfigureKestrel(serverOptions =>
{
    serverOptions.ListenAnyIP(5146);
});

builder.Services.AddDbContext<AppDbContext>();
var app = builder.Build();
app.UseCors("AllowLocalhost");


app.MapGet("/page/{pagenum}", async (AppDbContext db, int pagenum) => {
    var users = await db.Users
    .Skip((pagenum - 1) * 9)
    .Take(9)
    .ToListAsync();
    return Results.Ok(users);
});

app.MapGet("/user/{userid}", async (AppDbContext db, Guid userid) => {
    var user = await db.Users.FindAsync(userid);
    if(user == null)
        return Results.NotFound();
    return Results.Ok(user);
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
    var user = await db.Users.FindAsync(userid);
    if (user == null)
        return Results.NotFound();
    db.Users.Remove(user);
    await db.SaveChangesAsync();
    return Results.Ok();
});


app.Run();
