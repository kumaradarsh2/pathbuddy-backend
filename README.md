# PathBuddy Backend

A Node.js backend API for connecting students with mentors through a centralized matching platform. Originally developed for a hackathon and now being expanded as a full-stack learning project.

## Overview

PathBuddy provides a RESTful API to match students with mentors based on their specific needs and manage support requests between them. The platform aims to streamline the mentorship process by offering intelligent matching algorithms and comprehensive request management.

## Tech Stack

- **Node.js** (ES Modules)
- **Express.js** - Web framework
- **MongoDB** - Database
- **Mongoose** - ODM for MongoDB
- **Postman** - API testing

## Current Features

- Express server setup with ES Modules support
- MongoDB integration with Mongoose ODM
- Story model with POST `/stories` endpoint
- Mentor data seeding functionality
- Intelligent mentor matching via GET `/mentors/match` with filtering capabilities

## Project Status

**Backend Development: ~66% Complete**

✅ **Completed**
- Basic Express application setup
- Database connection and models
- Story management endpoints
- Mentor data seeding
- Mentor matching algorithm

🔄 **In Progress**
- Request creation endpoint (`POST /request`)
- Request management endpoints (`GET /requests`)
- Code refactoring and folder structure optimization

📋 **Planned**
- Frontend development with React
- Enhanced matching algorithms
- User authentication system
- Admin dashboard

## Installation & Setup

1. **Clone the repository**
   ```bash
   git clone https://github.com/kumaradarsh2/pathbuddy-backend.git
   cd pathbuddy-backend
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Environment setup**
   ```bash
   cp .env.example .env
   ```
   Edit `.env` with your MongoDB connection string and other required variables.

4. **Start the development server**
   ```bash
   npm run dev
   ```

## Project Structure

```
pathbuddy-backend/
├── models/          # Database schemas
├── routes/          # API route definitions
├── controllers/     # Business logic
├── seed/           # Database seeding scripts
├── config/         # Configuration files
├── .env.example    # Environment variables template
└── server.js       # Application entry point
```

## API Endpoints

### Stories
- `POST /stories` - Create a new story

### Mentors
- `GET /mentors/match` - Find matching mentors based on criteria

### Upcoming Endpoints
- `POST /request` - Submit mentorship request
- `GET /requests` - Retrieve mentorship requests

## Contributing

This is a personal learning project, but feedback and suggestions are welcome. Feel free to open issues or submit pull requests.

## Future Development

- **Frontend**: React-based user interface
- **Authentication**: JWT-based user authentication
- **Real-time Features**: WebSocket integration for live notifications
- **Enhanced Matching**: Machine learning-based mentor recommendations

## Author

**Adarsh Kumar**
- [GitHub](https://github.com/kumaradarsh2)
- [LinkedIn](https://linkedin.com/in/kumaradarsh2)

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
