
import { createBrowserRouter } from "react-router";
import HomeLayout from "../layouts/HomeLayout";
import LoginPage from "../pages/LoginPage";
import RegisterPage from "../pages/RegisterPage";
import Home from "../pages/Home";
import Dashboard from "../pages/Dashboard";
import Profile from "../pages/Profile";
import GameDetails from "../pages/GameDetails";
import AllGames from "../pages/AllGames";
import ProtectedRoute from "../components/ProtectedRoute";
import ForgetPassword from "../pages/ForgetPassword";
import EditProfile from "../pages/EditProfile";
import ErrorPage from "../pages/ErrorPage";
import HeroLoader from "../components/HeroLoader";

const router = createBrowserRouter([
  {
    path: "/",
    Component: HomeLayout,
    children: [
      {
        path: "/",
        Component: Home,
      },
      {
        path: "/login",
        Component: LoginPage,
      },
      {
        path: "/register",
        Component: RegisterPage,
      },
      {
        path: "/dashboard",
        element: (
          <ProtectedRoute>
            <Dashboard />
          </ProtectedRoute>
        ),
      },
      {
        path: "/profile",
        element: (
          <ProtectedRoute>
            <Profile />
          </ProtectedRoute>
        ),
      },
      {
        path: "/game/:id",
        element: <ProtectedRoute>
          <GameDetails/>
        </ProtectedRoute>,
      },
      {
        path: "/games",
        Component: AllGames,
      },
      {
        path: "/forget-password",
        element: 
          <ForgetPassword/>
        
      },
      {
        path: "/edit-profile",
        element: 
          <EditProfile/>
        
      },
      {
        path: "*",
        element: 
          <ErrorPage/>
        
      },

      {
        path: "/loader",
        element: 
          <HeroLoader/>
        
      },
    ],
  },
]);

export default router;