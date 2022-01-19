import React, {useEffect, useState} from "react";
import {usersService} from "../../services/users.service";
import {Outlet, useParams} from "react-router-dom";

import {UserAlbumsList} from "./UserAlbumsList";
import css from "../../App.module.css";


export const UserAlbums = () => {

    const { id } = useParams();
    const [albums, setAlbums] = useState([]);

    useEffect(() => {
        usersService.getUserAlbums(id).then(response => setAlbums(response));
    }, [id])

    return (
        <div>
            {albums.map(album => <UserAlbumsList
                key={album.id}
                id={album.id}
                title={album.title}
            />)}

            <div className={css.item}>
                <Outlet/>
            </div>
        </div>
    );
};

