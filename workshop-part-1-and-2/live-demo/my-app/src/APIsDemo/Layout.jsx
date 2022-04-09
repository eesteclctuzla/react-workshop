import axios from 'axios'
import { useEffect, useState } from 'react'
import Uni from './Uni'
import './classes.css'

const Layout = () => {
    const [unis, setUnis] = useState([])
    const [country, setCountry] = useState()

    useEffect(() => {

        fetchData("United+States");

    },[])

    const handleCountryChange = (event) => {
        setCountry(event.target.value)
    }

    async function fetchData(country) {
        const req = await axios.get(`http://universities.hipolabs.com/search?country=${country}`)
        console.log(req.data)
        setUnis(req.data)
    }

    const handleSearch = () => {
        fetchData(country)
    }

    return(
        <div>
            <button onClick={handleSearch}>Search</button>
            <input type="text" onChange={handleCountryChange} />
            {unis.length == 0 && <div className="loader"></div>}
            {unis.length > 0 && <h1>Universities for country: {unis[0].country}</h1>}
            <div>
                {unis && unis.map((uni, index ) => <Uni key={index} {...uni} />)}
            </div>
        </div>
    )


}

export default Layout