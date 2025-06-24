import React from 'react';

const LyricsModal = ({ song, onClose }) => {
    const getEmotionClass = (emotion) => {
        return `modal-title song-${emotion}`;
    };

    return (
        <div className="modal-overlay" onClick={onClose}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                <div className="modal-header">
                    <div className="modal-song-info">
                        <h3 className={getEmotionClass(song.emotion)}>
                            {song.title}
                        </h3>
                        <p className="modal-year">{song.year}</p>
                    </div>
                    <button className="modal-close" onClick={onClose}>
                        ×
                    </button>
                </div>

                <div className="modal-lyrics">
                    {song.lyrics.split('\n').map((line, index) => (
                        <p key={index} className="lyrics-line">
                            {line}
                        </p>
                    ))}
                </div>

                <div className="modal-footer">
                    <p className="translation-note">
                        Перевод на русский язык для демонстрации
                    </p>
                </div>
            </div>
        </div>
    );
};

export default LyricsModal;