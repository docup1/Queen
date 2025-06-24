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
                            От оперного размаха «Bohemian Rhapsody» до стадионного гимна «We Will Rock You» —
                            каждая песня была актом творческого
                            <span className="highlight-purple">бунта</span> против
                            музыкальных условностей.
                        </p>

                        <p className="about-paragraph">
                            Музыка Queen — это
                            <span className="highlight-yellow"> бесстрашный синтез</span>
                            стилей: глэм-рок, прогрессив, хэви-метал, диско и даже регги.
                            Каждый альбом — это новое музыкальное приключение,
                            где нет границ между жанрами.
                        </p>

                        <p className="about-paragraph">
                            <strong>Фредди Меркьюри</strong>, с его четырёхоктавным диапазоном и сценическим магнетизмом,
                            стал символом артистической свободы. Его тексты и образы бросали вызов
                            стереотипам и вдохновляли миллионы.
                        </p>

                        <p className="about-paragraph secondary">
                            <strong>Брайан Мэй</strong>, астрофизик и виртуоз гитары, создал
                            уникальное звучание при помощи самодельной гитары «Red Special».
                            Его гитарные соло стали неотъемлемой частью фирменного стиля группы.
                        </p>

                        <p className="about-paragraph secondary">
                            <strong>Роджер Тейлор</strong> и <strong>Джон Дикон</strong> —
                            ритмический фундамент коллектива. Ударные и бас партии Queen были
                            не просто фоном, а полноправными голосами в музыкальном повествовании.
                        </p>

                        <div className="quote-block">
                            <p className="quote-text">
                                «Я хочу, чтобы люди знали, что мы не боимся экспериментировать»
                            </p>
                            <p className="quote-author">— Фредди Меркьюри</p>
                        </div>

                        <p className="about-paragraph">
                            Они были первыми, кто превратил видеоклипы в искусство, чьё живое выступление на
                            Live Aid в 1985 году до сих пор считается величайшим в истории.
                        </p>

                        <p className="about-paragraph">
                            Сегодня Queen — это не просто память о великом, это живое
                            <span className="highlight-purple">наследие</span>, которое продолжает вдохновлять
                            новые поколения музыкантов и слушателей по всему миру.
                        </p>
                    </div>

                    <div className="about-info">
                        <div className="year-background">1970</div>
                        <div className="info-card">
                            <h3 className="info-title">РОЖДЕНИЕ ЛЕГЕНДЫ</h3>
                            <p className="info-text">
                                Лондон, 1970 год. Четыре музыканта решили создать что-то
                                <span className="highlight-red"> невозможное</span>.
                                Рок-опера встретилась с хард-роком, классика — с авангардом,
                                а театральность — с искренностью. Так родилась группа, имя которой стало
                                синонимом новаторства.
                            </p>
                        </div>

                        <div className="info-card">
                            <h3 className="info-title">ИСТОРИЧЕСКИЙ УСПЕХ</h3>
                            <p className="info-text">
                                Альбом «A Night at the Opera» (1975) стал прорывом: сложная структура,
                                драматизм и «Bohemian Rhapsody» — песня, которая нарушила все правила».
                                Радиостанции сначала отказывались её крутить, но публика влюбилась мгновенно.
                            </p>
                        </div>

                        <div className="info-card">
                            <h3 className="info-title">НАСЛЕДИЕ</h3>
                            <p className="info-text">
                                После смерти Фредди в 1991 году музыка Queen не ушла в тень. Их песни продолжают
                                звучать в фильмах, на аренах и в сердцах слушателей. Турне с Адамом Ламбертом
                                стало новой главой, подтверждающей бессмертие их искусства.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutSection;
