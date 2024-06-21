public interface IUser
{
    Guid Id { get; set; }
    string FirstName { get; set; }
    string LastName { get; set; }
    string Email { get; set; }
    int PhoneNumber { get; set; }
    string Position { get; set; }
    string Department { get; set; }
}