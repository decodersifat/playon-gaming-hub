

```markdown
# 🎮 PlayOn - Ultimate Gaming Discovery Platform

## 🚀 Live Demo
[Deploy your app and add the URL here]
*Example: https://decoder-sifat-playon.netlify.app/*

## 📋 Project Overview

**PlayOn** is a modern, engaging online gaming library designed for discovering and exploring games from indie developers and major studios. Users can browse an extensive collection of games, view detailed information, and access download links for their favorite titles.

Built with React 19 and modern web technologies, PlayOn features a vibrant, urban-themed UI optimized for user engagement and seamless navigation across all devices.

## ✨ Key Features

### 🎯 **Game Discovery & Library**
- **30+ Premium Games** across multiple categories (FPS, RPG, MOBA, Sports, Action, Simulation, etc.)
- **Advanced Search & Filtering** by title, developer, category, or ratings
- **Interactive Game Cards** with cover images, ratings, and detailed descriptions
- **Individual Game Pages** with comprehensive information and download links

### 🔐 **Secure Authentication System**
- **Email & Password Registration** with validation
- **Google OAuth Integration** for seamless login
- **Password Requirements**: Uppercase, lowercase, minimum 6 characters
- **Protected Routes** - Game details require authentication
- **Profile Management** with photo upload and user details
- **Password Reset** functionality with email integration

### 🎨 **Modern User Interface**
- **Responsive Design** - Perfect on mobile, tablet, and desktop
- **Urban Gaming Theme** with gradient backgrounds and animations
- **Dynamic Page Titles** that change based on current page
- **Smooth Animations** powered by GSAP library
- **Interactive Banner Slider** with 3D coverflow effects
- **Loading States** and error handling throughout

### 📱 **User Experience Features**
- **Dynamic Navigation** with user profile integration
- **Newsletter Subscription** section
- **404 Error Page** with helpful navigation
- **Dashboard Overview** for authenticated users
- **Profile Editing** with real-time updates
- **Auto-fill Email** in password reset forms

## 🛠️ Tech Stack

### **Frontend**
- **React 19.1.1** - Modern React with latest features
- **React Router 7.9.4** - Client-side routing and navigation
- **TailwindCSS 4.1.15** - Utility-first CSS framework
- **DaisyUI 5.3.7** - Component library for enhanced UI

### **Authentication & Backend**
- **Firebase 12.4.0** - Authentication and user management
- **Environment Variables** - Secure API key configuration

### **Animations & Effects**
- **GSAP 3.13.0** - Professional animations and transitions
- **@gsap/react 2.1.2** - React integration for GSAP

### **Additional Libraries**
- **Swiper 12.0.3** - Touch-enabled carousel/slider
- **Axios 1.12.2** - HTTP client for API requests
- **Dotenv 17.2.3** - Environment variable management

## 🚀 Installation & Setup

### **Prerequisites**
- Node.js (v16 or higher)
- npm or yarn package manager
- Firebase project with Authentication enabled

### **Installation Steps**

1. **Clone the repository**
```bash
git clone [your-repository-url]
cd playon
```

2. **Install dependencies**
```bash
npm install
```

3. **Environment Configuration**
Create a `.env` file in the root directory:
```env
VITE_FIREBASE_API_KEY=your_api_key
VITE_FIREBASE_AUTH_DOMAIN=your_auth_domain
VITE_FIREBASE_PROJECT_ID=your_project_id
VITE_FIREBASE_STORAGE_BUCKET=your_storage_bucket
VITE_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
VITE_FIREBASE_APP_ID=your_app_id
VITE_FIREBASE_MEASUREMENT_ID=your_measurement_id
```

4. **Start development server**
```bash
npm run dev
```

5. **Build for production**
```bash
npm run build
```

6. **Preview production build**
```bash
npm run preview
```

## 🌟 Game Categories Available

- **🎯 FPS** (5 games) - PUBG, Counter-Strike 2, COD Warzone, Apex Legends, Valorant
- **⚔️ RPG** (4 games) - The Witcher 3, Elden Ring, Cyberpunk 2077, Baldur's Gate 3
- **🗺️ MMORPG** (1 game) - Final Fantasy XIV
- **🏆 MOBA** (2 games) - League of Legends, Dota 2
- **🏗️ Sandbox** (2 games) - Minecraft, Terraria
- **💥 Action/Adventure** (6 games) - GTA V, RDR2, Assassin's Creed, Sekiro, God of War
- **🏃 Sports** (3 games) - FIFA 24, NBA 2K24, Rocket League
- **🎉 Party** (2 games) - Among Us, Fall Guys
- **🏠 Simulation** (3 games) - Stardew Valley, The Sims 4, Cities Skylines
- **🎲 Roguelike** (2 games) - Hades, Dead Cells
- **🧩 Puzzle** (1 game) - Portal 2

## 📁 Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── Banner.jsx      # Featured games slider
│   ├── GameCard.jsx    # Individual game display cards
│   ├── Navbar.jsx      # Navigation header
│   ├── HeroSection.jsx # Main landing section
│   ├── PopularGames.jsx# Top-rated games display
│   ├── Newsletter.jsx  # Newsletter subscription
│   └── ...
├── pages/              # Route components
│   ├── Home.jsx        # Homepage with all sections
│   ├── LoginPage.jsx   # Authentication login
│   ├── RegisterPage.jsx# User registration
│   ├── GameDetails.jsx # Protected game information
│   ├── Dashboard.jsx   # User dashboard
│   ├── Profile.jsx     # User profile management
│   └── ...
├── context/            # React Context for state management
├── hooks/              # Custom React hooks
├── routes/             # Routing configuration
└── services/           # External service integrations
```

