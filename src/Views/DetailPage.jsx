import React, { useEffect, useState } from 'react';
import Assets from '../Assests/Assets';
import { useAppContext } from '../ContextAPI/AppContext';
import TopContent from '../Components/TopContent/TopContent';

function DetailPage() {
    const [id, setID] = useState(null);
    const { data } = useAppContext();

    useEffect(() => {
        const storedId = sessionStorage.getItem('id');
        if (storedId) {
            setID(storedId); // If your IDs are numeric, use: setID(Number(storedId));
        }
    }, []);

    const findData = data?.find((item) => item.id == id);

    return (
        <div className='home-view-main'>
            <TopContent />
            <div className='detail-img'>
                <img src={Assets.slideImage} alt="DetailPage" />
            </div>

            {findData ? (
                <div className='mt-4 container'>
                    <button className='photo-btn'>Photography</button>
                    <h2 className='head-data'>{findData.title}</h2>
                    <p>{findData.content}</p>
                </div>
            ) : (
                <p>Loading or no data found...</p>
            )}
        </div>
    );
}

export default DetailPage;
