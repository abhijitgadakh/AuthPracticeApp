
# MERN Stack Authentication App

A full-fledged authentication system built with MongoDB, Express, React, and Node.js (MERN). This project includes user registration and login functionality, secure password hashing with bcrypt, JWT-based authentication, API integration, and error handling. Deployed for live use.

## Features

- **User Authentication**: Secure registration and login system.
- **JWT Authentication**: Generate and verify JSON Web Tokens for session management.
- **Password Security**: Implements bcrypt for secure password hashing.
- **API Integration**: Connects the frontend with backend through RESTful APIs.
- **Form Validation**: Robust form validation and error handling.
- **Responsive Frontend**: Built with React for a seamless user experience.
- **Deployment**: Fully deployed on a cloud platform (e.g., Heroku).

## Tech Stack

- **Frontend**: React, Axios
- **Backend**: Node.js, Express.js
- **Database**: MongoDB with Mongoose ORM
- **Authentication**: JSON Web Tokens (JWT), bcrypt
- **Deployment**: Heroku (or any cloud hosting platform)

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/mern-authentication-app.git
   cd mern-authentication-app
   ```

2. Install dependencies for both the client and server:
   ```bash
   cd client
   npm install
   cd ../server
   npm install
   ```

3. Set up environment variables:
   - Create a `.env` file in the `server` folder with the following:
     ```
     MONGO_URI=your_mongodb_connection_string
     JWT_SECRET=your_jwt_secret
     PORT=8080
     ```

4. Run the development servers:
   - **Frontend**:
     ```bash
     cd client
     npm start
     ```
   - **Backend**:
     ```bash
     cd server
     npm start
     ```

5. Open your browser and navigate to:
   ```
   http://localhost:3000
   ```

## API Endpoints

### **Authentication Routes**
| Method | Endpoint        | Description             |
|--------|-----------------|-------------------------|
| POST   | `/auth/register` | Register a new user     |
| POST   | `/auth/login`    | Login an existing user  |

## Deployment

1. Deploy the frontend to a cloud hosting platform (e.g., Netlify, Vercel).
2. Deploy the backend to a cloud platform (e.g., Heroku, Render, AWS).
3. Update API URLs in the frontend to point to the live backend.

## Screenshots

![Signup Page](./screenshots/signup.png)
![Login Page](./screenshots/login.png)

## Future Enhancements

- Add role-based authorization (admin, user).
- Password reset functionality with email verification.
- Profile management and edit features.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Contributing

Contributions are welcome! Please fork this repo and submit a pull request.

## Acknowledgements

- Inspired by the [YouTube tutorial](https://www.youtube.com/watch?v=OYkmIIKfWq4).
