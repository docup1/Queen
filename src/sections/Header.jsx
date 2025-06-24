import React from 'react';
import InteractiveTitle from '../components/InteractiveTitle';
import TypewriterText from '../components/TypewriterText';

const Header = ({ mousePosition }) => {
    return (
        <header className="header">
            <div className="header-background" />

            <div className="header-content">
                <InteractiveTitle mousePosition={mousePosition}>
                    <h1 className="main-title">QUEEN</h1>
                </InteractiveTitle>

                <div className="subtitle">
                    <TypewriterText
                        text="КОРОЛИ РОКА • ЛЕГЕНДЫ МУЗЫКИ • НАВСЕГДА В НАШИХ СЕРДЦАХ"
                        speed={80}
                    />
                </div>

                <div className="members">
                    Фредди Меркьюри • Брайан Мэй • Роджер Тейлор • Джон Дикон
                </div>
            </div>

            <div className="scroll-indicator">
                <div className="scroll-indicator-container">
                    <div className="scroll-indicator-dot" />
                </div>
            </div>
        </header>
    );
};

export default Header;
