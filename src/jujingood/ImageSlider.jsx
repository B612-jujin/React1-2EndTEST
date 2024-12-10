import React, { useState, useEffect } from 'react';
import './ImageSlider.css'; // CSS 파일을 별도로 만들어서 스타일 적용
import snb1 from './imgs/snb.png'
import snb from './imgs/snbback.png'

const ImageSlider = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const images = [
        `${snb}`,
        `${snb1}`
    ];

    useEffect(() => {
        const intervalId = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 5000); // 8초마다 이미지 변경

        return () => clearInterval(intervalId); // 컴포넌트 언마운트 시 interval 정리
    }, [images.length]);

    return (
        <div className="slider-container">
            <div className="image-wrapper">
                <img
                    src={images[currentIndex]}
                    alt={`image-${currentIndex} ${images[currentIndex].valueOf()}`}
                    className="slider-image"
                />
            </div>

            {/* 인디케이터 */}
            <div className="indicator-container">
                {images.map((_, index) => (
                    <div
                        key={index}
                        className={`indicator ${index === currentIndex ? 'active' : ''}`}
                        onClick={() => setCurrentIndex(index)}
                    />
                ))}
            </div>
        </div>
    );
};

export default ImageSlider;
