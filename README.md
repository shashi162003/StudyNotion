<<<<<<< HEAD
=======
# StudyNotion - E-Learning Platform

StudyNotion is a comprehensive ed-tech platform built with the MERN stack (MongoDB, Express.js, React.js, Node.js).

## 🌟 Live Demo

- Frontend: [https://study-notion-eight-smoky.vercel.app](https://study-notion-eight-smoky.vercel.app)
- Backend: [https://studynotion-ibbd.onrender.com](https://studynotion-ibbd.onrender.com)

## 🛠️ Technology Stack

### Frontend

- **Framework**: React.js
- **State Management**: Redux Toolkit
- **Styling**:
  - Tailwind CSS
  - CSS Modules
- **Icons**: React Icons
- **HTTP Client**: Axios
- **Rich Text Editor**: React Quill
- **Forms**: React Hook Form
- **Alerts**: React Hot Toast
- **Media**: Video.js for video player
- **Payment Integration**: Razorpay

### Backend

- **Runtime**: Node.js
- **Framework**: Express.js
- **Database**: MongoDB with Mongoose ODM
- **Authentication**: JWT (JSON Web Tokens)
- **Password Encryption**: Bcrypt
- **File Upload**: Cloudinary
- **Email Service**: Nodemailer
- **Payment Gateway**: Razorpay

## 🏗️ Architecture

### Frontend Architecture

```
study-notion/
├── public/
├── src/
│   ├── assets/
│   ├── components/
│   │   ├── common/
│   │   ├── core/
│   │   └── forms/
│   ├── hooks/
│   ├── pages/
│   ├── services/
│   │   ├── apis/
│   │   └── operations/
│   ├── slices/
│   ├── utils/
│   └── App.js
└── package.json
```

### Backend Architecture

```
backend/
├── config/
├── controllers/
├── middlewares/
├── models/
├── routes/
├── utils/
└── index.js
```

## 🔗 API Routes

### Authentication Routes

\`\`\`
POST /api/v1/auth/signup

- Register a new user
- Body: { firstName, lastName, email, password, confirmPassword, accountType, contactNumber, otp }

POST /api/v1/auth/login

- Login user
- Body: { email, password }

POST /api/v1/auth/sendotp

- Send OTP for email verification
- Body: { email }

POST /api/v1/auth/changepassword

- Change user password (Protected Route)
- Body: { oldPassword, newPassword }

POST /api/v1/auth/reset-password-token

- Request password reset token
- Body: { email }

POST /api/v1/auth/reset-password

- Reset password using token
- Body: { token, newPassword, confirmPassword }
  \`\`\`

### Profile Routes

\`\`\`
GET /api/v1/profile/getUserDetails

- Get logged-in user details (Protected)

PUT /api/v1/profile/updateProfile

- Update user profile (Protected)
- Body: { firstName?, lastName?, dateOfBirth?, about?, contactNumber? }

GET /api/v1/profile/getEnrolledCourses

- Get user's enrolled courses (Protected)

DELETE /api/v1/profile/deleteProfile

- Delete user profile (Protected)
  \`\`\`

### Course Routes

\`\`\`
POST /api/v1/course/createCourse

- Create new course (Protected, Instructor Only)
- Body: { courseName, courseDescription, whatYouWillLearn, price, tag, category, status, instructions }

GET /api/v1/course/getAllCourses

- Get all courses (Public)

POST /api/v1/course/getCourseDetails/:courseId

- Get specific course details
- Params: courseId

POST /api/v1/course/editCourse

- Edit course (Protected, Instructor Only)
- Body: { courseId, updates }

DELETE /api/v1/course/deleteCourse

- Delete course (Protected, Instructor Only)
- Body: { courseId }

POST /api/v1/course/addSection

- Add section to course (Protected, Instructor Only)
- Body: { sectionName, courseId }

POST /api/v1/course/addSubSection

- Add subsection to section (Protected, Instructor Only)
- Body: { sectionId, title, description, videoUrl }

GET /api/v1/course/getInstructorCourses

- Get instructor's courses (Protected, Instructor Only)
  \`\`\`

### Payment Routes

\`\`\`
POST /api/v1/payment/capturePayment

- Initialize payment (Protected)
- Body: { courses }

POST /api/v1/payment/verifyPayment

- Verify payment status (Protected)
- Body: { razorpay_payment_id, razorpay_order_id, razorpay_signature }

POST /api/v1/payment/sendPaymentSuccessEmail

- Send payment confirmation email (Protected)
- Body: { orderId, paymentId, amount }
  \`\`\`

### Contact Routes

\`\`\`
POST /api/v1/contact/

- Submit contact form
- Body: { firstName, lastName, email, message }
  \`\`\`

## 🚀 Features

### Student Features

- Course catalog
- Course purchase
- Course content consumption
- Profile management
- Course progress tracking
- Course ratings and reviews
- Course filtering and search

### Instructor Features

- Course creation and management
- Content upload (video, text, quizzes)
- Student progress tracking
- Revenue analytics
- Course analytics

### Admin Features

- User management
- Course approval
- Category management
- Payment management
- Content moderation

## 💾 Database Schema

### User Schema

- First Name
- Last Name
- Email
- Password (hashed)
- Account Type (Student/Instructor/Admin)
- Additional Details (Profile Schema Reference)
- Courses (Array of Course References)

### Course Schema

- Name
- Description
- Instructor (User Reference)
- Price
- Thumbnail
- Tags
- Category (Category Reference)
- Sections (Array of Section References)
- Reviews (Array of Review References)
- Students Enrolled (Array of User References)

### Section Schema

- Name
- Description
- Subsections (Array of Subsection References)

### Subsection Schema

- Title
- Description
- Video URL
- Duration
- Additional Resources

## 🔐 Security Features

- Password Hashing (Bcrypt)
- JWT Authentication
- Protected Routes
- Role-based Authorization
- Request Rate Limiting
- Input Validation
- XSS Protection
- CORS Configuration

## 🚀 Installation and Setup

1. Clone the repository

```bash
git clone https://github.com/your-username/studynotion.git
```

2. Install dependencies for backend

```bash
cd backend
npm install
```

3. Install dependencies for frontend

```bash
cd ../frontend
npm install
```

4. Set up environment variables

- Create .env file in backend directory
- Create .env file in frontend directory
- Add necessary environment variables as per .env.example

5. Run the application

```bash
# Run backend
cd backend
npm run dev

# Run frontend in new terminal
cd frontend
npm start
```

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch
3. Commit your changes
4. Push to the branch
5. Open a pull request

## 📝 License

This project is licensed under the MIT License.

>>>>>>> 154ebbf302441d45ef0699d9c9bf3a9f3c7763dc
