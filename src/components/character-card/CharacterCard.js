import React, {useEffect, useState} from 'react';
import {axiosService} from "../../services/axios.service";

import './CharacterCard.css';


const CharacterCard = ({ url }) => {

        const [character, setCharacter] = useState(null);

        useEffect(() => {
            axiosService(`${url}`)
                .then(response => response.data)
                .then(response => setCharacter(response))
        }, [url]);

        return (
            <div>
                {character && <div className={'character-card'}>
                    <img src={character.image} alt={character.name}/>
                    <h3>{character.name}</h3>
                    <p>gender: {character.gender}</p>
                    <p>location: {character.location.name}</p>
                    <p>species: {character.species}</p>
                    <p>status: {character.status}</p>
                    <p>type: {character.type}</p>
                </div>}
            </div>
        );
    }
;

export default CharacterCard;
