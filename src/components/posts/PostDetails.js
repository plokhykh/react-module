import React, {useEffect, useState} from 'react';
import {Link, Outlet, useLocation, useParams} from "react-router-dom";

import {postsService} from "../../services/posts.service";
import css from "../../App.module.css";


export const PostDetails = () => {

    const { id } = useParams();
    const { state } = useLocation();

    const [post, setPost] = useState(null);

    useEffect(() => {
            if (state) {
                setPost(state);
                return
            }
            postsService.getById(id).then(response => setPost(response))
        }, [id]
    )


    return (
        <div>
            {post && <div>
                <h3>{post.title}</h3>
                <p>{post.body}</p>
                <Link to={'comments'}>
                    <button>
                        get comments
                    </button>
                </Link>
            </div>}

            <div className={css.margin}>
                <Outlet/>
            </div>
        </div>
    );
};

