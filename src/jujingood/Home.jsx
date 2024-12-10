import React from 'react';
import Header from './MainResorce/sidebar/Header';
import CardContainer from './MainResorce/CardContainer';
import ImageSlider from './ImageSlider';
import './MainResorce/AIR.css';

const Home = () => {
    return (
        <body className="backimg">
        <div>
            <Header />
            <div>
                <ImageSlider/>
            </div>
            <div className="content">
                <h1 className="title">Welcome to my website!</h1>
                <p className="title">This is a simple top bar in React.</p>
                <CardContainer/>
            </div>
        </div>
        </body>
    );
};

export default Home;
