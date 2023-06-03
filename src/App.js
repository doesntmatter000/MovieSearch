import './App.css'
import Navbar from "./components/Navbar";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import {Route, Routes} from "react-router-dom";
import Popular from "./pages/Popular";
import Upcoming from "./pages/Upcoming";
import Home from "./pages/Home";
import {SkeletonTheme} from "react-loading-skeleton";
import Details from "./components/Details";


function App() {

  return (
    <div className="App">
        <Navbar/>
        <SkeletonTheme baseColor="#202020" highlightColor="#fff">
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/popular" element={<Popular/>}/>
                <Route path="/upcoming" element={<Upcoming/>}/>
                <Route path="/details/:img2/:title" element={<Details/>}/>
            </Routes>
        </SkeletonTheme>
    </div>
  );
}

export default App;
