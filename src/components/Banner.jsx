import React, { useState, useEffect, useRef } from 'react'
import { Swiper, SwiperSlide } from "swiper/react"
import { EffectCoverflow, Pagination, Autoplay } from "swiper/modules"
import axios from 'axios'
import { Link } from 'react-router'

import "swiper/css"
import "swiper/css/effect-coverflow"
import "swiper/css/pagination"

function Banner() {
    const [games, setGames] = useState([])
    const [loading, setLoading] = useState(true)
    const paginationElRef = useRef(null)

    useEffect(() => {
        const fetchGames = async () => {
            try {
                const response = await axios.get('/games-data.json')

                const topGames = response.data
                    .sort((a, b) => parseFloat(b.ratings) - parseFloat(a.ratings))
                    .slice(0, 8)
                setGames(topGames)
            } catch (error) {
                console.error('Error fetching games:', error)
            } finally {
                setLoading(false)
            }
        }

        fetchGames()
    }, [])

    if (loading) {
        return (
            <section className='size-full flex items-center justify-center mt-10'>
                <div className="gaming-loader"></div>
            </section>
        )
    }

    return (
        <section className='w-full flex items-center justify-center mt-10'>
            <div className="w-full max-w-6xl mx-auto px-4">

                <div className='w-full h-32 flex justify-center text-6xl md:text-8xl font-robus mb-8'>
                    <div
                        className="bg-gradient-to-l from-indigo-900 to-indigo-500 px-6 md:px-10"
                        style={{
                            clipPath: "polygon(0 0, 100% 0, 100% 80%, 0 100%)"
                        }}
                    >
                        <h1 className='text-black'>Featured</h1>
                    </div>
                    <h1 className='text-white ml-4'>Games</h1>
                </div>

                <div id='slider' className='relative w-full h-full pb-12'>
                    <Swiper
                        effect={"coverflow"}
                        grabCursor={true}
                        centeredSlides={true}
                        loop={true}
                        slidesPerView={3}
                        spaceBetween={-50}
                        coverflowEffect={{
                            rotate: 15,
                            stretch: 0,
                            depth: 200,
                            modifier: 1,
                            slideShadows: true,
                        }}
                        pagination={{ clickable: true, el: paginationElRef.current }}
                        onBeforeInit={(swiper) => {
                            swiper.params.pagination.el = paginationElRef.current;
                        }}
                        autoplay={{
                            delay: 3000,
                            disableOnInteraction: false,
                        }}
                        breakpoints={{
                            320: {
                                slidesPerView: 1.5,
                                spaceBetween: -30,
                            },
                            768: {
                                slidesPerView: 2.5,
                                spaceBetween: -40,
                            },
                            1024: {
                                slidesPerView: 3,
                                spaceBetween: -50,
                            },
                        }}
                        modules={[EffectCoverflow, Pagination, Autoplay]}
                        className="w-full py-8"
                    >
                        {games.map((game) => (
                            <SwiperSlide key={game.id} className="h-full w-[280px] md:w-[300px]">
                                <Link to={`/game/${game.id}`}>
                                
                                <div className="w-full h-[420px] md:h-[450px] bg-[var(--gaming-bg-card)] border border-[var(--gaming-border)] rounded-2xl overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(0,255,136,0.2)] hover:border-[var(--gaming-accent)] flex flex-col">
                                    <div className="relative w-full h-[60%] overflow-hidden">
                                        <img src={game.coverPhoto} alt={game.title} className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105" />
                                        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/70 opacity-0 transition-opacity duration-300 hover:opacity-100"></div>
                                        <div className="absolute top-3 right-3 bg-black/80 px-3 py-1 rounded-full flex items-center gap-1">
                                            <span className="text-yellow-400">★</span>
                                            <span className="text-white font-bold text-sm">{game.ratings}</span>
                                        </div>
                                    </div>
                                    <div className="p-5 flex-1 flex flex-col justify-between">
                                        <div>
                                            <h3 className="text-white text-lg font-bold leading-snug mb-2 line-clamp-2">{game.title}</h3>
                                            <p className="text-[var(--gaming-accent)] text-sm font-semibold mb-1">{game.category}</p>
                                            <p className="text-[var(--gaming-text-secondary)] text-xs">{game.developer}</p>
                                        </div>
                                        <div className="mt-3 bg-emerald-500 rounded-lg">
                                            <button className="w-full bg-[var(--gaming-gradient-accent)] text-[var(--gaming-bg-primary)] font-semibold text-sm py-2.5 rounded-lg tracking-wide transition-transform duration-300 hover:-translate-y-0.5">
                                                View Details
                                            </button>
                                        </div>
                                    </div>
                                </div>
                                </Link>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                    <div ref={paginationElRef} className="swiper-pagination !static mt-4 flex items-center justify-center"></div>
                </div>
            </div>
        </section>
    )
}

export default Banner
