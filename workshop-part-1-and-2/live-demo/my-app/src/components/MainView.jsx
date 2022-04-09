import {useState} from 'react'

const MainView = () => {

// tijelo funkcije
const [counter, setCounter] = useState(0)

// return funkcija koja renderuje

// const handleCounterIncrement = () => {
//     setCounter(counter + 1)
// }

// const handleCounterDecrement = () => {
//     setCounter(counter - 1)
// }

return(
    <div>
        <h1>Hello from my first component</h1>
        <hr></hr>
        <div>
            <h2>My counter value is:{counter}</h2>
            <button onClick={() => setCounter(counter + 1)} >Increment Value</button>
            <button onClick={() => setCounter(counter - 1)}> Decrement Value</button> 
        </div>
    </div>
)
}

export default MainView