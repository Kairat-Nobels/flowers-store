import React from 'react';
import "./hero.scss";
import { useNavigate } from 'react-router-dom';
const Hero = () => {
    const navigate = useNavigate()
    return (
        <div data-aos="zoom-in" className="hero not-container mb-4">
            <div className="hero-content">
                <h1 data-aos="fade-up">
                    Blossom Lane
                </h1>
                <div className="hero-subtitle" data-aos="fade-up">
                    Откройте для себя волшебство Blossom Lane, где цветочные мечты оживают в изысканных композициях и ярких букетах
                </div>
                <button data-aos="fade-up" onClick={() => navigate("/shop")} className='general-button mt-4'>
                    Купить сейчас
                </button>
            </div>
        </div>
    )
}

export default Hero;