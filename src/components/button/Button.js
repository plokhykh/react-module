import React from 'react';

import './Button.css';


export const Button = ({ label, onClick }) => {

    const onClickHandler = (label) => {
        onClick && onClick(label);
    };

    return (
        <div>
            <button onClick={(() => onClickHandler(label))}>
                {label}
            </button>
        </div>
    );
};

