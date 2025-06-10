import React, { useEffect, useState } from 'react';
import Assets from '../Assests/Assets';
import Slider from "react-slick";
import Card from '../Components/Card/Card';
import { useAppContext } from '../ContextAPI/AppContext';
import TopContent from '../Components/TopContent/TopContent';

function HomeView() {
    const { data, setData } = useAppContext();

    let requestOptions = {
        method: 'GET',
        redirect: 'follow'
    };
    useEffect(() => {
        fetch("https://alkye-test-422384984803.us-central1.run.app/myapp/list/", requestOptions)
            .then(response => response.json())
            .then(result => setData(result || []))
            .catch(error => console.log('error', error));
    }, []);

    var settings = {
        infinite: true,
        speed: 1000,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: false,
        cssEase: "linear",
        prevArrow: false,
        nextArrow: false,
        centerMode: true,
        centerPadding: '10%'
    };
    console.log('data', data)

    return (
        <section className='home-view-main'>
            <TopContent />
            <div className='carousel-sec container-fluid'>
                <Slider {...settings}>
                    {data?.map((item) => (
                        <div className='custom-slide'>
                            <Card content={item} />
                        </div>
                    ))}

                </Slider>
            </div>
        </section>
    )
}

export default HomeView
