import './App.css';
import {Route, Routes, Navigate} from "react-router-dom";

import Layout from "./pages/Layout";
import {EpisodesPage} from "./pages/episode-page/EpisodesPage";
import {EpisodeDetails} from "./components/episode-details/EpisodeDetails";
import {LocationsPage} from "./pages/LocationsPage";


function App() {
    return (
        <Routes>
            <Route path={'/'} element={<Layout/>}>
                <Route path={''} element={<Navigate to={'episodes'}/>}/>

                <Route path={'episodes'} element={<EpisodesPage/>}/>
                <Route path={'/episodes/:episodeId'} element={<EpisodeDetails/>}/>

                <Route path={'locations'} element={<LocationsPage/>}/>

            </Route>




        </Routes>

    );
}

export default App;
