import React from 'react';


export const AlbumCard = ({ title, url }) => {

    return (
        <div>
            <h5>{title}</h5>
            <img src={url} alt={title}/>
            <hr/>
        </div>
    );
};

