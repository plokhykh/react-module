import React from 'react';

import CharacterCard from "../character-card/CharacterCard";
import './LocationCard.css';

export const LocationCard = ({ location }) => {
    const { name, type, dimension, residents } = location

    return (
        <div className={'location-card'}>
            <div className={'location-card-title'}>
                <h3>{name}</h3>
                <p>type: {type}</p>
                <p>dimension: {dimension}</p>
                <p>residents:</p>
            </div>
            <div className={'location-card-residents'}>
                {residents.map((resident, ind) => <CharacterCard key={ind} url={resident}/>)}
            </div>
            <hr/>
        </div>
    );
};

