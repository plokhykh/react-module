import React from 'react';
import './RocketCard.css';


function RocketCard({ launch_year, name, img }) {

    return (
        <div className="rocket-card">
            <div>
                <h1>{name}</h1>
                <p>{launch_year}</p>
            </div>
            <div>
                <img src={img} alt={name}/>
            </div>
        </div>
    );
}

export default RocketCard;
