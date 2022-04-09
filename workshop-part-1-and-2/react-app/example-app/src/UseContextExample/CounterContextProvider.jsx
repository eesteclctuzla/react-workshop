import { useState } from 'react'
import { CounterContext } from './CounterContext'


const CounterContextProvider = ({children}) => {
    const [counter, setCounter] = useState(0)

    const incrementCounter = () => {
        setCounter(counter + 1)
    }

    return(
        <CounterContext.Provider value={ { counter, incrementCounter, setCounter } } >
            {children}
        </CounterContext.Provider>
    )
}

export default CounterContextProvider