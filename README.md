# HR Management System

## Overview
This project is a comprehensive HR Management System built with modern web technologies including React, Tailwind CSS, Node.js, Express, and MySQL. It integrates Firebase Authentication for secure email/password and Google sign-in.

## Features
- **Dashboard**: Displays total number of employees, departments, and department-wise employee counts.
- **Employee Management**: View all employees in a table with options to view details, update, and delete records.
- **Add Employee**: Create new employee profiles.
- **Employee Attendance**: Manage and track employee attendance.
- **Department-wise Employee Info**: View detailed information of employees categorized by departments.

## Technologies Used
- **Frontend**: React, Tailwind CSS
- **Backend**: Node.js, Express
- **Database**: MySQL
- **Authentication**: Firebase Authentication (Email/Password and Google Sign-In)

## Setup Instructions

### Prerequisites
- Node.js (v14 or later)
- MySQL
- Firebase project (for authentication)

### Installation
1. **Clone the repository**
   ```bash
   git clone https://github.com/DarkAsfu/hr-management.git
   cd hr-management
   ```

2. **Install frontend dependencies**
   ```bash
   cd client
   npm install
   ```

3. **Install backend dependencies**
   ```bash
   cd ../server
   npm install
   ```

4. **Setup MySQL Database**
   - Create a new MySQL database.
   - Import the SQL schema provided in the `db/schema.sql` file.

5. **Configure environment variables**
   - Create a `.env` file in the `server` directory and add the following:
     ```env
     DB_HOST=your_db_host
     DB_USER=your_db_user
     DB_PASSWORD=your_db_password
     DB_NAME=your_db_name
     FIREBASE_API_KEY=your_firebase_api_key
     FIREBASE_AUTH_DOMAIN=your_firebase_auth_domain
     FIREBASE_PROJECT_ID=your_firebase_project_id
     FIREBASE_STORAGE_BUCKET=your_firebase_storage_bucket
     FIREBASE_MESSAGING_SENDER_ID=your_firebase_messaging_sender_id
     FIREBASE_APP_ID=your_firebase_app_id
     ```

6. **Run the development server**
   - Start the backend server:
     ```bash
     cd server
     npm run dev
     ```
   - Start the frontend development server:
     ```bash
     cd ../client
     npm start
     ```

### Usage
- **Dashboard**: Provides an overview of the total number of employees and departments.
- **All Employees**: View and manage all employee records.
- **Add Employee**: Create a new employee profile.
- **Employee Attendance**: Track employee attendance.
- **Department Info**: View department-wise employee details.



## Contributing
If you wish to contribute, please fork the repository and use a feature branch. Pull requests are warmly welcome.




---

Thank you for checking out my project! If you like it, please give it a star ⭐ on GitHub!

---

