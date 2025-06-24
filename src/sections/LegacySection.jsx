import React from 'react';

const LegacySection = () => {
    const stats = [
        { number: "15", label: "студийных альбомов", color: "yellow" },
        { number: "300М+", label: "проданных пластинок", color: "red" },
        { number: "∞", label: "влияние на музыку", color: "blue" }
    ];

    const legacyFacts = [
        {
            title: "Зал славы рок-н-ролла",
            text: "Queen были введены в Зал славы рок-н-ролла в 2001 году.",
            icon: "🎸"
        },
        {
            title: "Гимны поколений",
            text: "Песни, такие как «We Are the Champions» и «Bohemian Rhapsody», стали гимнами нескольких поколений.",
            icon: "🎤"
        },
        {
            title: "Кино и культура",
            text: "Фильм «Bohemian Rhapsody» (2018) собрал миллионы зрителей и возродил интерес к группе.",
            icon: "🎬"
        }
    ];

    return (
        <section className="legacy-section">
            <div className="container">
                <h2 className="section-title">
                    <span className="gradient-text-legacy">НАСЛЕДИЕ</span>
                </h2>

                <div className="legacy-content">
                    <p className="legacy-main-text">
                        Фредди ушёл в 1991 году, но его голос звучит
                        <span className="eternal-text"> ВЕЧНО</span>
                    </p>

                    <div className="stats-grid">
                        {stats.map((stat, index) => (
                            <div key={index} className={`stat-card stat-${stat.color}`}>
                                <div className="stat-number">{stat.number}</div>
                                <p className="stat-label">{stat.label}</p>
                            </div>
                        ))}
                    </div>

                    <div className="legacy-description">
                        <p>
                            Вклад Queen невозможно переоценить: они расширили границы рока, привнесли оперные и театральные элементы в музыку,
                            а сценический образ Фредди стал иконой. Их творчество вдохновляет артистов по всему миру даже спустя десятилетия.
                        </p>
                    </div>

                    <div className="legacy-facts-grid">
                        {legacyFacts.map((fact, index) => (
                            <div key={index} className="legacy-fact-card">
                                <div className="fact-icon">{fact.icon}</div>
                                <h3 className="fact-title">{fact.title}</h3>
                                <p className="fact-text">{fact.text}</p>
                            </div>
                        ))}
                    </div>

                    <div className="legacy-quote">
                        <p className="final-quote">
                            <span className="quote-mark">«</span>
                            Шоу должно продолжаться...
                            <span className="quote-mark">»</span>
                        </p>
                        <p className="quote-author">— Queen, 1991</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default LegacySection;
