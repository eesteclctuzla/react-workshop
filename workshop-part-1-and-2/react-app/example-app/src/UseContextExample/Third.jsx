import { useCounterContext } from "./CounterContext"

const Third  = () => {
    const { counter } = useCounterContext()

    return(
        <div>
            <h3>Counter: {counter}</h3>
        </div>
    )

}

export default Third