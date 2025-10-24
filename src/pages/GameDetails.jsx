import React, { useState, useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router';
import useGame from '../hooks/useGame';
import Loader from '../components/Loader';

function GameDetails() {
    const { id } = useParams();
    const navigate = useNavigate();
    const { games, loading, error } = useGame();
    const [game, setGame] = useState(null);

    useEffect(() => {





        if (games && id) {
            const foundGame = games.find(g => g.id === id);
            if (foundGame) {
                setGame(foundGame);
                document.title = foundGame.title + " Details";
                
            } else {
                navigate('/');
            }
        }
    }, [games, id, navigate]);

    if (loading) {
        return <Loader />;
    }

    if (error) {
        return (
            <div className="min-h-screen bg-gradient-to-br from-gray-900 to-black flex items-center justify-center">
                <div className="text-center">
                    <div className="w-24 h-24 mx-auto mb-4 bg-red-500/20 border border-red-500/30 rounded-full flex items-center justify-center">
                        <svg className="w-12 h-12 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z"></path>
                        </svg>
                    </div>
                    <h2 className="text-2xl font-bold text-white mb-2">Error Loading Game</h2>
                    <p className="text-gray-400 mb-4">{error}</p>
                    <Link to="/" className="bg-gradient-to-r from-green-400 to-blue-500 text-white font-semibold py-2 px-6 rounded-lg hover:shadow-lg hover:shadow-green-400/25 transition-all duration-300">
                        Go Home
                    </Link>
                </div>
            </div>
        );
    }

    if (!game) {
        return (
            <div className="min-h-screen bg-gradient-to-br from-gray-900 to-black flex items-center justify-center">
                <div className="text-center">
                    <div className="w-24 h-24 mx-auto mb-4 bg-gray-800 border border-gray-700 rounded-full flex items-center justify-center">
                        <svg className="w-12 h-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.172 16.172a4 4 0 015.656 0M9 12h6m-6-4h6m2 5.291A7.962 7.962 0 0112 15c-2.34 0-4.29-1.009-5.824-2.709M15 6.291A7.962 7.962 0 0012 5c-2.34 0-4.29 1.009-5.824 2.709"></path>
                        </svg>
                    </div>
                    <h2 className="text-2xl font-bold text-white mb-2">Game Not Found</h2>
                    <p className="text-gray-400 mb-4">The game you're looking for doesn't exist.</p>
                    <Link to="/" className="bg-gradient-to-r from-green-400 to-blue-500 text-white font-semibold py-2 px-6 rounded-lg hover:shadow-lg hover:shadow-green-400/25 transition-all duration-300">
                        Go Home
                    </Link>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-900 to-black">

            <div className="relative pt-24 md:pt-16 h-auto md:h-96 bg-gradient-to-r from-green-400 to-blue-500">
                <div className="absolute inset-0 bg-black bg-opacity-50"></div>
                <div className="relative flex flex-col md:flex-row items-center max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-0 gap-8">
                    <div className="flex-shrink-0 w-full md:w-64">
                        <img
                            src={game.coverPhoto}
                            alt={game.title}
                            className="w-full h-auto md:h-80 object-cover rounded-lg shadow-2xl"
                        />
                    </div>

                    <div className="flex-1 text-white">
                        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mb-4">
                            <span className="bg-gray-900 border border-gray-700 px-3 py-1 rounded-full text-sm font-semibold text-green-400">
                                {game.category}
                            </span>
                            <div className="flex items-center mt-2 sm:mt-0">
                                <span className="text-yellow-400 text-xl">★</span>
                                <span className="ml-2 text-xl font-semibold">{game.ratings}</span>
                            </div>
                        </div>

                        <h1 className="text-3xl md:text-5xl font-bold mb-4">{game.title}</h1>

                        <p className="text-lg md:text-xl mb-6 opacity-90">{game.description}</p>

                        <div className="flex flex-col sm:flex-row gap-4">
                            <a
                                href={game.downloadLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="bg-gradient-to-r from-green-400 to-blue-500 text-white font-semibold py-3 px-6 rounded-lg hover:shadow-lg hover:shadow-green-400/25 transition-all duration-300 text-center"
                            >
                                Download Now
                            </a>
                            <button className="bg-gray-900 border border-gray-700 text-white font-semibold py-3 px-6 rounded-lg hover:border-green-400 transition-colors duration-300">
                                Add to Wishlist
                            </button>
                        </div>
                    </div>
                </div>
            </div>


            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    <div className="lg:col-span-2 space-y-8">
                        <div className="bg-gray-800 border border-gray-700 rounded-lg p-6">
                            <h2 className="text-2xl font-bold text-white mb-4">About This Game</h2>
                            <p className="text-gray-400 leading-relaxed">{game.description}</p>
                        </div>

                        <div className="bg-gray-800 border border-gray-700 rounded-lg p-6">
                            <h2 className="text-2xl font-bold text-white mb-4">Game Features</h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                {['High-quality graphics', 'Multiplayer support', 'Regular updates', 'Cross-platform play'].map((feature, i) => (
                                    <div key={i} className="flex items-center gap-3">
                                        <div className="w-8 h-8 bg-green-400/20 border border-green-400 rounded-full flex items-center justify-center">
                                            <span className="text-green-400">✓</span>
                                        </div>
                                        <span className="text-gray-400">{feature}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="bg-gray-800 border border-gray-700 rounded-lg p-6">
                            <h2 className="text-2xl font-bold text-white mb-4">Screenshots</h2>
                            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                                {[1, 2, 3].map(i => (
                                    <img
                                        key={i}
                                        src={game.coverPhoto}
                                        alt={`${game.title} Screenshot ${i}`}
                                        className="w-full h-32 md:h-40 object-cover rounded-lg cursor-pointer hover:opacity-80 transition-opacity"
                                    />
                                ))}
                            </div>
                        </div>
                    </div>


                    <div className="space-y-6">
                        <div className="bg-gray-800 border border-gray-700 rounded-lg p-6">
                            <h3 className="text-xl font-bold text-white mb-4">Game Information</h3>
                            <div className="space-y-3">
                                <div className="flex justify-between">
                                    <span className="text-gray-400">Developer:</span>
                                    <span className="text-white font-medium">{game.developer}</span>
                                </div>
                                <div className="flex justify-between">
                                    <span className="text-gray-400">Category:</span>
                                    <span className="text-white font-medium">{game.category}</span>
                                </div>
                                <div className="flex justify-between">
                                    <span className="text-gray-400">Rating:</span>
                                    <div className="flex items-center">
                                        <span className="text-yellow-500">★</span>
                                        <span className="ml-1 text-white font-medium">{game.ratings}</span>
                                    </div>
                                </div>
                                <div className="flex justify-between">
                                    <span className="text-gray-400">Status:</span>
                                    <span className="bg-green-500/20 text-green-400 px-2 py-1 rounded-full text-xs font-medium">Available</span>
                                </div>
                            </div>
                        </div>

                        <div className="bg-gray-800 border border-gray-700 rounded-lg p-6">
                            <h3 className="text-xl font-bold text-white mb-4">Download</h3>
                            <div className="space-y-3">
                                <a
                                    href={game.downloadLink}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-full bg-gradient-to-r from-green-400 to-blue-500 text-white font-semibold py-3 px-4 rounded-lg hover:shadow-lg hover:shadow-green-400/25 transition-all duration-300 text-center block"
                                >
                                    Download Game
                                </a>
                                <button className="w-full bg-gray-900 border border-gray-700 text-white font-semibold py-3 px-4 rounded-lg hover:border-green-400 transition-colors duration-300">
                                    Add to Wishlist
                                </button>
                                <button className="w-full bg-gray-900 border border-gray-700 text-white font-semibold py-3 px-4 rounded-lg hover:border-green-400 transition-colors duration-300">
                                    Share Game
                                </button>
                            </div>
                        </div>

                        <div className="bg-gray-800 border border-gray-700 rounded-lg p-6">
                            <h3 className="text-xl font-bold text-white mb-4">System Requirements</h3>
                            <div className="space-y-2 text-sm">
                                <div>
                                    <span className="text-gray-400 font-medium">OS:</span>
                                    <span className="text-white ml-2">Windows 10/11</span>
                                </div>
                                <div>
                                    <span className="text-gray-400 font-medium">Memory:</span>
                                    <span className="text-white ml-2">8 GB RAM</span>
                                </div>
                                <div>
                                    <span className="text-gray-400 font-medium">Graphics:</span>
                                    <span className="text-white ml-2">DirectX 11 compatible</span>
                                </div>
                                <div>
                                    <span className="text-gray-400 font-medium">Storage:</span>
                                    <span className="text-white ml-2">10 GB available space</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            <div className="fixed bottom-6 left-6 z-50">
                <button
                    onClick={() => navigate(-1)}
                    className="w-14 h-14 bg-gradient-to-r from-green-400 to-blue-500 text-white rounded-full shadow-lg hover:shadow-xl hover:shadow-green-400/25 transition-all duration-300 flex items-center justify-center"
                >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path>
                    </svg>
                </button>
            </div>
        </div>
    );
}

export default GameDetails;
