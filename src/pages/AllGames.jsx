import React, { useState, useEffect } from 'react';
import { Link } from 'react-router';
import axios from 'axios';
import GameCard from '../components/GameCard';

function AllGames() {
    const [games, setGames] = useState([]);
    const [filteredGames, setFilteredGames] = useState([]);
    const [loading, setLoading] = useState(true);
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedCategory, setSelectedCategory] = useState('All');

    useEffect(() => {


        
        document.title = "All Games - PlayOne";

        const fetchGames = async () => {
            try {
                const response = await axios.get('/games-data.json');
                setGames(response.data);
                setFilteredGames(response.data);
            } catch (error) {
                console.error('Error fetching games:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchGames();
    }, []);

    useEffect(() => {
        let filtered = games;

        // Filter by search term
        if (searchTerm) {
            filtered = filtered.filter(game =>
                game.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                game.developer.toLowerCase().includes(searchTerm.toLowerCase()) ||
                game.category.toLowerCase().includes(searchTerm.toLowerCase())
            );
        }

        // Filter by category
        if (selectedCategory !== 'All') {
            filtered = filtered.filter(game => game.category === selectedCategory);
        }

        setFilteredGames(filtered);
    }, [games, searchTerm, selectedCategory]);

    const categories = ['All', ...new Set(games.map(game => game.category))];

    if (loading) {
        return (
            <div className="min-h-screen bg-gradient-to-br from-gray-900 to-black flex items-center justify-center">
                <div className="gaming-loader"></div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-900 to-black">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-5">
                <div className="absolute inset-0" style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%2300ff88' fill-opacity='0.1'%3E%3Cpath d='M30 30c0-8.3-6.7-15-15-15s-15 6.7-15 15 6.7 15 15 15 15-6.7 15-15zm15 0c0-8.3-6.7-15-15-15s-15 6.7-15 15 6.7 15 15 15 15-6.7 15-15z'/%3E%3C/g%3E%3C/svg%3E")`,
                }}></div>
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                {/* Header */}
                <div className="mb-8">
                    <h1 className="text-4xl font-bold text-white mb-2">All Games</h1>
                    <p className="text-gray-400">Discover and explore our complete game library</p>
                </div>

                {/* Search and Filter Bar */}
                <div className="bg-gray-800 border border-gray-700 rounded-lg p-6 mb-8">
                    <div className="flex flex-col lg:flex-row gap-4 items-center justify-between">
                        {/* Total Games Count */}
                        <div className="flex items-center space-x-2">
                            <span className="text-gray-400">Total Games:</span>
                            <span className="text-green-400 font-bold text-xl">{games.length}</span>
                        </div>

                        {/* Search Bar */}
                        <div className="flex-1 max-w-md">
                            <div className="relative">
                                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                    <svg className="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                                    </svg>
                                </div>
                                <input
                                    type="text"
                                    placeholder="Search games..."
                                    value={searchTerm}
                                    onChange={(e) => setSearchTerm(e.target.value)}
                                    className="w-full pl-10 pr-4 py-3 bg-gray-900 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-green-400 transition-colors duration-300"
                                />
                            </div>
                        </div>

                        {/* Category Filter */}
                        <div className="flex items-center space-x-2">
                            <span className="text-gray-400">Category:</span>
                            <select
                                value={selectedCategory}
                                onChange={(e) => setSelectedCategory(e.target.value)}
                                className="px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg text-white focus:outline-none focus:border-green-400 transition-colors duration-300"
                            >
                                {categories.map(category => (
                                    <option key={category} value={category} className="bg-gray-900">
                                        {category}
                                    </option>
                                ))}
                            </select>
                        </div>
                    </div>
                </div>

                {/* Results Count */}
                <div className="mb-6">
                    <p className="text-gray-400">
                        Showing {filteredGames.length} of {games.length} games
                        {searchTerm && ` for "${searchTerm}"`}
                        {selectedCategory !== 'All' && ` in ${selectedCategory}`}
                    </p>
                </div>

                {/* Games Grid */}
                {filteredGames.length > 0 ? (
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                        {filteredGames.map((game) => (
                            <GameCard key={game.id} game={game} />
                        ))}
                    </div>
                ) : (
                    <div className="text-center py-12">
                        <div className="w-24 h-24 mx-auto mb-4 bg-gray-800 border border-gray-700 rounded-full flex items-center justify-center">
                            <svg className="w-12 h-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.172 16.172a4 4 0 015.656 0M9 12h6m-6-4h6m2 5.291A7.962 7.962 0 0112 15c-2.34 0-4.29-1.009-5.824-2.709M15 6.291A7.962 7.962 0 0012 5c-2.34 0-4.29 1.009-5.824 2.709"></path>
                            </svg>
                        </div>
                        <h3 className="text-xl font-semibold text-white mb-2">No Games Found</h3>
                        <p className="text-gray-400 mb-4">
                            {searchTerm 
                                ? `No games match your search for "${searchTerm}"`
                                : `No games found in the ${selectedCategory} category`
                            }
                        </p>
                        <button
                            onClick={() => {
                                setSearchTerm('');
                                setSelectedCategory('All');
                            }}
                            className="bg-gradient-to-r from-green-400 to-blue-500 text-white font-semibold py-2 px-6 rounded-lg hover:shadow-lg hover:shadow-green-400/25 transition-all duration-300"
                        >
                            Clear Filters
                        </button>
                    </div>
                )}

                {/* Back to Home */}
                <div className="mt-12 text-center">
                    <Link
                        to="/"
                        className="inline-flex items-center space-x-2 text-green-400 hover:text-blue-400 transition-colors duration-300"
                    >
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path>
                        </svg>
                        <span>Back to Home</span>
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default AllGames;
