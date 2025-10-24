import React from 'react'
import { Link } from 'react-router'

function GameCard({game, index}) {
  return (
    <div>
      <Link key={game.id} to={`/game/${game.id}`} className="block group">
                            <div className="gaming-card cursor-pointer group">
  
                                <div className="absolute top-4 left-4 z-10">
                                    <div className={`px-3 py-1 rounded-full text-sm font-bold ${index === 0 ? 'rank-1' : index === 1 ? 'rank-2' : index === 2 ? 'rank-3' : 'rank-4'}`}>
                                        #{index + 1}
                                    </div>
                                </div>
                                
                                <figure className="relative overflow-hidden">
                                    <img
                                        src={game.coverPhoto}
                                        alt={game.title}
                                        className="w-full h-48 sm:h-56 object-cover group-hover:scale-110 transition-transform duration-500"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                </figure>
                                <div className="p-4 sm:p-6">
                                    <div className="flex items-center justify-between mb-3">
                                        <span className="gaming-badge px-3 py-1 rounded-full text-xs font-semibold">
                                            {game.category}
                                        </span>
                                        <div className="flex items-center">
                                            <span className="text-yellow-400 text-lg">★</span>
                                            <span className="ml-1 text-sm font-bold text-white">{game.ratings}</span>
                                        </div>
                                    </div>
                                    <h2 className="text-lg font-bold text-white mb-2 line-clamp-2">
                                        {game.title}
                                    </h2>
                                    <p className="text-gray-400 text-sm line-clamp-2 mb-4">
                                        {game.description}
                                    </p>
                                    <div className="flex items-center justify-between">
                                        <span className="text-xs text-gray-500">{game.developer}</span>
                                        <div className="gaming-btn px-4 py-2 rounded-lg text-xs font-semibold">
                                            VIEW DETAILS
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Link>
    </div>
  )
}

export default GameCard
