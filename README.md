📌 # **Beneficiary Management App**

A CNIC-based Beneficiary Management System designed to help welfare organizations efficiently register, track, and manage beneficiaries across multiple departments.

This system ensures transparency, structured workflows, and real-time status updates from registration to assistance completion.

🚀 #Overview

The Beneficiary Management App streamlines welfare operations by providing:

Centralized beneficiary registration

Department-based token management

Real-time assistance tracking

Role-based dashboards

Complete history logging for future reference

The system improves operational efficiency and ensures accurate record-keeping for every beneficiary.

👥 User Roles
🔹 Admin

Full system access

Manage users and departments

View dashboard analytics

Generate reports

Configure system settings

🔹 Receptionist

Register beneficiaries

Generate unique tokens

Search records using CNIC or phone number

Verify existing beneficiaries

🔹 Department Staff

Scan or enter token

View beneficiary details

Update assistance status (Pending, In Progress, Completed)

Add remarks

🔄 System Workflow

Registration

Beneficiary provides CNIC and personal details

Receptionist registers data

System generates unique department-specific token

Department Processing

Token is scanned or entered

Staff views beneficiary details

Assistance is provided

Status and remarks updated

Completion

Assistance marked as completed

Full history logged against CNIC

🛠 Core Features

✅ CNIC-Based Unique Identification

✅ Role-Based Access Control (RBAC)

✅ Secure Authentication (JWT)

✅ Unique Token Generation

✅ Real-Time Status Tracking

✅ Dashboard Analytics with Charts

✅ Advanced Search (CNIC, Name, Phone)

✅ Complete Visit History Logs

📊 Dashboards
Admin Dashboard

Daily visitor analytics

Department-wise statistics

User management

Reports and logs

Receptionist Dashboard

Beneficiary registration form

Token generation

Search functionality

Today's visitor list

Department Dashboard

Token scanning interface

Beneficiary details view

Status update options

Remarks section

🗄 Database Structure
Beneficiary Fields:

CNIC (Unique)

Name

Phone

Address

Purpose

Token

Department

Status

Remarks

History (timestamps & logs)

🧑‍💻 Tech Stack

Frontend:

React.js

Tailwind CSS / Material UI

Backend:

Node.js

Express.js

Database:

MongoDB (Mongoose)

Authentication:

JSON Web Token (JWT)

Deployment:

Frontend: Vercel

Backend: Render / Heroku

🔐 Security

Role-Based Access Control

JWT Authentication

Protected Routes

Secure Data Validation

📦 Installation
# Clone the repository
git clone https://github.com/Muhammad-Arsalan-Khan/Benificiary.git

# Install backend dependencies
cd backend
npm install

# Install frontend dependencies
cd ../frontend
npm install


Run Backend:
npm start


Run Frontend:

npm start
