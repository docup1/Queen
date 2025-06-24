import React, { useEffect, useRef } from 'react';
import InteractiveTitle from '../components/InteractiveTitle';
import TypewriterText from '../components/TypewriterText';

const Header = ({ mousePosition }) => {
    const particlesRef = useRef(null);

    useEffect(() => {
        const createParticles = () => {
            const container = particlesRef.current;
            if (!container) return;

            // Очищаем существующие частицы
            container.innerHTML = '';

            // Создаем частицы
            for (let i = 0; i < 50; i++) {
                const particle = document.createElement('div');
                particle.className = 'particle';

                // Случайная позиция
                particle.style.left = Math.random() * 100 + '%';
                particle.style.top = Math.random() * 100 + '%';

                // Случайная задержка анимации
                particle.style.animationDelay = Math.random() * 10 + 's';

                // Случайная продолжительность анимации
                particle.style.animationDuration = (Math.random() * 3 + 2) + 's';

                container.appendChild(particle);
            }
        };

        createParticles();
    }, []);

    return (
        <header className="header">
            <div className="header-background" />

            {/* Корона на фоне */}
            <div className="crown-background">
                <svg className="crown-svg" viewBox="0 0 200 120" fill="none">
                    <path
                        d="M20 100 L40 60 L60 80 L100 20 L140 80 L160 60 L180 100 Z"
                        fill="rgba(255, 215, 0, 0.1)"
                        stroke="rgba(255, 215, 0, 0.3)"
                        strokeWidth="2"
                    />
                    <circle cx="40" cy="60" r="8" fill="rgba(255, 0, 0, 0.2)" />
                    <circle cx="100" cy="20" r="12" fill="rgba(255, 0, 0, 0.2)" />
                    <circle cx="160" cy="60" r="8" fill="rgba(255, 0, 0, 0.2)" />
                    <rect x="15" y="100" width="170" height="15" fill="rgba(255, 215, 0, 0.15)" />
                </svg>
            </div>

            {/* Летающие частицы */}
            <div ref={particlesRef} className="particles-container"></div>

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