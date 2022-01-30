import React from 'react';

export const CarDetails = ({ car: { id, model, price, year } }) => {

    return (
        <div>
            <p>id: {id}</p>
            <p>Model: {model}</p>
            <p>Price: {price}</p>
            <p>Year: {year}</p>
            <hr/>
        </div>
    );
};

