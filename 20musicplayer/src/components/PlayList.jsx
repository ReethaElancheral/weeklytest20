export function Playlist({ songs, currentSongId, onSelect }) {
  return (
    <div className="playlist">
      <h2>Playlist</h2>
      <ul>
        {songs.map((song) => (
          <li
            key={song.id}
            className={song.id === currentSongId ? 'active' : ''}
            onClick={() => onSelect(song.id)}
          >
            <span className="title">{song.title}</span> - <span className="artist">{song.artist}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
