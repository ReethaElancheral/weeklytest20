import { useEffect, useRef, useState } from "react";

export function MusicPlayer({ songs, currentIndex, setCurrentIndex }) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);

  const audioRef = useRef();
  const currentSong = songs[currentIndex];

  useEffect(() => {
    if (isPlaying) {
      audioRef.current.play();
    } else {
      audioRef.current.pause();
    }
  }, [isPlaying, currentIndex]);

  const togglePlay = () => setIsPlaying(!isPlaying);

  const nextSong = () => {
    setCurrentIndex((idx) => (idx + 1) % songs.length);
    setProgress(0);
  };

  const prevSong = () => {
    setCurrentIndex((idx) => (idx - 1 + songs.length) % songs.length);
    setProgress(0);
  };

  const onTimeUpdate = () => {
    const current = audioRef.current.currentTime;
    const duration = audioRef.current.duration || 0;
    setProgress((current / duration) * 100);
  };

  const onSeek = (e) => {
    const percent = e.target.value;
    const duration = audioRef.current.duration || 0;
    audioRef.current.currentTime = (percent / 100) * duration;
    setProgress(percent);
  };

  return (
    <div className="music-player">
      <audio
        ref={audioRef}
        src={currentSong.audioSrc}
        onTimeUpdate={onTimeUpdate}
        onEnded={nextSong}
      />
      <div className="now-playing">
        <h3>{currentSong.title}</h3>
        <p>{currentSong.artist}</p>
      </div>
      <div className="controls">
        <button onClick={prevSong} aria-label="Previous">&#9664;&#9664;</button>
        <button onClick={togglePlay} aria-label={isPlaying ? "Pause" : "Play"}>
          {isPlaying ? "❚❚" : "▶"}
        </button>
        <button onClick={nextSong} aria-label="Next">&#9654;&#9654;</button>
      </div>
      <input
        type="range"
        min="0"
        max="100"
        value={progress}
        onChange={onSeek}
        className="progress-bar"
      />
    </div>
  );
}
