import React from 'react';

interface PlaylistProps {
  playlistId: string;
  playlistTitle: string;
}

const YoutubePlaylist: React.FC<PlaylistProps> = ({ playlistId, playlistTitle }) => {
  return (
    <div className="playlist-container" hidden={!playlistId ? true : undefined}>
      <h4>{ playlistTitle }</h4>
      <iframe
        width="100%"
        height="350"
        src={`https://www.youtube.com/embed?listType=playlist&list=${playlistId}`}
        frameBorder="0"
        allow="autoplay; encrypted-media"
        allowFullScreen
      ></iframe>

      <style jsx>{`
        .playlist-container {
          max-width: 720px;
          margin: 0 auto;
          text-align: center;
        }

        h1 {
          margin-bottom: 20px;
        }

        iframe {
          border-radius: 8px;
          box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
        }
      `}</style>
    </div>
  );
};

export default YoutubePlaylist;
