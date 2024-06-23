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

IUser Idb;

app.MapGet("/", () => "Hello World!");

app.MapPost("/create", async (IUser user) => {
    Console.WriteLine("SERGWERGWERGWE");
    Console.WriteLine(user);
});
// app.MapGet("/home", =>);
// app.MapGet("/user/{id}",);
// app.MapPost("/user/{id}",);
// app.MapDelete("/user/{id}",);
// app.MapPut("/user/{id}",);


app.Run();
