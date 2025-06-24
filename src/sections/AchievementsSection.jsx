import React, { useState, useEffect } from 'react';

const AchievementsSection = () => {
    const [selectedCategory, setSelectedCategory] = useState('albums');

    const achievements = {
        albums: [
            { title: "A Night at the Opera", year: "1975", description: "Альбом с Bohemian Rhapsody", status: "Платиновый" },
            { title: "News of the World", year: "1977", description: "We Will Rock You & We Are the Champions", status: "Мультиплатиновый" },
            { title: "The Game", year: "1980", description: "Another One Bites the Dust", status: "Платиновый" }
        ],
        awards: [
            { title: "Rock and Roll Hall of Fame", year: "2001", description: "Введение в Зал славы рок-н-ролла", status: "Пожизненно" },
            { title: "Grammy Lifetime Achievement", year: "2018", description: "За вклад в музыкальную индустрию", status: "Особая награда" },
            { title: "UK Music Hall of Fame", year: "2004", description: "Первые участники британского зала славы", status: "Основатели" }
        ],
        records: [
            { title: "300+ млн альбомов", year: "Всё время", description: "Продано по всему миру", status: "Мировой рекорд" },
            { title: "Live Aid Performance", year: "1985", description: "Лучшее живое выступление в истории", status: "Легендарно" },
            { title: "Bohemian Rhapsody", year: "1975", description: "Самая продаваемая песня в UK", status: "№1 хит" }
        ]
    };

    const categories = [
        { key: 'albums', label: 'АЛЬБОМЫ', icon: '💿' },
        { key: 'awards', label: 'НАГРАДЫ', icon: '🏆' },
        { key: 'records', label: 'РЕКОРДЫ', icon: '📈' }
    ];

    return (
        <section className="achievements-section">
            <div className="container">
                <h2 className="section-title">
                    <span className="gradient-text-achievements">ДОСТИЖЕНИЯ</span>
                </h2>

                <div className="achievements-tabs">
                    {categories.map((category) => (
                        <button
                            key={category.key}
                            className={`achievement-tab ${selectedCategory === category.key ? 'active' : ''}`}
                            onClick={() => setSelectedCategory(category.key)}
                        >
                            <span className="tab-icon">{category.icon}</span>
                            <span className="tab-label">{category.label}</span>
                        </button>
                    ))}
                </div>

                <div className="achievements-grid">
                    {achievements[selectedCategory].map((achievement, index) => (
                        <div
                            key={index}
                            className="achievement-card"
                            style={{ animationDelay: `${index * 0.1}s` }}
                        >
                            <div className="achievement-header">
                                <div className="achievement-status">{achievement.status}</div>
                                <div className="achievement-year">{achievement.year}</div>
                            </div>
                            <h3 className="achievement-title">{achievement.title}</h3>
                            <p className="achievement-description">{achievement.description}</p>
                            <div className="achievement-shine"></div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default AchievementsSection;
