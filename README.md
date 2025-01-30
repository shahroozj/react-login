# Next.js Authentication with JWT and Middleware

## Overview

This is a Next.js application implementing authentication using JSON Web Tokens (JWT) and middleware for access control. It provides a secure login system, protecting API routes and pages from unauthorized access.

## Features

- User authentication using JWT.
- Middleware-based route protection.
- Session management with HTTP-only cookies.

## Technologies Used

- **Next.js** - React framework for SSR and API routes.
- **JWT (jsonwebtoken)** - Secure token-based authentication.
- **Middleware** - Custom middleware for route protection.
- **Cookie-based authentication** - Secure session handling.

## Installation

1. Clone the repository:

   ```sh
   git clone https://github.com/shahroozj/react-login.git
   cd react-login
   ```

2. Install dependencies:

   ```sh
   npm install
   ```

3. Create an `.env.local` file and add the following environment variables:

   ```sh
   JWT_SECRET=your_jwt_secret_key
   ```

4. Run the development server:
   ```sh
   npm run dev
   ```

## Authentication Flow

1. **User Logs In:**
   - The login API verifies credentials and returns a JWT.
   - The JWT is stored in an HTTP-only cookie.
2. **Protected Routes:**
   - Middleware checks for a valid JWT before allowing access.
   - Redirects unauthorized users to the login page.
3. **User Logs Out:**
   - The logout clears the authentication cookie.
   - The user is redirected to the login page.

## Future Improvements

- Add social login (Google, GitHub, etc.)
- Implement refresh tokens for better session management
- Use a database to store user information

## License

This project is open-source and available under the MIT License.

---

Feel free to modify and extend the functionality as needed!
