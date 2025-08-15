# Beneficiary-Backend

![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![Express.js](https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white)
![MongoDB](https://img.shields.io/badge/MongoDB-47A248?style=for-the-badge&logo=mongodb&logoColor=white)
![Cloudinary](https://img.shields.io/badge/Cloudinary-3399FF?style=for-the-badge&logo=cloudinary&logoColor=white)
![JWT](https://img.shields.io/badge/JWT-000000?style=for-the-badge&logo=json-web-tokens&logoColor=white)
![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)
![Last Commit](https://img.shields.io/github/last-commit/Muhammad-Arsalan-Khan/Beneficiary-Backend)

---

## Features
- 🔒 **Secure Authentication**: Implements robust user authentication with `bcryptjs` for password hashing and `jsonwebtoken` for token management.
- ☁️ **Cloud Storage Integration**: Seamlessly handles file uploads and storage using `Cloudinary`.
- 📊 **Data Validation**: Ensures data integrity and validation through `Zod` schemas.
- 📧 **Email Functionality**: Supports sending emails via `Nodemailer`.
- 📷 **QR Code Generation**: Capable of generating QR codes using the `qrcode` library.
- 📦 **API Development**: Built on `Express.js` for a powerful and scalable RESTful API, with `Mongoose` for MongoDB object modeling.

---

## Installation
To set up the project locally, follow these steps:

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/Muhammad-Arsalan-Khan/Beneficiary-Backend.git
    cd Beneficiary-Backend
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    ```

3.  **Configure Environment Variables:**
    Create a `.env` file in the root directory of the project and add the necessary environment variables (e.g., database connection string, JWT secret, Cloudinary credentials, email service configurations).

    Example `.env` structure:
    ```
    MONGO_URI=your_mongodb_connection_string
    JWT_SECRET=your_jwt_secret_key
    CLOUDINARY_CLOUD_NAME=your_cloudinary_cloud_name
    CLOUDINARY_API_KEY=your_cloudinary_api_key
    CLOUDINARY_API_SECRET=your_cloudinary_api_secret
    NODE_MAILER_HOST=smtp.example.com
    NODE_MAILER_PORT=587
    NODE_MAILER_USER=your_email@example.com
    NODE_MAILER_PASS=your_email_password
    ```

---

## Usage
Once the installation is complete and environment variables are configured, you can start the backend server:

```bash
npm start
```

The server will typically run on `http://localhost:5000` (or the port specified in your environment configuration). You can then interact with the API endpoints using tools like Postman, Insomnia, or a frontend application.

---

## Contributing
Contributions are welcome! If you find a bug or have a feature request, please open an issue. For direct contributions, please fork the repository and submit a pull request with your changes.

---

## License
This project is licensed under the ISC License.