## 🔧 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Create production build
- `npm run preview` - Preview production build locally
- `npm run lint` - Run ESLint for code quality

## 🌐 Deployment


### **Netlify**
1. Connect your GitHub repository
2. Set build command: `npm run build`
3. Set publish directory: `dist`
4. Add environment variables in Netlify dashboard




## 📱 Responsive Design

- **Mobile First** approach with TailwindCSS
- **Breakpoint Support**: 320px, 768px, 1024px, 1280px+
- **Touch-friendly** navigation and interactions
- **Optimized** images and loading performance

## 🔐 Security Features

- **Environment Variables** for sensitive API keys
- **Firebase Authentication** with secure token management
- **Protected Routes** with authentication guards
- **Input Validation** for all forms
- **Password Requirements** enforced on registration

## 🎯 Assignment Requirements Fulfilled

✅ **GitHub Commits**: Meaningful commit history with descriptive messages  
✅ **README.md**: Comprehensive documentation with all project details  
✅ **Responsiveness**: Fully responsive on mobile, tablet, and desktop  
✅ **Environment Variables**: Secure Firebase configuration  
✅ **Unique Design**: Vibrant urban-themed UI with gaming aesthetics  
✅ **SPA Routing**: No errors on page reload with proper fallback configuration  
✅ **Authentication**: Complete login/register with password validation  
✅ **Protected Routes**: Game details require authentication  
✅ **Dynamic Titles**: Page titles change based on current route  
✅ **Password Reset**: Functional forget password with email integration  
✅ **Profile Management**: Update information feature with photo and name  
✅ **Animation Library**: GSAP implementation for smooth transitions  
✅ **Newsletter Section**: Subscription form with benefits display  
✅ **Search & Filter**: Advanced game discovery functionality  
✅ **Error Handling**: 404 page and loading states  

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature-name`
3. Commit your changes: `git commit -m 'Add some feature'`
4. Push to the branch: `git push origin feature-name`
5. Open a pull request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🙏 Acknowledgments

- **React Team** for the amazing framework
- **Firebase** for authentication services
- **TailwindCSS** for the utility-first CSS framework
- **GSAP** for smooth animations
- **Game Developers** for creating amazing content

---

**Built with ❤️ for the gaming community**

