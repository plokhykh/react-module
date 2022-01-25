import React, {useEffect, useState} from 'react';
import {Pagination} from "@mui/material";

import {episodesService} from "../../services/episodes.service";
import {EpisodeCard} from "../../components/episode-card/EpisodeCard";
import './EpisodesPage.css'


export const EpisodesPage = () => {

    const [episodes, setEpisodes] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [countPages, setCountPages] = useState(0);


    useEffect(() => {
        episodesService.getAll(currentPage).then(response => {
            setEpisodes(response.results);
            setCountPages(response.info.pages);
        })
    }, [currentPage]);

    const handleChangePage = (e) => {
        setCurrentPage(+e.target.innerText);
    }

    return (
        <div className={'episodes-page'}>
            {episodes.map(episode => <EpisodeCard key={episode.id} episode={episode}/>)}

            <div className={'pagination'}>
                <Pagination count={countPages} color="primary" page={currentPage} onChange={handleChangePage}/>
            </div>
        </div>
    );
};

