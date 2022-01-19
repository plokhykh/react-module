import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";

import {postsService} from "../../services/posts.service";
import {PostCommentDetails} from "./PostCommentDetails";

export const PostComments = () => {

    const { id } = useParams();
    const [postComments, setpostComments] = useState([]);

    useEffect(() => {
        postsService.getPostComments(id).then(response => setpostComments(response))
    }, [])

    return (
        <div>
            {!!postComments.length && postComments.map (comment => <PostCommentDetails key={comment.id} comment={comment}/>)}

        </div>
    );
};

