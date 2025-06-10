import React from 'react';
import Assets from '../../Assests/Assets';
import { useNavigate } from 'react-router';

function Card({ content }) {
    const navigate = useNavigate();

    function handleClick(id) {


        if (id !== undefined && id !== null) {
            sessionStorage.setItem('id', id.toString());
            navigate('/details');
        } else {
            console.error('Invalid id:', id);
        }
    }

    return (
        <div
            className='card-sec col-12 col-sm-10 col-lg-8'
            onClick={() => handleClick(content?.id)}
        >
            <div className='image-sec'>
                <img src={Assets.slideImage} alt="slide-image" />
            </div>
            <div className='overlay-content'>
                <button className='photo-btn'>Photography</button>
                <p>{content.short_description}</p>
            </div>
        </div>
    );
}

export default Card;
