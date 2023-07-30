import { Routes, Route, useNavigate } from "react-router-dom";
import Card from "./Card.js";
import "./App.css";
import { Timer } from "./Timer.js";


function App() {
  const images = [
    {
      image:
        "https://images.unsplash.com/photo-1546190255-451a91afc548?ixlib=rb-1.2.1",
    },
    {
      image:
        "https://images.unsplash.com/photo-1591348122449-02525d70379b?ixlib=rb-1.2.1",
    },
    {
      image:
        "https://images.unsplash.com/photo-1548802673-380ab8ebc7b7?ixlib=rb-1.2.1",
    },
    {
      image:
        "https://images.unsplash.com/photo-1577023311546-cdc07a8454d9?ixlib=rb-1.2.1",
    },
  ];

  const navigate = useNavigate();


  const handleRedirectionToTimer = () => {
    navigate("/timer");
  };

  const navigateToCarousel = () => {
    navigate("/carousel");
  };

  return (
<div >
    <button className='timer-button' onClick={navigateToCarousel}>Carousel</button>
      <button className='timer-button' onClick={handleRedirectionToTimer}>Timer</button>

      <Routes>
        <Route path="/carousel"element={<Card slides={images}/>}/>
        <Route path="timer" element={<Timer/>}/>
      </Routes>

    
    
    </div>
  );
}

export default App;
