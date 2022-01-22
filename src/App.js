import {useState} from "react";

import {btnName} from "./constance";
import {Preview} from "./components/preview/Preview";
import {Button} from "./components/button/Button";
import './App.css';


function App() {

    const [word, setWord] = useState('');

    const defineWord = (item) => {
        setWord(item)
    }

    return (
        <div className={'container'}>
            <div className={'box-btn'}>
                {btnName.map((item, ind) => <Button
                    key={ind}
                    label={item}
                    onClick={defineWord}
                />)}
            </div>

            <Preview word={word}/>
        </div>
    );
}

export default App;
