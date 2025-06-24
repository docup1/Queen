import React from 'react';

const LegacySection = () => {
    const stats = [
        { number: "15", label: "студийных альбомов", color: "yellow" },
        { number: "300М+", label: "проданных пластинок", color: "red" },
        { number: "∞", label: "влияние на музыку", color: "blue" }
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

                    <div className="legacy-quote">
                        <p className="final-quote">
                            «Шоу должно продолжаться...»
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default LegacySection;
