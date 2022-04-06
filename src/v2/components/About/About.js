import React from "react";
import './About.css'

function About() {
    return (
        <section id="about" className="about_v2">
            <div className="about_v2-image_wrapper">
                <h2 className="about_v2-image_wrapper-title">
                    Вас вітає ПГ ViOil
                </h2>
                <a href={'#'} className="about_v2-image_wrapper-button">
                    Дізнатись більше
                </a>
            </div>
            <div className="about_v2-info">
                <h3 className="about_v2-info-title">
                    ПГ ViOil - один з найпотужніших виробників рослинних олій в Україні
                </h3>
                <div className="about_v2-info-list">
                    <div className="about_v2-info-list-item">
                        <p className="about_v2-info-list-item-title">
                            Номер 1
                        </p>
                        <p className="about_v2-info-list-item-description">
                            в Україні з виробництва та експорту високоолеїнової соняшникової олії
                        </p>
                    </div>
                    <div className="about_v2-info-list-item">
                        <p className="about_v2-info-list-item-title">
                            250 т на добу
                        </p>
                        <p className="about_v2-info-list-item-description">
                            потужність виробництва пелет з лушпиння соняшника
                        </p>
                    </div>
                    <div className="about_v2-info-list-item">
                        <p className="about_v2-info-list-item-title">
                            60 країн світу
                        </p>
                        <p className="about_v2-info-list-item-description">
                            потужність виробництва пелет з лушпиння соняшника
                        </p>
                    </div>
                    <div className="about_v2-info-list-item">
                        <p className="about_v2-info-list-item-title">
                            30 років досвіду
                        </p>
                        <p className="about_v2-info-list-item-description">
                            роботи на олієжировому ринку
                        </p>
                    </div>
                    <div className="about_v2-info-list-item">
                        <p className="about_v2-info-list-item-title">
                            ТОП-3
                        </p>
                        <p className="about_v2-info-list-item-description">
                            з виробництва соняшникової олії
                        </p>
                    </div>
                    <div className="about_v2-info-list-item">
                        <p className="about_v2-info-list-item-title">
                            400 000 т на рік
                        </p>
                        <p className="about_v2-info-list-item-description">
                            потужність виробництва олії рослинної
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About