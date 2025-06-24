import React, { useState, useEffect } from 'react';

const TimelineSection = ({ mousePosition }) => {
    const [activeYear, setActiveYear] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [hoveredYear, setHoveredYear] = useState(null);

    const timelineData = [
        {
            year: 1970,
            title: "РОЖДЕНИЕ ЛЕГЕНДЫ",
            description: "Формирование группы Queen в Лондоне",
            detailedDescription: "В 1970 году студенты Имперского колледжа Лондона Брайан Мэй и Роджер Тейлор встретили Фаррука Булсару (будущего Фредди Меркьюри). Так началась история одной из величайших рок-групп всех времен.",
            color: "purple",
            icon: "👑",
            bgGradient: "from-purple-900 via-purple-700 to-pink-600",
            atmosphere: "Лондонские студенческие общежития, первые репетиции в гараже, запах старых усилителей и мечты о славе...",
            quote: "\"Мы хотели создать что-то новое, что-то грандиозное\" - Брайан Мэй",
            facts: [
                "Первое название группы было 'Smile'",
                "Фредди предложил название 'Queen'",
                "Первая репетиция прошла в гараже Роджера"
            ]
        },
        {
            year: 1973,
            title: "ПЕРВЫЙ АЛЬБОМ",
            description: "Выход дебютного альбома Queen",
            detailedDescription: "Дебютный альбом Queen был записан на студии Trident Studios. Альбом продемонстрировал уникальный стиль группы, сочетающий хард-рок с театральностью.",
            color: "yellow",
            icon: "🎵",
            bgGradient: "from-yellow-600 via-orange-500 to-red-500",
            atmosphere: "Звуки студии звукозаписи, первые профессиональные записи, волнение от создания чего-то вечного...",
            quote: "\"Мы знали, что создаем историю\" - Роджер Тейлор",
            facts: [
                "Альбом записывался 8 месяцев",
                "Использовались революционные студийные техники",
                "Обложка создана Фредди Меркьюри"
            ]
        },
        {
            year: 1975,
            title: "BOHEMIAN RHAPSODY",
            description: "Революционная рок-опера покоряет мир",
            detailedDescription: "6-минутная эпическая композиция без припева изменила представление о том, что может быть хитом. Революционное видео стало прообразом современных музыкальных клипов.",
            color: "red",
            icon: "🎭",
            bgGradient: "from-red-800 via-pink-600 to-purple-700",
            atmosphere: "Студия Rockfield, бесконечные дни записи, магия создания шедевра, который изменит музыку навсегда...",
            quote: "\"Это не песня, это маленькая опера\" - Фредди Меркьюри",
            facts: [
                "Записывалась 3 недели",
                "180 вокальных наложений",
                "Первое промо-видео в истории рока"
            ]
        },
        {
            year: 1985,
            title: "LIVE AID",
            description: "Легендарное выступление на стадионе Уэмбли",
            detailedDescription: "20 минут, которые изменили все. Выступление Queen на Live Aid считается одним из величайших рок-концертов в истории. 72,000 зрителей на Уэмбли и 1.9 миллиарда телезрителей по всему миру.",
            color: "blue",
            icon: "⚡",
            bgGradient: "from-blue-900 via-blue-600 to-cyan-400",
            atmosphere: "Стадион Уэмбли, 72 тысячи голосов поют в унисон, электричество в воздухе, момент абсолютного триумфа...",
            quote: "\"Фредди владел той толпой с первой секунды\" - Дэвид Боуи",
            facts: [
                "1.9 миллиарда телезрителей",
                "Сбор средств для Африки",
                "20 минут чистой магии"
            ]
        },
        {
            year: 1991,
            title: "ПРОЩАНИЕ",
            description: "Фредди Меркьюри покидает этот мир",
            detailedDescription: "24 ноября 1991 года мир потерял одного из величайших вокалистов в истории. Фредди Меркьюри ушел, но его музыка и дух продолжают вдохновлять миллионы.",
            color: "purple",
            icon: "💫",
            bgGradient: "from-purple-900 via-indigo-800 to-blue-900",
            atmosphere: "Тишина студий, воспоминания о голосе, который больше никогда не зазвучит, но эхо которого будет жить вечно...",
            quote: "\"Show must go on\" - последние слова Фредди",
            facts: [
                "45 лет жизни",
                "Легенда, ставшая бессмертной",
                "Музыка, которая живет вечно"
            ]
        }
    ];

    const openModal = (year) => {
        setActiveYear(year);
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
        setActiveYear(null);
    };

    const activeEvent = timelineData.find(event => event.year === activeYear);

    const style = mousePosition ? {
        transform: `translateX(${mousePosition.x * 0.003}px) rotateY(${mousePosition.x * 0.01}deg)`,
    } : {};

    useEffect(() => {
        if (isModalOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isModalOpen]);

    return (
        <>
            <section className="min-h-screen bg-black text-white py-20 relative overflow-hidden">
                {/* Animated background */}
                <div className="absolute inset-0 opacity-20">
                    <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-purple-900/30 via-transparent to-yellow-900/30 animate-pulse"></div>
                    <div className="absolute top-1/4 right-0 w-96 h-96 bg-gradient-radial from-red-500/20 to-transparent rounded-full blur-3xl animate-bounce"></div>
                    <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-gradient-radial from-blue-500/20 to-transparent rounded-full blur-3xl animate-pulse"></div>
                </div>

                <div className="container mx-auto px-6 relative z-10">
                    <h2 className="text-6xl font-bold text-center mb-20">
                        <span className="bg-gradient-to-r from-yellow-400 via-red-500 to-purple-600 bg-clip-text text-transparent animate-pulse">
                            ИСТОРИЯ QUEEN
                        </span>
                    </h2>

                    <div className="relative" style={style}>
                        {/* Timeline line */}
                        <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-purple-500 via-yellow-500 via-red-500 via-blue-500 to-purple-500 rounded-full shadow-lg shadow-purple-500/50"></div>

                        {timelineData.map((event, index) => (
                            <div
                                key={event.year}
                                className={`relative mb-20 ${index % 2 === 0 ? 'text-right pr-8' : 'text-left pl-8 ml-auto'} w-1/2`}
                                onMouseEnter={() => setHoveredYear(event.year)}
                                onMouseLeave={() => setHoveredYear(null)}
                            >
                                {/* Timeline dot */}
                                <div className={`absolute top-1/2 transform -translate-y-1/2 ${index % 2 === 0 ? '-right-6' : '-left-6'} w-12 h-12 rounded-full bg-gradient-to-r ${event.bgGradient} flex items-center justify-center text-2xl cursor-pointer transition-all duration-300 hover:scale-150 hover:rotate-12 shadow-2xl z-20`}
                                     onClick={() => openModal(event.year)}>
                                    {event.icon}
                                </div>

                                {/* Event card */}
                                <div className={`bg-gradient-to-br ${event.bgGradient} p-8 rounded-2xl cursor-pointer transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/25 transform hover:-translate-y-2 ${hoveredYear === event.year ? 'animate-pulse' : ''} border border-white/20 backdrop-blur-sm`}
                                     onClick={() => openModal(event.year)}>
                                    <div className="flex items-center gap-4 mb-4">
                                        <span className="text-4xl">{event.icon}</span>
                                        <div className="text-3xl font-bold text-yellow-300 drop-shadow-lg">
                                            {event.year}
                                        </div>
                                    </div>
                                    <h3 className="text-2xl font-bold mb-3 text-white drop-shadow-lg">
                                        {event.title}
                                    </h3>
                                    <p className="text-lg text-white/90 leading-relaxed">
                                        {event.description}
                                    </p>
                                    <div className="mt-4 text-yellow-300 font-semibold hover:text-yellow-100 transition-colors">
                                        Нажмите для подробностей →
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Floating musical notes animation */}
                <div className="absolute inset-0 pointer-events-none">
                    {[...Array(5)].map((_, i) => (
                        <div
                            key={i}
                            className="absolute text-yellow-400/30 text-4xl animate-bounce"
                            style={{
                                left: `${Math.random() * 100}%`,
                                top: `${Math.random() * 100}%`,
                                animationDelay: `${Math.random() * 2}s`,
                                animationDuration: `${3 + Math.random() * 2}s`
                            }}
                        >
                            ♪
                        </div>
                    ))}
                </div>
            </section>

            {/* Modal */}
            {isModalOpen && activeEvent && (
                <div className="fixed inset-0 z-50 flex items-center justify-center">
                    {/* Backdrop */}
                    <div
                        className="absolute inset-0 bg-black/80 backdrop-blur-md"
                        onClick={closeModal}
                    ></div>

                    {/* Modal content */}
                    <div className={`relative max-w-4xl mx-4 bg-gradient-to-br ${activeEvent.bgGradient} rounded-3xl overflow-hidden shadow-2xl transform transition-all duration-500 scale-100 animate-pulse-slow border border-white/30`}>
                        {/* Close button */}
                        <button
                            onClick={closeModal}
                            className="absolute top-6 right-6 w-12 h-12 bg-black/50 hover:bg-black/70 rounded-full flex items-center justify-center text-white text-2xl transition-all duration-300 hover:rotate-90 z-10"
                        >
                            ×
                        </button>

                        {/* Header */}
                        <div className="p-8 pb-4">
                            <div className="flex items-center gap-6 mb-6">
                                <div className="text-6xl animate-bounce">
                                    {activeEvent.icon}
                                </div>
                                <div>
                                    <div className="text-5xl font-bold text-yellow-300 drop-shadow-lg mb-2">
                                        {activeEvent.year}
                                    </div>
                                    <h2 className="text-3xl font-bold text-white drop-shadow-lg">
                                        {activeEvent.title}
                                    </h2>
                                </div>
                            </div>
                        </div>

                        {/* Content */}
                        <div className="px-8 pb-8 space-y-6">
                            {/* Atmosphere section */}
                            <div className="bg-black/30 p-6 rounded-2xl border border-white/20">
                                <h3 className="text-xl font-bold text-yellow-300 mb-3 flex items-center gap-2">
                                    🎭 Атмосфера
                                </h3>
                                <p className="text-white/90 italic leading-relaxed text-lg">
                                    {activeEvent.atmosphere}
                                </p>
                            </div>

                            {/* Description */}
                            <div className="bg-black/30 p-6 rounded-2xl border border-white/20">
                                <h3 className="text-xl font-bold text-yellow-300 mb-3 flex items-center gap-2">
                                    📖 История
                                </h3>
                                <p className="text-white text-lg leading-relaxed mb-4">
                                    {activeEvent.detailedDescription}
                                </p>
                            </div>

                            {/* Quote */}
                            <div className="bg-black/30 p-6 rounded-2xl border border-white/20">
                                <h3 className="text-xl font-bold text-yellow-300 mb-3 flex items-center gap-2">
                                    💬 Цитата
                                </h3>
                                <blockquote className="text-white/90 text-xl italic leading-relaxed border-l-4 border-yellow-300 pl-4">
                                    {activeEvent.quote}
                                </blockquote>
                            </div>

                            {/* Facts */}
                            <div className="bg-black/30 p-6 rounded-2xl border border-white/20">
                                <h3 className="text-xl font-bold text-yellow-300 mb-4 flex items-center gap-2">
                                    ⚡ Интересные факты
                                </h3>
                                <div className="grid gap-3">
                                    {activeEvent.facts.map((fact, index) => (
                                        <div key={index} className="flex items-start gap-3">
                                            <span className="text-yellow-300 text-xl">•</span>
                                            <span className="text-white text-lg">{fact}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Decorative elements */}
                        <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-radial from-white/20 to-transparent rounded-full blur-2xl"></div>
                        <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-radial from-yellow-400/30 to-transparent rounded-full blur-xl"></div>
                    </div>
                </div>
            )}


        </>
    );
};

export default TimelineSection;