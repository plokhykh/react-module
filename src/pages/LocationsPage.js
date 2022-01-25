import React, {useEffect, useState} from 'react';
import {Pagination} from "@mui/material";

import {locationService} from "../services/locations.service";
import {LocationCard} from "../components/location-card/LocationCard";


export const LocationsPage = () => {

    const [locations, setLocations] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [countPages, setCountPages] = useState(0);


    useEffect(() => {
        locationService.getAll(currentPage).then(response => {
            setLocations(response.results);
            setCountPages(response.info.pages);
        })
    }, [currentPage]);

    const handleChangePage = (e) => {
        setCurrentPage(+e.target.innerText);
    }
    console.log(locations);
    return (
        <div>
            {locations.map(location => <LocationCard key={location.id} location={location}/>)}

            <div className={'pagination'}>
                <Pagination count={countPages} color="primary" page={currentPage} onChange={handleChangePage}/>
            </div>
        </div>
    );
};

