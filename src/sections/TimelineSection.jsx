import React, { useState, useEffect } from 'react';
import SongsSection from "./SongsSection";

// Блок 1: Интерактивная временная шкала
const TimelineSection = ({ mousePosition }) => {
    const [activeYear, setActiveYear] = useState(1970);

    const timelineData = [
        {
            year: 1970,
            title: "РОЖДЕНИЕ ЛЕГЕНДЫ",
            description: "Формирование группы Queen в Лондоне",
            color: "purple",
            icon: "👑"
        },
        {
            year: 1973,
            title: "ПЕРВЫЙ АЛЬБОМ",
            description: "Выход дебютного альбома 'Queen'",
            color: "yellow",
            icon: "🎵"
        },
        {
            year: 1975,
            title: "BOHEMIAN RHAPSODY",
            description: "Революционная рок-опера покоряет мир",
            color: "red",
            icon: "🎭"
        },
        {
            year: 1985,
            title: "LIVE AID",
            description: "Легендарное выступление на стадионе Уэмбли",
            color: "blue",
            icon: "⚡"
        },
        {
            year: 1991,
            title: "ПРОЩАНИЕ",
            description: "Фредди Меркьюри покидает этот мир",
            color: "purple",
            icon: "💫"
        }
    ];

    const style = mousePosition ? {
        transform: `translateX(${mousePosition.x * 0.005}px)`,
    } : {};

    return (
        <section className="timeline-section">
            <div className="container">
                <h2 className="section-title">
                    <span className="gradient-text-timeline">ИСТОРИЯ</span>
                </h2>

                <div className="timeline-container" style={style}>
                    <div className="timeline-line"></div>

                    {timelineData.map((event) => (
                        <div
                            key={event.year}
                            className={`timeline-event ${activeYear === event.year ? 'active' : ''} timeline-${event.color}`}
                            onClick={() => setActiveYear(event.year)}
                        >
                            <div className="timeline-year">{event.year}</div>
                            <div className="timeline-icon">{event.icon}</div>
                            <div className="timeline-content">
                                <h3 className="timeline-title">{event.title}</h3>
                                <p className="timeline-description">{event.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default TimelineSection;
