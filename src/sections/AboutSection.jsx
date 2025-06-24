import React from 'react';

const AboutSection = () => {
    return (
        <section className="about-section">
            <div className="container">
                <h2 className="section-title">
                    <span className="gradient-text">ВЕЛИЧИЕ</span>
                </h2>

                <div className="about-grid">
                    <div className="about-text">
                        <p className="about-paragraph">
                            Четыре человека изменили мир музыки навсегда.
                            <span className="highlight-yellow"> Queen</span> —
                            это не просто группа, это
                            <span className="highlight-red"> революция</span>,
                            облачённая в звук.
                        </p>

                        <p className="about-paragraph secondary">
                            От оперного размаха "Bohemian Rhapsody" до стадионного гимна "We Will Rock You" —
                            каждая песня была актом творческого
                            <span className="highlight-purple">бунта</span> против
                            музыкальных условностей.
                        </p>

                        <div className="quote-block">
                            <p className="quote-text">
                                "Я хочу, чтобы люди знали, что мы не боимся экспериментировать"
                            </p>
                            <p className="quote-author">— Фредди Меркьюри</p>
                        </div>
                    </div>

                    <div className="about-info">
                        <div className="year-background">1970</div>
                        <div className="info-card">
                            <h3 className="info-title">РОЖДЕНИЕ ЛЕГЕНДЫ</h3>
                            <p className="info-text">
                                Лондон, 1970 год. Четыре музыканта решили создать что-то
                                <span className="highlight-red"> невозможное</span>.
                                Рок-опера встретилась с хард-роком, классика — с авангардом,
                                а театральность — с искренностью.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutSection;