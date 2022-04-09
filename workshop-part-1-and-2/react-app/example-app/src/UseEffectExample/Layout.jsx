import { useState, useEffect } from 'react'
import CounterDisplay from './CounterDisplay'
const Layout = () => {

    const [counter, setCounter] = useState(0)
    const [dummyCounter, setDummyCounter] = useState(0)
    const [isCounterVisible, setIsCounterVisible] = useState(true)

    useEffect(() => {
        setCounter(1)
    },[])

    useEffect(() => {
        // console.log("I run on changes of counter")
        document.title = ` counter is ${counter}`
    },[counter])

    useEffect(() => {
        // console.log("I run on changes of dummyCounter")
        document.title = `dummy counter is ${dummyCounter}`
    },[dummyCounter])



    const handleCounterIncrement = () => {
        setCounter(counter + 1)
    }
    
    const handleCounterDecrement = () => {
        setCounter(counter- 1)
    }

    const handleDummyCounterIncrement = () => {
        setDummyCounter(dummyCounter + 1)
    }
    
    const handleToggleCounterDisplay = () => {
        setIsCounterVisible(!isCounterVisible)
    }
    // sve sto funkcija renderuje
    return (
        <div>
            <h1>Hello world from our first component</h1>
            <button onClick={handleCounterIncrement}> Increment the counter</button>
            <button onClick={handleCounterDecrement}> Decrement the counter </button>
            <button onClick={handleDummyCounterIncrement}> Increment the dummy counter</button>
            <button onClick={handleToggleCounterDisplay}>Toggle displaying the counter</button>
            {isCounterVisible && <CounterDisplay counter={counter}/>}
            <h2>Dummy counter value:{dummyCounter}</h2>
        </div>
    )
    

}

export default Layout