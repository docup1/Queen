// SongModal.js
import React from 'react';

const SongModal = ({ song, isOpen, onClose }) => {
    if (!isOpen || !song) return null;

    const handleOverlayClick = (e) => {
        if (e.target === e.currentTarget) {
            onClose();
        }
    };

    const getEmotionClass = (emotion) => {
        return `song-title song-${emotion}`;
    };

    return (
        <div className="modal-overlay" onClick={handleOverlayClick}>
            <div className="modal-content">
                <button className="modal-close" onClick={onClose}>
                    ×
                </button>

                <div className="modal-header">
                    <h2 className={getEmotionClass(song.emotion)}>
                        {song.title}
                    </h2>
                    <p className="song-year">{song.year}</p>
                </div>

                <div className="modal-body">
                    <div className="song-lyrics">
                        {song.lyrics ? (
                            <pre className="lyrics-text">{song.lyrics}</pre>
                        ) : (
                            <p className="no-lyrics">Текст песни недоступен</p>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SongModal;
