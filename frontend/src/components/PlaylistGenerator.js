import React from 'react';

const PlaylistGenerator = ({ playlist }) => {
  return (
    <div>
      <h2>Your Playlist</h2>
      <ul>
        {playlist.map((track, index) => (
          <li key={index}>{track.name} - {track.artist}</li>
        ))}
      </ul>
    </div>
  );
};

export default PlaylistGenerator;
