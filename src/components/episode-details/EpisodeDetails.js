import React from 'react';
import {useLocation} from "react-router-dom";

import CharacterCard from "../character-card/CharacterCard";
import './EpisodeDetails.css';


export const EpisodeDetails = () => {
    const { state } = useLocation();
    const { name, air_date, episode, characters } = state;

    return (
        <div className={'episode-box'}>
            <div className={'episode-title'}>
                <h1>{name}</h1>
                <p>Air date: {air_date}</p>
                <p>Episode: {episode}</p>
            </div>
            <div className={'episode-characters'}>
                {characters.map((character, ind) => <CharacterCard key={ind} url={character} char={''}/>)}
            </div>
        </div>
    );
};

