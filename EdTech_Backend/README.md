# StudyNotion EdTech Backend

A comprehensive backend solution for the StudyNotion EdTech platform, built with Node.js, Express, and MongoDB. This server handles user authentication, course management, payments, and more.

## 🚀 Features

- **User Authentication**
  - User registration and login
  - Password reset via email
  - JWT-based authentication
  - Role-based access control (Student, Instructor, Admin)

- **Course Management**
  - Create, read, update, and delete courses
  - Course categories and sub-categories
  - Course content management
  - Course progress tracking

- **Payment Integration**
  - Razorpay payment gateway integration
  - Secure payment processing
  - Payment history and receipts

- **User Profile**
  - Personal information management
  - Course enrollment tracking
  - Progress monitoring

- **Contact & Support**
  - Contact form submission
  - Email notifications

## 🛠️ Tech Stack

- **Backend Framework**: Node.js with Express
- **Database**: MongoDB with Mongoose ODM
- **Authentication**: JWT (JSON Web Tokens)
- **File Storage**: Cloudinary
- **Payment Gateway**: Razorpay
- **Email Service**: Nodemailer
- **Environment Management**: dotenv
- **API Documentation**: (Add if applicable)

## 📦 Prerequisites

- Node.js (v14 or higher)
- npm or yarn
- MongoDB Atlas account or local MongoDB instance
- Cloudinary account for media storage
- Razorpay account for payment processing

## 🚀 Getting Started

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd server
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   Create a `.env` file in the root directory with the following variables:
   ```env
   MONGODB_URI=your_mongodb_connection_string
   JWT_SECRET=your_jwt_secret_key
   JWT_EXPIRY=24h
   CLOUDINARY_CLOUD_NAME=your_cloudinary_cloud_name
   CLOUDINARY_API_KEY=your_cloudinary_api_key
   CLOUDINARY_API_SECRET=your_cloudinary_api_secret
   RAZORPAY_KEY_ID=your_razorpay_key_id
   RAZORPAY_SECRET=your_razorpay_secret
   SMTP_HOST=your_smtp_host
   SMTP_PORT=your_smtp_port
   SMTP_USERNAME=your_smtp_username
   SMTP_PASSWORD=your_smtp_password
   FRONTEND_URL=your_frontend_url
   ```

4. **Start the development server**
   ```bash
   npm run dev
   ```
   The server will start on `http://localhost:4000` by default.

## 📚 API Endpoints

### Authentication
- `POST /api/v1/auth/signup` - Register a new user
- `POST /api/v1/auth/login` - User login
- `POST /api/v1/auth/sendotp` - Send OTP for email verification
- `POST /api/v1/auth/forgot-password` - Request password reset
- `POST /api/v1/reset-password` - Reset password

### Profile
- `GET /api/v1/profile` - Get user profile
- `PUT /api/v1/profile` - Update profile
- `DELETE /api/v1/profile` - Delete account

### Courses
- `GET /api/v1/course` - Get all courses
- `GET /api/v1/course/:id` - Get course by ID
- `POST /api/v1/course` - Create new course (Instructor/Admin only)
- `PUT /api/v1/course/:id` - Update course (Instructor/Admin only)
- `DELETE /api/v1/course/:id` - Delete course (Instructor/Admin only)

### Payments
- `POST /api/v1/payment/capture` - Capture payment
- `POST /api/v1/payment/verify` - Verify payment
- `GET /api/v1/payment/check-subscription` - Check subscription status

### Contact
- `POST /api/v1/reach/contact` - Submit contact form

## 🔒 Environment Variables

Make sure to set up the following environment variables in your `.env` file:

| Variable | Description |
|----------|-------------|
| MONGODB_URI | MongoDB connection string |
| JWT_SECRET | Secret key for JWT |
| JWT_EXPIRY | JWT expiration time |
| CLOUDINARY_CLOUD_NAME | Cloudinary cloud name |
| CLOUDINARY_API_KEY | Cloudinary API key |
| CLOUDINARY_API_SECRET | Cloudinary API secret |
| RAZORPAY_KEY_ID | Razorpay key ID |
| RAZORPAY_SECRET | Razorpay secret key |
| SMTP_* | SMTP configuration for emails |
| FRONTEND_URL | Frontend application URL |

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the ISC License - see the [LICENSE](LICENSE) file for details.

## 👨‍💻 Author

- **Shashi Kumar Gupta**

## 🙏 Acknowledgments

- Hat tip to anyone whose code was used
- Inspiration
- References

---

Made with ❤️ for the developer community
