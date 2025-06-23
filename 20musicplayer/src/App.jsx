

import './App.css'
import { songs } from "./data/songs";
import { MusicPlayer } from "./components/MusicPlayer";
import { Playlist } from "./components/PlayList";
import { useState } from "react";

export default function App() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleSelectSong = (id) => {
    const index = songs.findIndex((s) => s.id === id);
    setCurrentIndex(index);
  };

  return (
    <div className="app music-app">
      <MusicPlayer
        songs={songs}
        currentIndex={currentIndex}
        setCurrentIndex={setCurrentIndex}
        key={currentIndex} 
      />
      <Playlist
        songs={songs}
        currentSongId={songs[currentIndex].id}
        onSelect={handleSelectSong}
      />
    </div>
  );
}





