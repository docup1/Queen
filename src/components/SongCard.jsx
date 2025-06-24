import React from 'react';

const SongCard = ({ song, onClick }) => {
    const getEmotionClass = (emotion) => {
        return `song-title song-${emotion}`;
    };

    return (
        <div className="song-card" onClick={onClick}>
            <div className="song-header">
                <h3 className={getEmotionClass(song.emotion)}>
                    {song.title}
                </h3>
                <p className="song-year">{song.year}</p>
            </div>

            <div className="song-preview">
                <p className="preview-text">
                    {song.preview}...
                </p>
                <div className="read-more">
                    Нажмите, чтобы прочитать полный текст →
                </div>
            </div>
        </div>
    );
};

export default SongCard;