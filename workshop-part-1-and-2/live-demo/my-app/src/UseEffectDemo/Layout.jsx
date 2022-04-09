import { useState, useEffect } from 'react'
import CounterDisplay from './CounterDisplay'

const Layout = () => {

    const [counter, setCounter] = useState(0)
    const [dummyCounter, setDummyCounter] = useState(0)
    const [isVisible, setIsVisible] = useState(true)

    const handleCounterIncrement = () => {
        setCounter(counter + 1)
    }
    
    const handleCounterDecrement = () => {
        setCounter(counter- 1)
    }

    const handleDummyCounterIncrement = () => {
        setDummyCounter(dummyCounter + 1)
    }

    const toggleIsVisible = () => {
        setIsVisible(!isVisible)
    }

    // sve sto funkcija renderuje
    return (
        <div>
            <h1>Hello world from our first component</h1>
            {isVisible && <CounterDisplay counter={counter} />}
            <h2>dummy counter value is :{dummyCounter} </h2>
            <button onClick={handleCounterIncrement}> Increment the counter</button>
            <button onClick={handleCounterDecrement}> Decrement the counter </button>
            <button onClick={handleDummyCounterIncrement}> Increment the counter</button>
            <button onClick={toggleIsVisible} >Toggle visibility</button>
        </div>
    )
    

}

export default Layout