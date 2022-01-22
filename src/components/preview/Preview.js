import React, {useState} from 'react';

import './Preview.css';


export const Preview = ({ word }) => {

    const [timestamp, setTimestamp] = useState('');

    const reloadImg = () => {
        const timestamp = Date.now()
        setTimestamp(timestamp);
    }

    return (
        <div className={'box-preview'}>
            <img src={`https://loremflickr.com/640/480/${word}?t=${timestamp}`} alt={word}/>
            <button onClick={reloadImg}>UPDATE</button>
        </div>
    );
};

