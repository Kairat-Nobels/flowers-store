import React, { useEffect, useState } from 'react';
import { Link, Outlet, useLocation, useNavigate } from 'react-router-dom';
import "./header.scss";
import { HiShoppingCart } from "react-icons/hi";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoCloseSharp } from "react-icons/io5";
import { useDispatch, useSelector } from 'react-redux';
import Connect from '../Connect/Connect';
import Footer from '../Footer/Footer';
import { getOrders } from '../../store/slices/ordersSlice';
import { getReviews } from '../../store/slices/reviewsSlice';
import CameModal from '../CameModal/CameModal';
import { getItems } from '../../store/slices/itemsSlice';
import { getCategories } from '../../store/slices/categoriesSlice';
import { setCategory } from '../../store/features/filterSlice';
import CategoriesDropdown from '../CategoriesDropdown/CategoriesDropdown';
import { getPromocods } from '../../store/slices/promocodSlice';

const Header = () => {
    const [hamburger, setHamburger] = useState(true);
    const [nav, setNav] = useState(false);
    const cart = useSelector((state) => state.cart.cart);
    const { categories } = useSelector((state) => state.categoriesReducer);
    const { selectedCategory } = useSelector((state) => state.filterReducer);
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const location = useLocation();
    const [modal, setModal] = useState(false)

    useEffect(() => {
        dispatch(getItems())
        dispatch(getReviews())
        dispatch(getOrders())
        dispatch(getCategories())
        dispatch(getPromocods())
    }, [dispatch])
    const getTotalQuantity = () => {
        let total = 0;
        cart.forEach((item) => {
            total += item.quantity;
        });
        return total;
    };
    const getTotalPrice = () => {
        let total = 0;
        cart.forEach((item) => {
            total += Math.round(item.price) * item.quantity;
        });
        return total;
    };
    const changeCategory = (categoryName) => {
        dispatch(setCategory(categoryName));
        navigate('/shop');
    }
    const closeHamburger = () => {
        setNav(false);
        setHamburger(true)
    }
    const openHamburger = () => {
        setNav(true);
        setHamburger(false)
    }
    return (
        <>
            <header>
                <div className="header-container">
                    <div className="header-content">
                        <div className="header-left">
                            <div className="logo-part pe-4">
                                <Link to="/">Blossom Lane</Link>
                            </div>
                            <ul className='dekstop-nav list-unstyled m-0'>
                                <li>
                                    <button className={`clean-button ${(selectedCategory === "All" && location.pathname === "/shop") ? "active" : ""}`} onClick={() => { changeCategory("All") }}>
                                        Все товары
                                    </button>
                                </li>
                                <CategoriesDropdown categories={categories} changeCategory={changeCategory} />
                            </ul>
                        </div>
                        <div className="header-right">
                            <button className='admin-button' onClick={e => {
                                if (localStorage.getItem('admin') === "true") {
                                    navigate('/admin');
                                } else setModal(true)
                                closeHamburger()
                            }}>Admin</button>
                            <p className='price'>{getTotalPrice()}.00 сом</p>
                            <div className='cart'>
                                <Link to="/cart"><HiShoppingCart /></Link>
                                <p className='cart-quantity'>{getTotalQuantity()}</p>
                            </div>
                            <div className="hamburger-menu">
                                {hamburger ? (<button onClick={() => { openHamburger() }}><GiHamburgerMenu /></button>) : (<button onClick={() => { closeHamburger() }}><IoCloseSharp /></button>)}
                            </div>
                        </div>
                    </div>
                </div>
                <ul className={nav ? 'mobile-nav open-nav  list-unstyled m-0' : 'mobile-nav list-unstyled m-0'}>
                    <li>
                        <button className='clean-button' onClick={() => { changeCategory("All"); closeHamburger() }}>
                            Все товары
                        </button>
                    </li>
                    {categories.map(category => (
                        <li key={category.id}>
                            <button
                                className='clean-button'
                                onClick={() => { changeCategory(category.name); closeHamburger(); }}
                            >
                                {category.name}
                            </button>
                        </li>
                    ))}
                </ul>
            </header>
            {
                modal && <CameModal setModal={setModal} />
            }
            <main>
                <Outlet />
            </main >
            <Connect />
            <Footer />
        </>

    )
}

export default Header;