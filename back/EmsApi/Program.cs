var builder = WebApplication.CreateBuilder(args);
builder.Services.AddCors(options =>
{
    options.AddPolicy("AllowLocalhost", builder => builder
        .WithOrigins("http://localhost:4200")
        .AllowAnyMethod()
        .AllowAnyHeader()
        .AllowCredentials());
});
var app = builder.Build();
app.UseCors("AllowLocalhost");

var db = new AppDbContext();

// User Idb;

app.MapGet("/all", async () => {
    var users = db.Users.ToList();
        return Results.Ok(users);
});

app.MapPost("/create", async (User user) => {
    db.Users.Add(user);
    await db.SaveChangesAsync();
        return Results.Ok(user);
});
// app.MapGet("/home", =>);
// app.MapGet("/user/{id}",);
// app.MapPost("/user/{id}",);
// app.MapDelete("/user/{id}",);
// app.MapPut("/user/{id}",);


app.Run();
