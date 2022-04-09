import First from './First'
import {useCounterContext} from './CounterContext'
import {useParams} from 'react-router-dom'
import { useEffect } from 'react'

const Layout = () => {
    const params = useParams()
    const { incrementCounter } = useCounterContext()

    return(
        <div>
            <button onClick={() => incrementCounter()}>Increment the counter</button> 
            <h1>Optional paramater is set to{params.counterValue}</h1>
            <First/>
        </div>
    )
}

export default Layout