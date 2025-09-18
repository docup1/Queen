import React, { useState, useEffect, useRef } from 'react';
import Header from './sections/Header';
import AboutSection from './sections/AboutSection';
import SongsSection from './sections/SongsSection';
import LegacySection from './sections/LegacySection';
import Footer from './sections/Footer';
import LyricsModal from './components/LyricsModal';
import MouseCursor from './components/MouseCursor';
import { songsData } from './data/songsData';
import './styles/App.css';
import TimelineSection from "./sections/TimelineSection";
import AchievementsSection from "./sections/AchievementsSection";

const App = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [showLyrics, setShowLyrics] = useState(false);
  const [selectedSong, setSelectedSong] = useState(null);
  const [isScrolling, setIsScrolling] = useState(false);
  const scrollTimeoutRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    const handleScroll = () => {
      setIsScrolling(true);
      clearTimeout(scrollTimeoutRef.current);
      scrollTimeoutRef.current = setTimeout(() => {
        setIsScrolling(false);
      }, 150);
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('scroll', handleScroll);
      clearTimeout(scrollTimeoutRef.current);
    };
  }, []);

  const handleSongClick = (song) => {
    setSelectedSong(song);
    setShowLyrics(true);
  };

  const closeLyrics = () => {
    setShowLyrics(false);
    setSelectedSong(null);
  };

  return (
      <div className="app">
        <MouseCursor
            position={mousePosition}
            isScrolling={isScrolling}
        />

        <Header mousePosition={mousePosition} />
          <TimelineSection />
        <AboutSection />
        <AchievementsSection/>


        <LegacySection />

        <Footer />

        {showLyrics && selectedSong && (
            <LyricsModal
                song={selectedSong}
                onClose={closeLyrics}
            />
        )}
      </div>
  );
};

export default App;