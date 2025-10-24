import React, { useContext, useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router';
import AuthContext from '../context/AuthContext';

function Navbar() {
    const location = useLocation();
    const { user, signOutUser } = useContext(AuthContext);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [ color, setColor ] = useState(false)

    const changeColor = () =>{
        if(window.scrollY > 64){
            setColor(true)
        } else {
            setColor(false)
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', changeColor)
        return () => {
            window.removeEventListener('scroll', changeColor)
        }
    }, [])
    
    return (
        <nav className={`gaming-navbar fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${color ? 'scrolled' : ''}`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between font-venite h-16">
                    <div className="flex-shrink-0">
                        <Link to="/" className="flex items-center">
                            <div className="gaming-title text-2xl font-bold">
                                PlayOn
                            </div>
                        </Link>
                    </div>


                    <div className="hidden md:block">
                        <div className="ml-10 flex items-baseline space-x-8">
                            <Link 
                                to="/" 
                                className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors"
                            >
                                Home
                            </Link>
                            {user ? (
                                <>
                                    <Link 
                                        to="/dashboard" 
                                        className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors"
                                    >
                                        Dashboard
                                    </Link>
                                    <Link 
                                        to="/profile" 
                                        className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors"
                                    >
                                        Profile
                                    </Link>
                                    <button 
                                        onClick={() => signOutUser()}
                                        className="gaming-btn px-4 py-2 rounded-md text-sm font-medium"
                                    >
                                        Sign Out
                                    </button>
                                </>
                            ) : (
                                <>
                                    <Link 
                                        to="/login" 
                                        state={{ from: location.pathname }}
                                        className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors"
                                    >
                                        Login
                                    </Link>
                                    <Link 
                                        to="/register" 
                                        state={{ from: location.pathname }}
                                        className="gaming-btn px-4 py-2 rounded-md text-sm font-medium"
                                    >
                                        Register
                                    </Link>
                                </>
                            )}
                        </div>
                    </div>

                    <div className="md:hidden">
                        <button 
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                            className="text-gray-300 hover:text-white p-2 transition-colors"
                        >
                            {isMobileMenuOpen ? (
                                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            ) : (
                                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                                </svg>
                            )}
                        </button>
                    </div>
                </div>


                { isMobileMenuOpen && (
                    <div className="md:hidden">
                        <div className="px-2 pt-2 pb-3 space-y-1 bg-black/95 backdrop-blur-sm border-t border-gray-700">
                            <Link 
                                to="/" 
                                className="block text-gray-300 hover:text-white px-3 py-2 rounded-md text-base font-medium transition-colors"
                                onClick={() => setIsMobileMenuOpen(false)}
                            >
                                Home
                            </Link>
                            {user ? (
                                <>
                                    <Link 
                                        to="/dashboard" 
                                        className="block text-gray-300 hover:text-white px-3 py-2 rounded-md text-base font-medium transition-colors"
                                        onClick={() => setIsMobileMenuOpen(false)}
                                    >
                                        Dashboard
                                    </Link>
                                    <Link 
                                        to="/profile" 
                                        className="block text-gray-300 hover:text-white px-3 py-2 rounded-md text-base font-medium transition-colors"
                                        onClick={() => setIsMobileMenuOpen(false)}
                                    >
                                        Profile
                                    </Link>
                                    <button 
                                        onClick={() => {
                                            signOutUser();
                                            setIsMobileMenuOpen(false);
                                        }}
                                        className="block w-full text-left gaming-btn px-3 py-2 rounded-md text-base font-medium"
                                    >
                                        Sign Out
                                    </button>
                                </>
                            ) : (
                                <>
                                    <Link 
                                        to="/login" 
                                        state={{ from: location.pathname }}
                                        className="block text-gray-300 hover:text-white px-3 py-2 rounded-md text-base font-medium transition-colors"
                                        onClick={() => setIsMobileMenuOpen(false)}
                                    >
                                        Login
                                    </Link>
                                    <Link 
                                        to="/register" 
                                        state={{ from: location.pathname }}
                                        className="block gaming-btn px-3 py-2 rounded-md text-base font-medium"
                                        onClick={() => setIsMobileMenuOpen(false)}
                                    >
                                        Register
                                    </Link>
                                </>
                            )}
                        </div>
                    </div>
                )}
            </div>
        </nav>
    )
}

export default Navbar
