public class IUser
{
    public Guid Id { get; set; } = Guid.NewGuid();
    public string firstName { get; set; } = "";
    public string lastName { get; set; } = "";
    public string email { get; set; } = "";
    public string phoneNumber { get; set; } = "";
    public string position { get; set; } = "";
    public string department { get; set; } = "";
}