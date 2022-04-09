import { useEffect } from "react"
import { useState } from "react"


const MainView = () => {
// funkcjie i clanovi komponente
const [counter, setCounter] = useState(1)

const handleCounterIncrement = () => {
    setCounter(counter + 1)
}

useEffect(() => {
    document.title = `YOu Have set the counter this many times:${counter}`
})

const handleCounterDecrement = () => {
    setCounter(counter- 1)
    counter - 1;


}

const data = asyncCall().then( ( res ) => res.data).catch(err => console.log(err))

const data2 = await asyncCall()

// sve sto funkcija renderuje
return (
    <div>
        <h1>Hello world from our first component</h1>
        <button onClick={handleCounterIncrement}> Increment the counter</button>
        <button onClick={handleCounterDecrement}> Decrement the counter </button>
        <h2>Counter value:{counter}</h2>
    </div>
)

}

export default MainView