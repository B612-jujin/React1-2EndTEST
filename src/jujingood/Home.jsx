import React, { useState } from 'react';
import Header from './MainResorce/sidebar/Header';
import CardContainer from './MainResorce/CardContainer';
import ImageSlider from './ImageSlider';
import Hero from './MainResorce/hero'
import CharacterContainer from './MainResorce/contain'
import './MainResorce/AIR.css';

const Home = () => {
    return (
        <div>
            <Header />
            <Hero/>
            <div>
                <ImageSlider/>
            </div>
            <div className="content">
                <h1 className="title">SNB 사진</h1>
                <p className="title">산나비에서 만난 추억들</p>
                <CardContainer/>
            </div>
            <CharacterContainer/>
        </div>
    );
};

export default Home;
