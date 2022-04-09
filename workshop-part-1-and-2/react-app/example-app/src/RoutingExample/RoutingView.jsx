
import {useNavigate} from 'react-router-dom'


const RoutingView = () => {
    const navigate = useNavigate()

    const navigateToNotesView = () => {
        navigate("/notes")
    }

    const navigateToCounterView = () => {
        navigate('/counter')
    }

    return(
        <div>
            <button onClick={navigateToNotesView}>Notes View</button>
            <button onClick={navigateToCounterView}>Counter View</button>
            <button onClick={() => navigate("/universities")}>Universisties View</button>
        </div>
    )


}

export default RoutingView