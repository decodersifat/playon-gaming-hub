import React from 'react'
import { Link } from 'react-router';
import useGame from '../hooks/useGame';
import Loader from './Loader';
import GameCard from './GameCard';

function PopularGames() {
    const { games, loading, error } = useGame();

    if (loading) {
        return <Loader />;
    }

    if (error) {
        return (
            <div className="flex justify-center items-center h-screen">
                <div className="text-red-600 text-center">
                    <h2 className="text-xl font-semibold mb-2">Error Loading Games</h2>
                    <p>{error}</p>
                </div>
            </div>
        );
    }

    if (!games || games.length === 0) {
        return (
            <div className="flex justify-center items-center h-screen">
                <div className="text-gray-600 text-center">
                    <h2 className="text-xl font-semibold mb-2">No Games Found</h2>
                    <p>No games are available at the moment.</p>
                </div>
            </div>
        );
    }


    const topGames = games
        .sort((a, b) => parseFloat(b.ratings) - parseFloat(a.ratings))
        .slice(0, 4);

    return (
        <section id='popular-games' className="py-8 sm:py-12 lg:py-16 bg-gradient-to-b from-gray-900 to-black">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-8 sm:mb-12 lg:mb-16">
                    <h1 className="gaming-title text-3xl sm:text-4xl md:text-5xl font-venite-straight font-bold mb-4 sm:mb-6">
                        TOP RATED GAMES
                    </h1>
                    <p className="text-xs font-venite-straight font-light text-gray-300 ">
                        Discover the highest-rated games in our collection
                    </p>
                    <div className="mt-4 flex justify-center">
                        <div className="w-16 sm:w-24 h-1 bg-gradient-to-r from-green-400 to-blue-500 rounded-full"></div>
                    </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
                    {topGames.map((game, index) => (
                        <GameCard game={game}  index = {index}/>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default PopularGames;
