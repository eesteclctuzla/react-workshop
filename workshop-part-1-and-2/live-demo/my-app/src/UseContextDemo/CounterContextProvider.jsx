import { useEffect, useState } from 'react'
import { CounterContext } from './CounterContext'


const CounterContextProvider = ({children}) => {
    const [counter, setCounter] = useState(0)

    useEffect(() => {
        // dohvati sa server podatke
        // setCounter(dohvacenoSAservera)
    },[])

    const incrementCounter = () => {
        setCounter(counter + 1)
    }

    return(
        <CounterContext.Provider value={ { counter, incrementCounter } } >
            {children}
        </CounterContext.Provider>
    )
}

export default CounterContextProvider 