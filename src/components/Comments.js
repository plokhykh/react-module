import React, {useEffect, useState} from 'react';
import Comment from "./Comment";

function Comments() {

    const [comments, setComments] = useState([]);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/comments')
            .then(data => data.json())
            .then(response => setComments(response))
            .catch(err => console.log(err))
    }, [])
    return (
        <div>
            {comments.map(comment =>
                <Comment
                    key={comment.id}
                    name={comment.name}
                    email={comment.email}
                    body={comment.body}
                />)}
        </div>
    );
}

export default Comments;
