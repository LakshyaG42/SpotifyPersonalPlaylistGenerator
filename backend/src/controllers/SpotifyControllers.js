const axios = require('axios');

const getSavedTracks = async (accessToken) => {
  try {
    const response = await axios.get('https://api.spotify.com/v1/me/tracks', {
      headers: { Authorization: `Bearer ${accessToken}` },
    });
    return response.data.items;
  } catch (error) {
    console.error('Error fetching saved tracks:', error);
    throw error;
  }
};

module.exports = {
  getSavedTracks,
  // Other controller functions related to Spotify integration
};
