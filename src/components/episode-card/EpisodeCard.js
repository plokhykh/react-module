import React from 'react';
import {Link} from "react-router-dom";

import './EpisodeCard.css'


export const EpisodeCard = ({ episode }) => {

    const { id, name, air_date, episode: { seasonSeries } } = episode;
    return (
        <div className={'episode-card'}>
            <h3>{name}</h3>
            <p>Air Date: {air_date}</p>
            <p>Episode: {seasonSeries}</p>
            <Link
                className={'details'}
                to={`${id.toString()}`}
                state={episode}
            >
                show details
            </Link>
        </div>
    );
};

