import React, { useState, useEffect, useRef } from 'react';
import '../styles/TimelineQeen.css';

// TimelineQueen.jsx — обновлённая версия
// Исправления:
// 1) При нажатии "Подробнее" детали теперь ДОБАВЛЯЮТСЯ в архив (append), а не заменяют содержимое.
//    Можно открывать несколько карточек подряд; есть кнопки удаления и очистки.
// 2) Добавлен inline-аккордеон (Развернуть/Свернуть) — чтобы читать части прямо в таймлайне.
// 3) Стилистика усилена и привязана к образу Queen: золотая палитра, шрифты, корона, цитаты, бархатный фон — теперь компонент однозначно "королевский".

const TimelineQueen = ({ mousePosition }) => {
    const [activeYear, setActiveYear] = useState(1975);
    const [openedDetails, setOpenedDetails] = useState([]); // массив объектов событий, которые были "добавлены"
    const [expandedYears, setExpandedYears] = useState(new Set());
    const containerRef = useRef(null);

    const timelineData = [
        {
            year: 1970,
            title: 'РОЖДЕНИЕ ЛЕГЕНДЫ',
            subtitle: 'Первый шаг на пути к бессмертию',
            description: `В 1970 году четыре британца — Фредди, Брайан, Джон и Роджер — свернули в непроторенную дорогу. Они смешали глам-рок, оперную драматичность и театральность в звук, которого мир ещё не слышал. Это не просто формирование группы — это рождение сценического монстра, который в будущем зажжёт стадионы искрами и коронами.`,
            color: 'purple',
            icon: '👑',
        },
        {
            year: 1973,
            title: 'ПЕРВЫЙ АЛЬБОМ',
            subtitle: 'От студии к культу',
            description: `Дебютный альбом был как выстрел — сыро, честно и амбициозно. В нём слышны стремления и эксперименты: вокальная широта Фредди, гитарные и оркестровые амбиции Брайана, харизма и энергия ритм-секции. Это начало формирования узнаваемого знака качества — те самые драматические развязки и гармонии, которые позднее станут фирменным стилем.`,
            color: 'yellow',
            icon: '🎙️',
        },
        {
            year: 1975,
            title: 'BOHEMIAN RHAPSODY',
            subtitle: 'Рок-опера, изменившая правила',
            description: `«Bohemian Rhapsody» — это не просто песня; это театральный фейерверк, сочинённый и представленный как мини-опера. Комбинация классической гармонии, роковой жестокости и поп-элегантности вывела группу в другую лигу. Клип и продюсирование сделали композицию культурным событием: она ломает границы жанров, играет с ожиданиями и создаёт чувство грандиозности.`,
            color: 'red',
            icon: '🎭',
        },
        {
            year: 1985,
            title: 'LIVE AID',
            subtitle: 'Триумф сердца и сценического гения',
            description: `Выступление на Live Aid стало эталоном подачи: 20 минут чистого мастерства, где каждое движение — от солирующего гитарного риффа до зовного голоса Фредди — высекалось в памяти миллионов. Это было более чем концерт: это был акт единения, когда театр, рок и массовая культура слились в одно целое.`,
            color: 'blue',
            icon: '⚡',
        },
        {
            year: 1991,
            title: 'ПРОЩАНИЕ',
            subtitle: 'Конец эпохи и начало легенды',
            description: `Смерть Фредди — удар, который превратил группу в миф. Но наследие осталось: альбомы, концерты и тот самый образ — корона, сцена, свет прожекторов — всё это превратилось в вечный символ. Прощание здесь — не окончание, а ритуал перехода в бессмертие.`,
            color: 'purple',
            icon: '💫',
        },
    ];

    // Параллакс
    const style = mousePosition
        ? {
            transform: `translateX(${(mousePosition.x - window.innerWidth / 2) * 0.01}px) rotate(${(mousePosition.x - window.innerWidth / 2) * 0.002}deg)`,
        }
        : {};

    // Клавиатурная навигация
    useEffect(() => {
        const onKey = (e) => {
            const idx = timelineData.findIndex((t) => t.year === activeYear);
            if (e.key === 'ArrowRight') {
                const next = timelineData[Math.min(timelineData.length - 1, idx + 1)];
                if (next) setActiveYear(next.year);
            }
            if (e.key === 'ArrowLeft') {
                const prev = timelineData[Math.max(0, idx - 1)];
                if (prev) setActiveYear(prev.year);
            }
        };
        window.addEventListener('keydown', onKey);
        return () => window.removeEventListener('keydown', onKey);
    }, [activeYear]);

    // Добавить в архив (append) — избегаем дублирования
    function addToArchive(ev) {
        setActiveYear(ev.year);
        setOpenedDetails((prev) => {
            if (prev.some((p) => p.year === ev.year)) return prev;
            return [...prev, ev];
        });
        setExpandedYears((prev) => new Set(prev).add(ev.year));
    }

    function toggleInline(year) {
        setExpandedYears((prev) => {
            const next = new Set(prev);
            if (next.has(year)) next.delete(year);
            else next.add(year);
            return next;
        });
    }

    function removeFromArchive(year) {
        setOpenedDetails((prev) => prev.filter((p) => p.year !== year));
        setExpandedYears((prev) => {
            const next = new Set(prev);
            next.delete(year);
            return next;
        });
    }

    function clearArchive() {
        setOpenedDetails([]);
        setExpandedYears(new Set());
    }

    return (
        <section className="timeline-queen-section" aria-label="История Queen">
            <div className="crown-background" aria-hidden="true">
                {/* стилизованная корона */}
                <svg className="crown-svg" viewBox="0 0 800 480" preserveAspectRatio="xMidYMid meet" xmlns="http://www.w3.org/2000/svg">
                    <defs>
                        <radialGradient id="g" cx="50%" cy="30%">
                            <stop offset="0%" stopColor="#fff0a8" stopOpacity="0.95" />
                            <stop offset="100%" stopColor="#ffd54d" stopOpacity="0.12" />
                        </radialGradient>
                    </defs>
                    <g transform="translate(0,30)">
                        <path d="M80 300 L160 140 L240 300 L320 140 L400 300 L480 140 L560 300 L640 140 L720 300 L400 420 Z" fill="url(#g)" stroke="#ffd54d" strokeWidth="6" />
                    </g>
                </svg>
            </div>

            <div className="container">
                <h2 className="section-title">
                    <span className="gradient-text-timeline">ИСТОРИЯ</span>
                    <span className="subtitle-hero">— дикий пафос, искры, корона и вечная слава</span>
                </h2>

                <div className="timeline-container" style={style} ref={containerRef}>
                    <div className="timeline-line"></div>

                    {timelineData.map((event) => {
                        const isActive = activeYear === event.year;
                        return (
                            <article
                                key={event.year}
                                className={`timeline-event timeline-${event.color} ${isActive ? 'active' : ''}`}
                                onClick={() => setActiveYear(event.year)}
                                tabIndex={0}
                                aria-current={isActive}
                            >
                                <div className="timeline-pin" role="button" aria-label={`Перейти к ${event.year}`}>
                                    <div className="timeline-year">{event.year}</div>
                                    <div className="timeline-icon" aria-hidden="true">{event.icon}</div>
                                </div>

                                <div className="timeline-content">
                                    <h3 className="timeline-title">{event.title}</h3>
                                    <div className="timeline-subtitle">{event.subtitle}</div>

                                    <p className={`timeline-description ${expandedYears.has(event.year) ? 'expanded' : 'collapsed'}`}>
                                        {event.description}
                                    </p>

                                    <div className="timeline-actions">
                                        <button className="btn-readmore" onClick={(e) => { e.stopPropagation(); addToArchive(event); }}>
                                            Подробнее
                                        </button>

                                        <button
                                            className="btn-toggle"
                                            onClick={(e) => {
                                                e.stopPropagation();
                                                toggleInline(event.year);
                                            }}
                                            aria-pressed={expandedYears.has(event.year)}
                                        >
                                            {expandedYears.has(event.year) ? 'Свернуть' : 'Развернуть'}
                                        </button>
                                    </div>
                                </div>

                                <div className={`sparkles ${isActive ? 'active' : ''}`} aria-hidden="true">
                                    <span className="spark"></span>
                                    <span className="spark"></span>
                                    <span className="spark"></span>
                                </div>
                            </article>
                        );
                    })}
                </div>

                {/* === ARCHIVE: добавляем содержимое по кнопке "Подробнее" (append) === */}
                <div className="timeline-archive" aria-live="polite">
                    <div className="archive-controls">
                        <div className="archive-count">Добавлено в ленту: <strong>{openedDetails.length}</strong></div>
                        <div className="archive-actions">
                            <button className="btn-clear" onClick={clearArchive} disabled={openedDetails.length === 0}>Очистить всё</button>
                        </div>
                    </div>

                    <div className="archive-list">
                        {openedDetails.length === 0 && (
                            <div className="archive-empty">Ни одного раскрытого события — нажмите «Подробнее», чтобы собрать хронологию сценических триумфов.</div>
                        )}

                        {openedDetails.map((ev) => (
                            <article key={ev.year} className="archive-card">
                                <button className="archive-remove" aria-label={`Удалить ${ev.year}`} onClick={() => removeFromArchive(ev.year)}>✕</button>
                                <div className="archive-head">
                                    <h4 className="archive-title">{ev.title} <span className="archive-year">{ev.year}</span></h4>
                                    <div className="archive-sub">{ev.subtitle}</div>
                                </div>
                                <p className="archive-body">{ev.description}</p>
                                <div className="archive-legacy">
                                    <div className="legacy-block">
                                        <div className="legacy-label">Культурное значение</div>
                                        <div className="legacy-value">Этот момент формирует узнаваемый язык группы — сценические приёмы, гармонии и визуальные решения, которые копируются десятилетиями.</div>
                                    </div>
                                </div>
                            </article>
                        ))}
                    </div>
                </div>
            </div>

            {/* particles */}
            <div className="particles-container" aria-hidden="true">
                {Array.from({ length: 16 }).map((_, i) => (
                    <span key={i} className={`particle p-${i}`}></span>
                ))}
            </div>
        </section>
    );
};

export default TimelineQueen;

