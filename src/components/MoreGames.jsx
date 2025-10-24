import React, { useState, useEffect } from 'react';
import { Link } from 'react-router';
import axios from 'axios';
import GameCard from '../components/GameCard';

function MoreGames() {
    const [games, setGames] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchRandomGames = async () => {
            try {
                const response = await axios.get('/games-data.json');
                const shuffled = response.data.sort(() => 0.5 - Math.random());
                setGames(shuffled.slice(0, 6));
            } catch (error) {
                console.error('Error fetching games:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchRandomGames();
    }, []);

    if (loading) {
        return (
            <section className='w-full flex items-center justify-center py-16'>
                <div className="gaming-loader"></div>
            </section>
        );
    }

    return (
        <section className='w-full mt-20 md:py-16 bg-gradient-to-br from-gray-900 to-black'>
            

            <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

                <div className='w-full h-32 flex justify-center text-6xl md:text-8xl font-robus mb-8'>
                    <div
                        className="bg-gradient-to-l from-indigo-900 to-indigo-500 px-6 md:px-10"
                        style={{
                            clipPath: "polygon(0 0, 100% 0, 100% 80%, 0 100%)"
                        }}
                    >
                        <h1 className='text-black'>More</h1>
                    </div>
                    <h1 className='text-white ml-4'>Games</h1>
                </div>


                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
                    {games.map((game,index) => (
                        <GameCard key={game.id} game={game} index={index} />
                    ))}
                </div>

                <div className="text-center mt-3">
                    <Link
                        to="/games"
                        className="inline-flex items-center space-x-2 bg-gradient-to-r from-green-400 to-blue-500 text-white font-semibold py-4 px-8 rounded-lg hover:shadow-lg hover:shadow-green-400/25 transition-all duration-300"
                    >
                        <span>View All Games</span>
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
                        </svg>
                    </Link>
                </div>
            </div>
        </section>
    );
}

export default MoreGames;
