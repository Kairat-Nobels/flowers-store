import React from 'react';
import "./homeSale.scss";
import { useNavigate } from 'react-router-dom';

const HomeSale = () => {
    const navigate = useNavigate();
    return (
        <div className="home-sale page-container">
            <div className="sale-content">
                <div className="sale-title d-flex flex-column">
                    <h2 data-aos="fade-right">Весенние скидки на букеты!</h2>
                    <h3 data-aos="fade-right" className='text-center text-sm-start'>
                        Дарите цветы с любовью — получите скидку 15% на все композиции до конца месяца.
                    </h3>
                    <button data-aos="fade-right" onClick={() => navigate("/shop")} className='general-button'>
                        Перейти к скидкам
                    </button>
                </div>
            </div>
        </div>
    )
}

export default HomeSale;