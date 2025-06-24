import React, { useState } from 'react';
import SongCard from '../components/SongCard';
import SongModal from '../components/SongModal';

const SongsSection = ({ songs }) => {
    const [selectedSong, setSelectedSong] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleSongClick = (song) => {
        setSelectedSong(song);
        setIsModalOpen(true);
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
        setSelectedSong(null);
    };

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
                            onClick={handleSongClick}
                        />
                    ))}
                </div>
            </div>

            <SongModal
                song={selectedSong}
                isOpen={isModalOpen}
                onClose={handleCloseModal}
            />
        </section>
    );
};

export default SongsSection;
