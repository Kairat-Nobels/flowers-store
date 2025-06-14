import React from 'react';

const HomeServicesItem = (props) => {
    const { image, title } = props;
    return (
        <div className="col-12 col-md-3 d-flex flex-column align-items-center text-center py-3">
            <div className="services-img mb-3" style={{
                background: '#fff0f5',
                borderRadius: '50%',
                width: 80,
                height: 80,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                boxShadow: '0 2px 12px rgba(245, 198, 170, 0.12)'
            }}>
                <img src={image} alt="" style={{ width: 44, height: 44, objectFit: 'contain' }} />
            </div>
            <h6 style={{ color: '#e9a8b6', fontWeight: 500, fontSize: '1.08rem' }}>{title}</h6>
        </div>
    )
}

export default HomeServicesItem;