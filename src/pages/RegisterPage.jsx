import React, { useState, useContext, useEffect } from "react";
import AuthContext from "../context/AuthContext";
import { useLocation, useNavigate } from "react-router";
import { updateProfile } from "firebase/auth";
import { Link } from "react-router";
function RegisterPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [name, setName] = useState("");
  const [photoURL, setPhotoURL] = useState("");
  const { createUser, signInWithGoogle, loading, setLoading } =
    useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {

    document.title = "Register On PlayOn";
  }, []);

  const from = location.state?.from || "/";

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    }


    if (password.length < 6) {
      alert("Password must be at least 6 characters long!");
      return;
    }

    const hasUpperCase = /[A-Z]/.test(password);
    const hasLowerCase = /[a-z]/.test(password);
    const hasMinLength = password.length >= 6;

    if (!hasUpperCase || !hasLowerCase || !hasMinLength) {
      alert("Password must contain at least one uppercase letter, one lowercase letter, and be at least 6 characters long!");
      return;
    }

    createUser(email, password)
      .then((result) => {
        const user = result.user;
        updateProfile(user, {
          displayName: name,
          photoURL: photoURL || "https://i.ibb.co/2FsfXqM/default-user.png",
        });
        alert("Registration successful!");
        navigate(from, { replace: true });
      })
      .catch((error) => {
        console.log(error);
        alert("Registration failed: " + error.message);
      })
      .finally(() => setLoading(false));
  };

  const handleGoogleLogin = () => {
    signInWithGoogle()
      .then((result) => {
        alert("Google registration successful!");
        navigate(from, { replace: true });
      })
      .catch((error) => {
        alert("Google registration failed: " + error.message);
      })
      .finally(() => setLoading(false));
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900 px-4">
      <div className="w-full mt-11 mb-11 max-w-md bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8 space-y-6 border border-gray-200 dark:border-gray-700">
        <h1 className="text-2xl font-bold text-center text-gray-900 dark:text-white">
          Create your account
        </h1>

        <form onSubmit={handleFormSubmit} className="space-y-5">
          {/* Name */}
          <div>
            <label
              htmlFor="fullname"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              Full Name
            </label>
            <input
              id="fullname"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Example Name"
              required
              className="w-full p-2.5 rounded-lg border border-gray-300 bg-gray-50 text-gray-900 dark:bg-gray-700 dark:border-gray-600 dark:text-white focus:ring-2 focus:ring-blue-500 focus:outline-none"
            />
          </div>

          <div>
            <label
              htmlFor="photoURL"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              Photo URL
            </label>
            <input
              id="photoURL"
              type="text"
              value={photoURL}
              onChange={(e) => setPhotoURL(e.target.value)}
              placeholder="https://example.com/photo.jpg"
              required
              className="w-full p-2.5 rounded-lg border border-gray-300 bg-gray-50 text-gray-900 dark:bg-gray-700 dark:border-gray-600 dark:text-white focus:ring-2 focus:ring-blue-500 focus:outline-none"
            />
          </div>

          <div>
            <label
              htmlFor="email"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              Email
            </label>
            <input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="name@company.com"
              required
              className="w-full p-2.5 rounded-lg border border-gray-300 bg-gray-50 text-gray-900 dark:bg-gray-700 dark:border-gray-600 dark:text-white focus:ring-2 focus:ring-blue-500 focus:outline-none"
            />
          </div>

          <div>
            <label
              htmlFor="password"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              Password
            </label>
            <input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••"
              required
              className="w-full p-2.5 rounded-lg border border-gray-300 bg-gray-50 text-gray-900 dark:bg-gray-700 dark:border-gray-600 dark:text-white focus:ring-2 focus:ring-blue-500 focus:outline-none"
            />
          </div>

          <div>
            <label
              htmlFor="confirmPassword"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              Confirm Password
            </label>
            <input
              id="confirmPassword"
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              placeholder="••••••••"
              required
              className="w-full p-2.5 rounded-lg border border-gray-300 bg-gray-50 text-gray-900 dark:bg-gray-700 dark:border-gray-600 dark:text-white focus:ring-2 focus:ring-blue-500 focus:outline-none"
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full py-2.5 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-800 disabled:opacity-50 disabled:cursor-not-allowed transition duration-200"
          >
            {loading ? "Creating Account..." : "Create Account"}
          </button>

          <div className="flex items-center justify-center gap-2">
            <div className="flex-grow border-t border-gray-300 dark:border-gray-600"></div>
            <span className="text-sm text-gray-500 dark:text-gray-400">or</span>
            <div className="flex-grow border-t border-gray-300 dark:border-gray-600"></div>
          </div>

          <button
            type="button"
            onClick={handleGoogleLogin}
            disabled={loading}
            className="w-full flex items-center justify-center gap-2 py-2.5 bg-red-600 hover:bg-red-700 text-white font-medium rounded-lg focus:ring-4 focus:ring-red-300 dark:focus:ring-red-800 transition duration-200"
          >
            <svg className="w-4 h-4" viewBox="0 0 24 24">
              <path
                fill="currentColor"
                d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
              />
              <path
                fill="currentColor"
                d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
              />
              <path
                fill="currentColor"
                d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
              />
              <path
                fill="currentColor"
                d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
              />
            </svg>
            {loading ? "Creating Account..." : "Sign up with Google"}
          </button>

          <p className="text-sm text-center text-gray-600 dark:text-gray-400">
            Already have an account?{" "}
            <Link
              to={"/login"}
              className="text-blue-600 hover:underline dark:text-blue-400"
            >
              Sign in
            </Link>
          </p>
        </form>
      </div>
    </section>
  );
}

export default RegisterPage;
