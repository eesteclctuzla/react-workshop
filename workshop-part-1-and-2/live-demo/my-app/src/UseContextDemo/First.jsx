import Second from './Second'
import { useCounterContext } from './CounterContext'

const First = () => {
    
    const { counter } = useCounterContext()


    return(
        <div>
            <h1>First component uses counter:{counter}</h1>
            <Second/>
        </div>
    )

}

export default First