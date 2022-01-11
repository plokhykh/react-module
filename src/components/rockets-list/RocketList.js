import React, {useEffect, useState} from 'react';
import RocketCard from "../rocket-card/RocketCard";

import './RocketsList.css';


function RocketList() {

    const [rockets, setRockets] = useState([]);

    useEffect(() => {
        fetch('https://api.spacexdata.com/v3/launches/')
            .then(data => data.json())
            .then(response => {
                setRockets(response.filter(item => +item.launch_year !== 2020));
            })
            .catch(err => console.log(err))
    }, [])

    return (
        <div className="container">
            {rockets.map(rocket =>
                <RocketCard
                    key={rocket.flight_number}
                    name={rocket.mission_name}
                    launch_year={rocket.launch_year}
                    img={rocket.links.mission_patch_small}
                />
            )}
        </div>
    );
}

export default RocketList;
