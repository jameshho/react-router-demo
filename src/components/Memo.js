import React from 'react'
import { useState, useMemo } from 'react';

export const Memo = () => {
    function slowFunction(num) {
        console.log('Calling Slow Function')
        for (let i = 0; i <= 1000000000; i++) { }
        return num * 2
    }
    const [number, setNumber] = useState(0)
    const [dark, setDark] = useState(false)
    // const doubleNumber = slowFunction(number)

    const doubleNumber = useMemo(() => {
        return slowFunction(number)
    }, [number])
    const themeStyles = useMemo(() => {
        return {
            backgroundColor: dark ? 'black' : 'white',
            color: dark ? 'white' : 'black'
        }
    }, [dark])
    // const themeStyles = {
    //     backgroundColor: dark ? 'black' : 'white',
    //     color: dark ? 'white' : 'black'
    // }
    return (

        <>

            <input type="number" value={number} onChange={e => setNumber(parseInt(e.target.value))} />
            <button onClick={() => setDark(prevDark => !prevDark)}>Change Theme</button>
            <div style={themeStyles}>{doubleNumber}</div>

        </>
    )
}

