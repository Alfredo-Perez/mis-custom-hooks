import { useState } from 'react';


export const useCounter = ( initialState = 10 ) => {
    const [counter, setCounter] = useState( initialState );

    // const increment = ( factor = 1) =>{
    //     setCounter( counter+factor );
    // };

    const increment = () =>{
        setCounter( counter + 1 );
    };

    const reset = ( ) =>{
        // console.log(initialState);
        setCounter( initialState );
    };

    const decrement = () => {
        setCounter (counter - 1 );
    };

    // const decrement = ( factor = 1 ) => {
    //     setCounter (counter -factor );
    // };

    return {
        counter,
        increment,
        reset,
        decrement,
    };
}
