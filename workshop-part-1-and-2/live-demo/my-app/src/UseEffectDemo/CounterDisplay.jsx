import { useEffect } from "react"

const CounterDisplay = ({counter}) => {

    useEffect(() => {
        console.log("I know too that counter changed")
    },[counter])

    useEffect(() => {
        console.log("I am subscribing")

        return () => {
            console.log("I am unsubscribing")
        }
    },[])

    return(
        <h2>Counter value is: {counter}</h2>
    )

}

export default CounterDisplay