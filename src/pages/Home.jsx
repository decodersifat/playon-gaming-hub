import React, { useContext, useEffect } from 'react';
import { Link } from 'react-router';
import AuthContext from '../context/AuthContext';
import PopularGames from '../components/PopularGames';
import HeroSection from '../components/HeroSection';
import Banner from '../components/Banner';
import Newsletter from '../components/Newsletter';
import MoreGames from '../components/MoreGames';
import HeroLoader from '../components/HeroLoader';


function Home() {
    useEffect(()=>{

        document.title = "PlayOn - HomePage";
    },[]);
    const { user } = useContext(AuthContext);

    return (

        <>

            <HeroLoader/>
            <Banner/>
            <PopularGames />
            <MoreGames />
            <Newsletter/>

        </>

    );
}

export default Home;
