var builder = WebApplication.CreateBuilder(args);
var app = builder.Build();

var db = new AppDbContext();

IUser Idb;

app.MapGet("/", () => "Hello World!");

// app.MapGet("/home", =>);
// app.MapGet("/user/{id}",);
// app.MapPost("/user/{id}",);
// app.MapDelete("/user/{id}",);
// app.MapPut("/user/{id}",);


app.Run();
