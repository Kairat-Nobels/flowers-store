import React from 'react';

const Footer = () => {
    return (
        <footer style={{ background: "#e9a8b6" }} className='d-flex flex-column flex-sm-row justify-content-between p-5'>
            <div className="footer-left pt-2">
                <span className='text-white'>Copyright © 2025 Blossom Lane</span>
            </div>
            <div className="footer-right pt-2">
                <span className='pe-1 text-white'>Made by</span>
                <span className='fw-bold' style={{ color: "#78909c", cursor: "pointer" }} onClick={() => { window.open("https://www.instagram.com/") }}>Developer</span>
            </div>
        </footer>
    )
}

export default Footer;