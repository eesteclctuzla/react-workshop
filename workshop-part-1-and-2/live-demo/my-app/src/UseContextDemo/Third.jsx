import { useCounterContext } from "./CounterContext"

const Third = () => {

    const { counter } = useCounterContext

    return(
        <div>
            <h3>Third component uses counter:{counter}</h3>
        </div>
    )

}

export default Third