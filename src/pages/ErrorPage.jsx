import React, {useEffect} from 'react';
import { Link } from 'react-router';


import errorPNG from "../assets/App-Error.png"


const ErrorPage = () => {

  useEffect(()=>{
  
          document.title = "404 Not Found - PlayOn";
      },[]);
  return (
    <div className="min-h-screen ">


      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="flex flex-col justify-center items-center text-center">
          <div className="mb-8">
            <img src={errorPNG} alt="404 Error" />
          </div>

          <h1 className="text-4xl font-bold text-white mb-4">Oops! Page Not Found</h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            The page you're looking for doesn't exist. It might have been moved, deleted, or you entered the wrong URL.
          </p>

          <div className="space-y-4 sm:space-y-0 sm:space-x-4 sm:flex sm:justify-center">
            <Link
              to="/"
              className="bg-blue-600 text-white px-8 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors duration-200 inline-block"
            >
              Go to Home
            </Link>
            <Link
              to="/games"
              className="bg-gray-200 text-gray-800 px-8 py-3 rounded-lg font-medium hover:bg-gray-300 transition-colors duration-200 inline-block"
            >
              Browse Games
            </Link>
          </div>
        </div>
      </div>


    </div>
  );
};

export default ErrorPage;