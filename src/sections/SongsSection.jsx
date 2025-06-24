import React from 'react';
import SongCard from '../components/SongCard';

const SongsSection = ({ songs, onSongClick }) => {
    return (
        <section className="songs-section">
            <div className="container">
                <h2 className="section-title">
                    <span className="gradient-text-red">ШЕДЕВРЫ</span>
                </h2>

                <div className="songs-grid">
                    {songs.map((song, index) => (
                        <SongCard
                            key={index}
                            song={song}
                            onClick={() => onSongClick(song)}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default SongsSection;