import {useReducer, useState} from "react";

import './App.css';


const reducer = (state, action) => {
    switch (action.type) {
        case 'addCat':
            return { ...state, cats: [...state.cats, action.payload] }

        case 'addDog':
            return { ...state, dogs: [...state.dogs, action.payload] }

        case 'deleteCat':
            state.cats.forEach((cat, index) => {
                if (cat === action.payload) {
                    state.cats.splice(index, 1);
                }
            })
            return { ...state }

        case 'deleteDog':
            state.dogs.forEach((dog, index) => {
                if (dog === action.payload) {
                    state.dogs.splice(index, 1);
                }
            })
            return { ...state }
    }
}

function App() {

    const [state, dispatch] = useReducer(reducer, { cats: [], dogs: [] });
    const [dataCat, setDataCat] = useState("");
    const [dataDog, setDataDog] = useState("");

    const handlerChangeCat = (e) => {
        setDataCat(e.target.value);
    }

    const handlerChangeDog = (e) => {
        setDataDog(e.target.value);
    }

    return (
        <div>
            <div className={'wrapper'}>
                <div>
                    Cat: <input type="text" onChange={handlerChangeCat}/>
                    <button onClick={() => dispatch({ type: 'addCat', payload: dataCat })}>Add</button>
                </div>

                <div>
                    Dog: <input type="text" onChange={handlerChangeDog}/>
                    <button onClick={() => dispatch({ type: 'addDog', payload: dataDog })}>Add</button>
                </div>
            </div>

            <div className={'wrapper'}>
                <div>
                    {!!state.cats.length && state.cats.map(cat => <div>
                        {cat}
                        <button onClick={() => dispatch({ type: 'deleteCat', payload: cat })}>
                            Delete
                        </button>
                    </div>)}
                </div>

                <div>
                    {!!state.dogs.length && state.dogs.map(dog => <div>
                        {dog}
                        <button onClick={() => dispatch({ type: 'deleteDog', payload: dog })}>
                            Delete
                        </button>
                    </div>)}
                </div>
            </div>

        </div>
    );
}

export default App;
