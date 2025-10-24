import React, { useContext, useEffect } from 'react';
import AuthContext from '../context/AuthContext';
import { Link } from 'react-router';
function Dashboard() {
    const { user, signOutUser } = useContext(AuthContext);

    useEffect(()=>{
    
            document.title = "Dashboard - PlayOn";
        },[]);

    const handleSignOut = () => {
        signOutUser().then(() => {
            console.log('User signed out');
        }).catch((error) => {
            console.log('Sign out error:', error);
        });
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-900 to-black">

            <div className="absolute inset-0 opacity-5">
                <div className="absolute inset-0" style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%2300ff88' fill-opacity='0.1'%3E%3Cpath d='M30 30c0-8.3-6.7-15-15-15s-15 6.7-15 15 6.7 15 15 15 15-6.7 15-15zm15 0c0-8.3-6.7-15-15-15s-15 6.7-15 15 6.7 15 15 15 15-6.7 15-15z'/%3E%3C/g%3E%3C/svg%3E")`,
                }}></div>
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">

                <div className="mb-8">
                    <h1 className="text-4xl font-bold text-white mb-2">Dashboard</h1>
                    <p className="text-gray-400">Welcome back to your gaming hub!</p>
                </div>



                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

                    <div className="lg:col-span-2">
                        <div className="bg-gray-800 border border-gray-700 rounded-lg p-6">
                            <h2 className="text-2xl font-bold text-white mb-6">Welcome Back!</h2>
                            
                            <div className="space-y-6">
                                <div className="flex items-center space-x-4">
                                    <div className="w-16 h-16 bg-gradient-to-r from-green-400 to-blue-500 rounded-full flex items-center justify-center">
                                        <span className="text-2xl font-bold text-white">
                                            {user?.email?.charAt(0).toUpperCase()}
                                        </span>
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-semibold text-white">
                                            {user?.displayName || 'Gamer'}
                                        </h3>
                                        <p className="text-gray-400">{user?.email}</p>
                                    </div>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <div className="bg-gray-900 border border-gray-700 rounded-lg p-4">
                                        <h4 className="font-semibold text-white mb-2">Account Status</h4>
                                        <div className="space-y-2">
                                            <div className="flex justify-between">
                                                <span className="text-gray-400">Email Verified:</span>
                                                <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                                                    user?.emailVerified 
                                                        ? 'bg-green-500/20 text-green-400' 
                                                        : 'bg-red-500/20 text-red-400'
                                                }`}>
                                                    {user?.emailVerified ? 'Verified' : 'Not Verified'}
                                                </span>
                                            </div>
                                            <div className="flex justify-between">
                                                <span className="text-gray-400">Member Since:</span>
                                                <span className="text-white text-sm">
                                                    {new Date(user?.metadata?.creationTime).toLocaleDateString()}
                                                </span>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="bg-gray-900 border border-gray-700 rounded-lg p-4">
                                        <h4 className="font-semibold text-white mb-2">Activity</h4>
                                        <div className="space-y-2">
                                            <div className="flex justify-between">
                                                <span className="text-gray-400">Last Login:</span>
                                                <span className="text-white text-sm">
                                                    {new Date(user?.metadata?.lastSignInTime).toLocaleDateString()}
                                                </span>
                                            </div>
                                            <div className="flex justify-between">
                                                <span className="text-gray-400">User ID:</span>
                                                <span className="text-white text-xs font-mono">
                                                    {user?.uid?.substring(0, 8)}...
                                                </span>
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
                            <div className="flex flex-col gap-4 space-y-3">
                                <Link to={`/games`}>
                                <button className="w-full bg-gradient-to-r from-green-400 to-blue-500 text-white font-semibold py-3 px-4 rounded-lg hover:shadow-lg hover:shadow-green-400/25 transition-all duration-300">
                                    Browse Games
                                </button>
                                 </Link>
                                 <Link to={`/profile`}>
                                <button className="w-full bg-gray-900 border border-gray-700 text-white font-semibold py-3 px-4 rounded-lg hover:border-green-400 transition-colors duration-300">
                                    View Profile
                                </button>

                                </Link>
                               
                            </div>
                        </div>

                        <div className="bg-gray-800 border border-gray-700 rounded-lg p-6">
                            <button 
                                onClick={handleSignOut}
                                className="w-full bg-red-500/20 border border-red-500/30 text-red-400 font-semibold py-3 px-4 rounded-lg hover:bg-red-500/30 hover:border-red-500/50 transition-all duration-300"
                            >
                                Sign Out
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Dashboard;
