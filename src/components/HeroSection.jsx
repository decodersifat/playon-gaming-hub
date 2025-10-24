import React, { useState, useEffect, useRef } from 'react'
import CircularText from './CircularText';
import { Link } from 'react-router';
function HeroSection() {

    const [currentIndex, setCurrentIndex] = useState(1);
    const [hasClicked, setHasClicked] = useState(false);
    const [loading, setLoading] = useState(true);
    const [loadedVideos, setLoadedVideos] = useState(0);
    const nextVideoRef = useRef(null);

    const handleLoadedVideos = () => {
        setLoadedVideos((prev) => prev + 1)
    }

    const handleMinVideoClick = () => {
        setHasClicked(true)
    }

    const scrollToSlider = () => {
        const sliderElement = document.getElementById('slider');
        if (sliderElement) {
            sliderElement.scrollIntoView({ 
                behavior: 'smooth',
                block: 'start'
            });
        }
    }

    const videoSource = (index) => {
        return `/video_${index}.webm`;
    }
    const totalVideos = 4;

    useEffect(() => {
        if (loadedVideos === totalVideos - 1) {
            setLoading(false);
        }
    }, [loadedVideos]);

    return (
        <div className="relative w-full h-screen -mt-16">


            <div className="md:hidden absolute top-0 left-0 w-full h-full bg-black/50 z-20"
                onClick={() => {
                    setCurrentIndex((currentIndex % 4) + 1)
                    handleMinVideoClick()
                }}>
            </div>

            <div
                className='absolute top-0 left-0 w-full h-full bg-black/90 hidden md:block'
                onClick={() => {
                    setCurrentIndex((currentIndex % 4) + 1)
                    handleMinVideoClick()
                }}
            >
                <video
                    src={videoSource((currentIndex % totalVideos) + 1)}
                    autoPlay
                    loop
                    muted
                    playsInline
                    className='absolute rounded-xl  
                                z-30 top-[71%] left-[23%] 
                                translate-x-[-50%] translate-y-[-50%] 
                                scale-20 
                                object-cover 
                                opacity-0 
                                hover:opacity-100 
                                hover:scale-30
                                transition-all 
                                ease-in-out
                                duration-300 cursor-pointer'
                    onLoadedData={handleLoadedVideos}
                />
            </div>

            <video
                src={videoSource(currentIndex)}
                autoPlay
                loop
                muted
                playsInline
                className="absolute z-10 top-0 left-0 w-full h-full object-cover"
                onLoadedData={handleLoadedVideos}

            />
            <div className='absolute top-0 left-0 h-full w-full z-20 md:bg-black/60 bg-black/30 pointer-events-none'></div>

            <div className='absolute w-full h-full grid grid-cols-2 z-30 pointer-events-none hidden md:grid'>
                <div className='relative'>
                    <div className='absolute top-[13%] left-[12%] pt-16'>
                        <h1 className='font-venite font-bold text-4xl'>
                            <span className='block text-white'>#1<br /> World's Number One</span>
                            <span className='block bg-gradient-to-r from-green-400 via-blue-500 to-purple-600 bg-clip-text text-transparent'>
                                Ultimate Game Hub
                            </span>
                        </h1>

                        <div className='flex justify-evenly items-center gap-10 mt-4 -ml-10 pointer-events-auto'>
                            <div className='flex items-center space-x-1 group cursor-pointer hover:translate-x-2 transition-all duration-300'>
                                <div className='w-2 h-2 bg-gradient-to-r from-green-400 to-blue-500 rounded-full group-hover:scale-125 transition-transform duration-300'></div>
                                <span className='text-white text-lg font-medium group-hover:text-green-400 transition-colors duration-300'>Discover</span>
                            </div>

                            <div className='flex items-center space-x-1 group cursor-pointer hover:translate-x-2 transition-all duration-300'>
                                <div className='w-2 h-2 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full group-hover:scale-125 transition-transform duration-300'></div>
                                <span className='text-white text-lg font-medium group-hover:text-blue-400 transition-colors duration-300'>Play</span>
                            </div>

                            <div className='flex items-center space-x-1 group cursor-pointer hover:translate-x-2 transition-all duration-300'>
                                <div className='w-2 h-2 bg-gradient-to-r from-purple-600 to-pink-500 rounded-full group-hover:scale-125 transition-transform duration-300'></div>
                                <span className='text-white text-lg font-medium group-hover:text-purple-400 transition-colors duration-300'>Download</span>
                            </div>
                        </div>
                        <div className='relative mt-10'>
                            <CircularText/>
                        </div>
                        
                    </div>
                </div>

                <div className='flex flex-col justify-center z-50 items-center p-8'>
                    <div
                        className="bg-indigo-600 w-full h-32 md:h-40 lg:h-48 xl:h-56 p-5"
                        style={{
                            clipPath: "polygon(0 0, 100% 0, 100% 80%, 0 100%)"
                        }}
                    >
                        <div className='w-full h-full flex justify-center items-center -mt-2 md:-mt-3'>
                            <button onClick={scrollToSlider} className="cursor-pointer pointer-events-auto">
                               <h1 className='font-robus sm:text-8xl text-white md:text-5xl lg:text-7xl xl:text-8xl'>Discover <span className='text-black'>Games</span></h1> 
                            </button>
                        </div>
                    </div>


                </div>

            </div>

            <div className='absolute w-full h-full grid grid-cols-1 z-30 pointer-events-none md:hidden'>
                
                <div className='relative flex flex-col justify-center px-4 pt-16'>
                    <div className='max-w-lg mx-auto'>
                        <h1 className='font-venite font-bold text-3xl '>
                            <span className='block text-white'>#1<br /> World's Number One</span>
                            <span className='block bg-gradient-to-r from-green-400 via-blue-500 to-purple-600 bg-clip-text text-transparent'>
                                Ultimate Game Hub
                            </span>
                        </h1>

                        <div className='flex flex-row justify-start items-center gap-3 sm:gap-4 mt-4 pointer-events-auto'>
                            <div className='flex items-center space-x-1 group cursor-pointer hover:translate-x-2 transition-all duration-300'>
                                <div className='w-1.5 h-1.5 bg-gradient-to-r from-green-400 to-blue-500 rounded-full group-hover:scale-125 transition-transform duration-300'></div>
                                <span className='text-white text-sm font-medium group-hover:text-green-400 transition-colors duration-300'>Discover</span>
                            </div>

                            <div className='flex items-center space-x-1 group cursor-pointer hover:translate-x-2 transition-all duration-300'>
                                <div className='w-1.5 h-1.5 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full group-hover:scale-125 transition-transform duration-300'></div>
                                <span className='text-white text-sm font-medium group-hover:text-blue-400 transition-colors duration-300'>Play</span>
                            </div>

                            <div className='flex items-center space-x-1 group cursor-pointer hover:translate-x-2 transition-all duration-300'>
                                <div className='w-1.5 h-1.5 bg-gradient-to-r from-purple-600 to-pink-500 rounded-full group-hover:scale-125 transition-transform duration-300'></div>
                                <span className='text-white text-sm font-medium group-hover:text-purple-400 transition-colors duration-300'>Download</span>
                            </div>
                        </div>


                        <div className='relative mt-10 -mb-10'>
                            <CircularText/>
                        </div>
                    </div>
                </div>


                <div className='flex flex-col justify-center items-center p-4'>
                    <div
                        className="bg-indigo-600 w-full max-w-sm h-32 sm:h-36 p-3 relative"
                        style={{
                            clipPath: "polygon(0 0, 100% 0, 100% 80%, 0 100%)"
                        }}
                    >
                        <video
                            src={videoSource((currentIndex % totalVideos) + 1)}
                            autoPlay
                            loop
                            muted
                            playsInline
                            className='absolute rounded-xl  
                                        z-30 top-1/2 left-1/2 
                                        translate-x-[-50%] translate-y-[-50%] 
                                        w-20 h-12
                                        object-cover 
                                        opacity-0 
                                        hover:opacity-100 
                                        hover:scale-110
                                        transition-all 
                                        ease-in-out
                                        duration-300 cursor-pointer'
                            onLoadedData={handleLoadedVideos}
                        />
                        
                        <div className='relative w-full h-full flex justify-center items-center -mt-1'>
                            <button onClick={scrollToSlider} className="pointer-events-auto cursor-pointer">
                               <h1 className='font-robus text-5xl sm:text-4xl'>
                                   Discover <span className='text-black'>Games</span>
                               </h1> 
                            </button>
                        </div>
                    </div>
                </div>

            </div>

        </div>
    )
}

export default HeroSection
