import axios from 'axios'
import {useState, useEffect} from 'react'
import University from './University'
import './classes.css'


const MainView = () => {
    const [universities, setUniversities] = useState([])
    const [country, setCountry] = useState("")
    const [searchTarget, setSearchTarget] = useState("United+States")
    

    // useEffect(() => {
    //     axios.get("http://universities.hipolabs.com/search?country=United+States").then( res => 
    //     {
    //         const universitiesData = res.data
    //         console.log(universitiesData)
    //         setUniversities(universitiesData)
    //     })
    // },[])

    useEffect(() => {
        getUniversities("United+States")
    },[])

    const handleCountryChange = (event) => {
        setCountry(event.target.value)
    }

    const getUniversities = async (country) => {
        axios.get(`http://universities.hipolabs.com/search?country=${country}`).then( res => 
        {
            const universitiesData = res.data
            console.log(universitiesData)
            setUniversities(universitiesData)
        })
    }

    const search = async () => {
        const data = await getUniversities(country)
        console.log(data)
    }

    return(
        <div>
            <h1>Universities:</h1>
            <input type="text" onChange={handleCountryChange}></input>
            <button onClick={search}>
                Search
            </button>
            {universities == null && <div className='loader'></div>}
            {universities.length != 0 &&
                <div>
                    <h1>Universities for country:{universities[0].country}</h1>
                    {universities.map((uni,index) => <University key={index} {...uni} />)}
                </div>
            }
        </div>
    )

}

export default MainView