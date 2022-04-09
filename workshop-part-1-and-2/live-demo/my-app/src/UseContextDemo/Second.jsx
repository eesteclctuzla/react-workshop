import { useCounterContext } from './CounterContext'
import Third from './Third'

const Second = () => {

    const { incrementCounter } = useCounterContext()

    return(
        <div>
            <h2>SEcond component does not use counter:</h2>
            <button onClick={() => incrementCounter()} >Increment Counter</button>
            <Third />
        </div>
    )

}

export default Second