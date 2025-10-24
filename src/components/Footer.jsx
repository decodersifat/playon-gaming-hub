import React from 'react';
import { Link } from 'react-router';

function Footer() {
    return (
        <footer className="relative bg-gradient-to-br from-gray-800 to-gray-900 border-t border-gray-700">

            <div className="absolute inset-0 opacity-5">
                <div className="absolute inset-0" style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%2300ff88' fill-opacity='0.1'%3E%3Cpath d='M30 30c0-8.3-6.7-15-15-15s-15 6.7-15 15 6.7 15 15 15 15-6.7 15-15zm15 0c0-8.3-6.7-15-15-15s-15 6.7-15 15 6.7 15 15 15 15-6.7 15-15z'/%3E%3C/g%3E%3C/svg%3E")`,
                }}></div>
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 py-16">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12">

                    <div className="col-span-full md:col-span-1">
                        <Link to="/" className="flex items-center mb-6">
                            <h1 className="    text-4xl bg-gradient-to-br from-green-400 to-blue-500 bg-clip-text text-transparent">PlayOn</h1>
                        </Link>
                        <p className="text-gray-400 text-sm mb-6    ">
                            Your ultimate destination for the latest and greatest games. Discover, play, and connect with a vibrant gaming community.
                        </p>
                        
                    </div>

                    <div>
                        <h3 className="text-white     text-xl mb-6">Quick Links</h3>
                        <ul className="space-y-3    ">
                            <li><Link to="/" className="text-gray-400 hover:text-green-400 transition-colors duration-300">All Games</Link></li>
                            <li><Link to="/" className="text-gray-400 hover:text-green-400 transition-colors duration-300">Categories</Link></li>
                            <li><Link to="/" className="text-gray-400 hover:text-green-400 transition-colors duration-300">Platforms</Link></li>
                            <li><Link to="/" className="text-gray-400 hover:text-green-400 transition-colors duration-300">Blog</Link></li>
                            <li><Link to="/" className="text-gray-400 hover:text-green-400 transition-colors duration-300">About Us</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-white     text-xl mb-6">Support</h3>
                        <ul className="space-y-3    ">
                            <li><Link to="/" className="text-gray-400 hover:text-green-400 transition-colors duration-300">FAQ</Link></li>
                            <li><Link to="/" className="text-gray-400 hover:text-green-400 transition-colors duration-300">Contact Us</Link></li>
                            <li><Link to="/" className="text-gray-400 hover:text-green-400 transition-colors duration-300">Privacy Policy</Link></li>
                            <li><Link to="/" className="text-gray-400 hover:text-green-400 transition-colors duration-300">Terms of Service</Link></li>
                        </ul>
                    </div>

                    <div className='flex flex-col gap-3.5'>
                        
                        
                        <h3 className="text-white     text-xl mb-6">Contact</h3>
                        <p className="text-gray-400  ">
                            Email: <a href="mailto:support@playon.com" className="hover:text-green-400 transition-colors duration-300">support@playon.com</a>
                        </p>

                        <div className="flex space-x-4 gap-y-4">
                            <a href="#" className="w-10 h-10 bg-gray-800 border border-gray-700 rounded-lg flex items-center justify-center hover:border-green-400 hover:bg-green-400/10 transition-all duration-300 group">
                                <svg className="w-5 h-5 text-gray-400 group-hover:text-green-400" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                                </svg>
                            </a>
                            <a href="#" className="w-10 h-10 bg-gray-800 border border-gray-700 rounded-lg flex items-center justify-center hover:border-green-400 hover:bg-green-400/10 transition-all duration-300 group">
                                <svg className="w-5 h-5 text-gray-400 group-hover:text-green-400" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z"/>
                                </svg>
                            </a>
                            <a href="#" className="w-10 h-10 bg-gray-800 border border-gray-700 rounded-lg flex items-center justify-center hover:border-green-400 hover:bg-green-400/10 transition-all duration-300 group">
                                <svg className="w-5 h-5 text-gray-400 group-hover:text-green-400" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.174-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.099.12.112.225.085.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.402.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.357-.629-2.746-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24.009 12.017 24.009c6.624 0 11.99-5.367 11.99-11.988C24.007 5.367 18.641.001 12.017.001z"/>
                                </svg>
                            </a>
                            <a href="#" className="w-10 h-10 bg-gray-800 border border-gray-700 rounded-lg flex items-center justify-center hover:border-green-400 hover:bg-green-400/10 transition-all duration-300 group">
                                <svg className="w-5 h-5 text-gray-400 group-hover:text-green-400" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M12 0C5.374 0 0 5.373 0 12s5.374 12 12 12 12-5.373 12-12S18.626 0 12 0zm5.568 8.16c-.169 1.858-.896 3.46-2.07 4.765-1.18 1.31-2.762 2.075-4.498 2.075-1.736 0-3.318-.765-4.498-2.075-1.174-1.305-1.901-2.907-2.07-4.765C4.432 6.302 7.734 4 12 4s7.568 2.302 5.568 4.16z"/>
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>

                <div className="mt-16 pt-8 border-t border-gray-700 text-center text-gray-400 text-sm    ">
                    &copy; {new Date().getFullYear()} PlayOn. All rights reserved.
                </div>
            </div>


            <div aria-hidden="true" className="absolute bottom-0 right-1/2 -z-10 translate-x-1/2 blur-3xl xl:-bottom-6">
                <div style={{ clipPath: 'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)' }} className="aspect-1155/678 w-288.75 bg-gradient-to-tr from-green-400 to-blue-500 opacity-20 rotate-180"></div>
            </div>
        </footer>
    );
}

export default Footer;