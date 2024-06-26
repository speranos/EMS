# E M S

This project is a full-stack application developed with .NET 8 Web API for the backend and Angular for the frontend, designed to manage employee data with CRUD operations. The project is containerized using Docker for easy deployment.

## Backend (.NET 8 API)

### Project Setup
- Create a .NET 8 Web API project.
- Use Entity Framework Core with a SQLite database.

### Employee Object
- Properties: Id (GUID), FirstName, LastName, Email, PhoneNumber, Position, Department.

### API Endpoints
- Create RESTful endpoints to manage the employees.

## Frontend (Angular Application)

### Project Setup
- Create an Angular project using Angular CLI.

### Employee Management
- Develop a service to communicate with the API.
- Create components for listing, viewing, adding, and editing employees.

### CRUD Operations
- Implement forms and views for Create, Read, Update, and Delete operations.

### Routing
- Set up Angular routing for navigation between views.

## Deployment with Docker

The project is containerized using Docker. To run the project, follow these steps:
1. Clone the repository to your local machine.
2. Navigate to the project directory.
3. Run `docker-compose up` to start the application.
4. Visit [http://localhost:4200/](http://localhost:4200/) in your browser.

## Usage

Once the application is running, you can manage employee data through the frontend interface. Use the provided forms to add, edit, view, and delete employee records.

## View
![Screen Shot 2024-06-25 at 8 10 19 PM](https://github.com/speranos/EMS/assets/57815941/82dec405-dc64-4bb7-b775-2cd8e3459d5b)
## Pagination
![Screen Shot 2024-06-25 at 8 10 28 PM](https://github.com/speranos/EMS/assets/57815941/4a45e22d-81ab-4f25-b6e1-53245a77e7e9)
## Create
![Screen Shot 2024-06-25 at 8 10 40 PM](https://github.com/speranos/EMS/assets/57815941/2d6b3d45-3bfa-4ab0-9467-97b0dc8d9a6b)
## Edit
![Screen Shot 2024-06-25 at 8 11 32 PM](https://github.com/speranos/EMS/assets/57815941/27812416-2a62-44f2-8207-9bf31140017c)
## Delete
![Screen Shot 2024-06-25 at 8 11 42 PM](https://github.com/speranos/EMS/assets/57815941/89da6fb8-bb58-4ad0-81a9-337773f9df6a)


