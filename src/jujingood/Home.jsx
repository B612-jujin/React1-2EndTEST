import React from 'react';
import Header from './MainResorce/sidebar/Header';

const Home = () => {
    return (
        <div>
            <Header />
            <div className="content">
                <h1>Welcome to my website!</h1>
                <p>This is a simple top bar in React.</p>
            </div>
        </div>
    );
};

export default Home;
