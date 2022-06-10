import React from 'react';
import './css/index.css';
const FunItem = (value) => {
    
    return (
        <li className='fun-item'>
            <div className='item-imgbox'>
                <img src={value.img} />
            </div>
            <div className='item-infobox'>
                <span className='info-title'>{value.title}</span>
                <span className='info-company'>{value.info}</span>
            </div>
        </li>
    );
};

export default FunItem;