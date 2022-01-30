import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {getAllComments} from "../store/commentSlice";
import {CommentDetails} from "../components/CommentDetails";


export const CommentsPage = () => {
    const { comments, status, error } = useSelector(state => state['commentsReducer']);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getAllComments())
    }, [])

    return (
        <div>
            {status === 'loading' && <h3>LOADING...</h3>}
            {error && <h3>{error}</h3>}
            {!!comments.length && comments.map(comment => <CommentDetails key={comment.id} comment={comment}/>)}
        </div>
    );
};
