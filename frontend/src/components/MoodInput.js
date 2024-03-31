import React, { useState } from 'react';

const MoodInput = ({ onSubmit }) => {
  const [mood, setMood] = useState('');

  const handleGeneratePlaylist = () => {
    // Example logic to handle mood input and generate playlist
    // Example API call to backend for playlist generation:
    // axios.post('/api/generatePlaylist', { mood })
    //   .then(response => {
    //     onSubmit(response.data); // Pass playlist data to parent component
    //   })
    //   .catch(error => {
    //     console.error('Playlist generation error:', error);
    //   });
  };

  return (
    <div>
      <input type="text" placeholder="Enter your mood" value={mood} onChange={(e) => setMood(e.target.value)} />
      <button onClick={handleGeneratePlaylist}>Generate Playlist</button>
    </div>
  );
};

export default MoodInput;
