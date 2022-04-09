import {Routes, Route} from 'react-router-dom'
import RoutingView  from './RoutingView'
import NotesView from '../components/NotesView'
import Layout from '../UseContextExample/Layout'
import MainView from '../APIsExample/MainView'

const Skeleton = () => {



    return(
        <div>
            <div>
                <Routes>
                    <Route path={"/"} element={<RoutingView />} />
                    <Route path={"/notes"} element={<NotesView />} />
                    <Route path={"/counter"} element={<Layout />} />
                    <Route path={"/universities:countryName"}  element={<MainView />}/>
                 </Routes>
            </div>
        </div>
    )

}

export default Skeleton
