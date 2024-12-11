import React from 'react';
import './Header.css'; // 스타일 파일을 따로 분리할 수도 있습니다.

const Header = () => {
    return (
        <header className="header">
            <div className="header_logo">SNB</div>
            <nav className="header_nav">
                <ul className="header_ul">
                    <li className="header_li"><a className="header_a" href="/">Home</a></li>
                    <li className="header_li"><a className="header_a" href="/about">About</a></li>
                    <li className="header_li"><a className="header_a" href="/services">Services</a></li>
                    <li className="header_li"><a className="header_a" href="/contact">Contact</a></li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;
