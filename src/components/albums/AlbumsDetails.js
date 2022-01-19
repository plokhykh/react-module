import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";

import {albumsService} from "../../services/albums.service";
import {AlbumCard} from "./AlbumCard";
import css from "../../App.module.css";


export const AlbumsDetails = () => {

    const { albumId } = useParams();
    const [photoAlbums, setPhotoAlbums] = useState([]);

    useEffect(() => {
        albumsService.getAlbumPhotos(albumId).then(response => setPhotoAlbums(response))
    }, [albumId])

    return (
        <div className={css.margin}>
            {photoAlbums.map(item => <AlbumCard
                key={item.id}
                url={item.thumbnailUrl}
                title={item.title}
            />)}
        </div>
    );
};

