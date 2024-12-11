import React, { useState } from "react";

function Card(props) {
    const { title, text, rating, imageUrl } = props;

    const [isHovered, setIsHovered] = useState(false);

    const handleMouseEnter = () => {
        setIsHovered(true);
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
    };

    return (
        <div
            className="card"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            {imageUrl.indexOf('.mp4') !== -1 ?
                <video src={imageUrl} autoPlay="loop"/> :
                <img src={imageUrl} alt={title}/>}
            <h3>{title}</h3>
            <p className={`text ${isHovered ? 'show' : ''}`}>
                {isHovered ? text : '정보 확인'}
            </p>
            <p>⭐ {rating}</p>
        </div>
    );
}

export default Card;
