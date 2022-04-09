import { useCounterContext } from "./CounterContext"
import Second from "./Second"

const First = () => {
    const { counter } = useCounterContext() 

    return(
        <div>
            <h1>This is using counter in the first component {counter}</h1>
            <Second/>
        </div>
    )

}

export default First