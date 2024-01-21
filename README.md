# Project Title

StoreFleet Backend

## Description

This project serves as the backend for StoreFleet, implementing user authentication and related functionalities.

## Features

- **User Authentication:** Secure user authentication with password hashing using bcrypt and JWT token generation.
- **User Management:** CRUD operations for user profiles, roles, and admin capabilities.
- **Password Reset:** Implementation of a secure password reset mechanism with token-based authentication.
- **Email Notifications:** Sending welcome emails and password reset emails using utility functions.
- **Database Connectivity:** MongoDB connection established using Mongoose for data storage.

## Getting Started

1. Clone the repository.
2. Install dependencies using `npm install`.
3. Set up environment variables in a `.env` file (e.g., `uat.env` for UAT environment).
4. Run the server using `node server.js`.

## Environment Variables

Ensure the following environment variables are set:

- `PORT`: Port for the server to run.
- `mongoURI`: MongoDB connection string.
- `JWT_Secret`: Secret key for JWT token generation.
- `JWT_Expire`: Token expiration time.
- `COOKIE_EXPIRES_IN`: Cookie expiration time.
- `STORFLEET_SMPT_MAIL`: SMTP email for StoreFleet notifications.
- `STORFLEET_SMPT_MAIL_PASSWORD`: SMTP email password.
- `SMPT_SERVICE`: SMTP service (e.g., Gmail).

## Common Issues

- **MongoDB Connection:**
  - Ensure that the MongoDB connection string is correctly set in the environment variable.
  - Check for proper network access and MongoDB server availability.

- **JWT Secret:**
  - Verify that the JWT secret key is securely stored and consistent across the application.

- **Email Configuration:**
  - Confirm that SMTP email configurations are accurate for sending emails.

- **Password Reset:**
  - Ensure that the password reset functionality is triggered correctly, and tokens are generated.

## Known Bugs

- **Undefined Server URL:**
  - There's an issue with the server URL being displayed as `http://localhost:undefined`.

## Contributions

Contributions and bug reports are welcome. Feel free to open issues or submit pull requests.

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details.

## Acknowledgments

- Here i talk only about what i do here........