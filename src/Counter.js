import React, {useReducer} from 'react';

const reducer = (state, action) => {
    switch (action.type) {
        case 'inc1':
            return { ...state, firstCounter: state.firstCounter + 1 }
        case 'dec1':
            return { ...state, firstCounter: state.firstCounter - 1 }
        case 'reset1':
            return { ...state, firstCounter:  action.payload }
        case 'inc2':
            return { ...state, secondCounter: state.secondCounter + 1 }
        case 'dec2':
            return { ...state, secondCounter: state.secondCounter - 1 }
        case 'reset2':
            return { ...state, secondCounter: action.payload }
        case 'inc3':
            return { ...state, thirdCounter: state.thirdCounter + 1 }
        case 'dec3':
            return { ...state, thirdCounter: state.thirdCounter - 1 }
        case 'reset3':
            return { ...state, thirdCounter: action.payload }
        default:
            throw  new Error(`This type ${action.type} not found`)

    }
}


export const Counter = () => {
    const [state, dispatch] = useReducer(reducer, {
        firstCounter: 0,
        secondCounter: 0,
        thirdCounter: 0
    });

    return (
        <div>
            <div>
                <h3> First counter: {state.firstCounter}</h3>
                <button onClick={() => dispatch({ type: 'inc1' })}>INC</button>
                <button onClick={() => dispatch({ type: 'dec1' })}>DEC</button>
                <button onClick={() => dispatch({ type: 'reset1', payload: 0 })}>RESET</button>
            </div>

            <div>
                <h3> Second counter: {state.secondCounter}</h3>
                <button onClick={() => dispatch({ type: 'inc2' })}>INC</button>
                <button onClick={() => dispatch({ type: 'dec2' })}>DEC</button>
                <button onClick={() => dispatch({ type: 'reset2', payload: 0 })}>RESET</button>
            </div>

            <div>
                <h3> Third counter: {state.thirdCounter}</h3>
                <button onClick={() => dispatch({ type: 'inc3' })}>INC</button>
                <button onClick={() => dispatch({ type: 'dec3' })}>DEC</button>
                <button onClick={() => dispatch({ type: 'reset3', payload: 0 })}>RESET</button>
            </div>
        </div>
    );
};

