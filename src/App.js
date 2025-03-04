import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Carousel from "./components/Navbar/Carousel";
import Movies from "./components/Navbar/Movies";
import TvShows from "./components/Navbar/TvShows";

function App() {
  return (
    <div 
      className="min-h-screen bg-cover bg-center bg-no-repeat" 
      style={{ backgroundImage: "url('/images/Netflix-Background.jpg')" }}
    >
      <Navbar />
      <div className="pt-20 text-white text-center">
        <h1 className="text-4xl font-bold">Welcome to Netflix</h1>
      </div>

      <div className="App">
        <main className="flex justify-center items-center min-h-screen bg-black/50">
        <Routes>
            <Route path="/" element={<Carousel />} />
            <Route path="/tv-shows" element={<TvShows />} />
            <Route path="/movies" element={<Movies />} />
          </Routes>
        </main>
      </div>
    </div>
  );
}

export default App;
