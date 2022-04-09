import {useState, useEffect} from 'react'


const CounterDisplay = ({counter}) => {
    const [text, setText] = useState("")

    useEffect(() => {
        console.log("I run when component first mounts")

        return () => {
            console.log("I run when the component is not showing anymore")
        }
    },[])

    useEffect(() => {
        const text = counter % 2 === 0 ? "even" : "odd"
        setText(text) 
    },[counter])

    return(
        <h2>Counter value is {text}</h2>
    )
}

export default CounterDisplay