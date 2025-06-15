# StudyNotion Frontend

This is the frontend application for StudyNotion, a comprehensive ed-tech platform built with React.js and Tailwind CSS.

## 🚀 Deployment URL

- Frontend URL: `https://studynotion-edtech.vercel.app`

## 🛠️ Environment Variables

Create a `.env` file in the root directory with the following variables:

```env
REACT_APP_BASE_URL=https://studynotion-backend.onrender.com/api/v1
REACT_APP_RAZORPAY_KEY=your_razorpay_key_id
```

## 🚀 Deployment Instructions (Vercel)

1. Create a new project on Vercel
2. Connect your GitHub repository
3. Configure the following:
   - Framework Preset: Create React App
   - Build Command: `npm run build`
   - Output Directory: `build`
   - Add environment variables
4. Click "Deploy"

## 📦 Local Development

1. Clone the repository:

```bash
git clone https://github.com/your-username/studynotion-frontend.git
```

2. Install dependencies:

```bash
cd studynotion-frontend
npm install
```

3. Create `.env` file and add environment variables

4. Run the development server:

```bash
npm start
```

## 🌟 Features

- Responsive Design with Tailwind CSS
- User Authentication & Authorization
- Course Catalog & Details
- Payment Integration with Razorpay
- User Dashboard
- Course Progress Tracking
- Rich Text Editor for Course Content
- Video Player for Course Lectures

## 📚 Project Structure

```
src/
├── components/         # Reusable UI components
├── pages/             # Page components
├── assets/            # Static assets
├── services/          # API services
├── utils/             # Utility functions
├── hooks/             # Custom React hooks
├── contexts/          # React contexts
└── styles/            # Global styles
```

## 🔗 API Integration

The frontend integrates with the backend API using axios. The base URL for API calls is configured in `src/services/apiconnector.js`.

### API Categories:

- Auth APIs (Login, Signup, Reset Password)
- Course APIs (List, Details, Create, Update)
- Payment APIs (Razorpay Integration)
- Profile APIs (User Details, Course Progress)

## 🎨 UI Components

Built using a combination of custom components and libraries:

- Tailwind CSS for styling
- React Icons for icons
- React Hot Toast for notifications
- React Rating Stars for course ratings
- Video.js for video playback

## 📱 Responsive Design

The application is fully responsive and optimized for:

- Desktop (1024px and above)
- Tablet (768px to 1023px)
- Mobile (below 768px)

## 🔐 Security Features

- JWT Token Authentication
- Protected Routes
- Form Validation
- Secure Payment Integration

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request
