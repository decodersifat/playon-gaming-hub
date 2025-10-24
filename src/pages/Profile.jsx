import React, { useContext, useEffect } from 'react';
import AuthContext from '../context/AuthContext';
import { Link } from 'react-router';

function Profile() {
    const { user } = useContext(AuthContext);

    useEffect(()=>{
    
            document.title = user?.displayName + "Profile" || "User Profile";
        },[]);

    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-900 to-black">

            <div className="absolute inset-0 opacity-5">
                <div className="absolute inset-0" style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%2300ff88' fill-opacity='0.1'%3E%3Cpath d='M30 30c0-8.3-6.7-15-15-15s-15 6.7-15 15 6.7 15 15 15 15-6.7 15-15zm15 0c0-8.3-6.7-15-15-15s-15 6.7-15 15 6.7 15 15 15 15-6.7 15-15z'/%3E%3C/g%3E%3C/svg%3E")`,
                }}></div>
            </div>

            <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">

                <div className="mb-8">
                    <h1 className="text-4xl font-bold text-white mb-2">Profile</h1>
                    <p className="text-gray-400">Manage your gaming profile and preferences</p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    
                    <div className="lg:col-span-2 space-y-6">
                        <div className="bg-gray-800 border border-gray-700 rounded-lg p-6">
                            <h2 className="text-2xl font-bold text-white mb-6">Personal Information</h2>
                            
                            <div className="flex items-center space-x-6 mb-6">
                                <div className="w-20 h-20 bg-gradient-to-r from-green-400 to-blue-500 rounded-full flex items-center justify-center">
                                    <img src={
                                        user?.photoURL || 'https://img.freepik.com/free-vector/blue-circle-with-white-user_78370-4707.jpg?semt=ais_hybrid&w=740&q=80'
                                    } />
                                </div>
                                <div>
                                    <h3 className="text-2xl font-semibold text-white">
                                        {user?.displayName || 'Gamer'}
                                    </h3>
                                    <p className="text-gray-400">{user?.email}</p>
                                    <div className="flex items-center mt-2">
                                        <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse mr-2"></div>
                                        <span className="text-green-400 text-sm font-medium">Online</span>
                                    </div>
                                </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="space-y-4">
                                    <div>
                                        <label className="block text-sm font-medium text-gray-400 mb-2">Email Address</label>
                                        <div className="bg-gray-900 border border-gray-700 rounded-lg p-3">
                                            <p className="text-white">{user?.email}</p>
                                        </div>
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-gray-400 mb-2">Display Name</label>
                                        <div className="bg-gray-900 border border-gray-700 rounded-lg p-3">
                                            <p className="text-white">{user?.displayName || 'Not set'}</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="space-y-4">
                                    <div>
                                        <label className="block text-sm font-medium text-gray-400 mb-2">User ID</label>
                                        <div className="bg-gray-900 border border-gray-700 rounded-lg p-3">
                                            <p className="text-white font-mono text-sm">{user?.uid}</p>
                                        </div>
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-gray-400 mb-2">Account Status</label>
                                        <div className="bg-gray-900 border border-gray-700 rounded-lg p-3">
                                            <span className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${
                                                user?.emailVerified 
                                                    ? 'bg-green-500/20 text-green-400' 
                                                    : 'bg-red-500/20 text-red-400'
                                            }`}>
                                                {user?.emailVerified ? 'Verified' : 'Not Verified'}
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>


                        <div className="bg-gray-800 border border-gray-700 rounded-lg p-6">
                            <h2 className="text-2xl font-bold text-white mb-6">Account Details</h2>
                            
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="space-y-4">
                                    <div>
                                        <label className="block text-sm font-medium text-gray-400 mb-2">Account Created</label>
                                        <div className="bg-gray-900 border border-gray-700 rounded-lg p-3">
                                            <p className="text-white">{new Date(user?.metadata?.creationTime).toLocaleDateString()}</p>
                                        </div>
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-gray-400 mb-2">Last Sign In</label>
                                        <div className="bg-gray-900 border border-gray-700 rounded-lg p-3">
                                            <p className="text-white">{new Date(user?.metadata?.lastSignInTime).toLocaleString()}</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="space-y-4">
                                    <div>
                                        <label className="block text-sm font-medium text-gray-400 mb-2">Email Verification</label>
                                        <div className="bg-gray-900 border border-gray-700 rounded-lg p-3">
                                            <div className="flex items-center justify-between">
                                                <span className="text-white">
                                                    {user?.emailVerified ? 'Email is verified' : 'Email not verified'}
                                                </span>
                                                {!user?.emailVerified && (
                                                    <button className="text-green-400 hover:text-blue-400 text-sm font-medium">
                                                        Verify Now
                                                    </button>
                                                )}
                                            </div>
                                        </div>
                                    </div>
                                    
                                </div>
                            </div>
                        </div>
                    </div>


                    <div className="space-y-6">

                        

                        <div className="bg-gray-800 border border-gray-700 rounded-lg p-6">
                            <h3 className="text-xl font-bold text-white mb-4">Quick Actions</h3>
                            <div className=" flex flex-col gap-3 space-y-3">
                                <Link to={`/edit-profile`}>
                                
                                <button className="w-full bg-gradient-to-r from-green-400 to-blue-500 text-white font-semibold py-3 px-4 rounded-lg hover:shadow-lg hover:shadow-green-400/25 transition-all duration-300">
                                    Edit Profile
                                </button>

                                </Link>
                                
                            </div>
                        </div>

                        
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Profile;
