import React from "react";
import './ProfileItems.css'
import TimeSVG from '../../assets/time.svg'
import VacationSVG from '../../assets/vacation.svg'
import EducationSVG from '../../assets/education.svg'
import LanguagePNG from '../../assets/language.png'
import MoodPNG from '../../assets/mood.png'

function ProfileItems() {
    return (
        <section className="items">
            <div className="items-card">
                <h3 className="items-card-title">
                    Разом з ViOil
                </h3>
                <img src={TimeSVG} alt="Time" className="items-card-icon"/>
                <p className="items-card-icon_title">
                    11 місяців
                </p>
            </div>
            <div className="items-card">
                <h3 className="items-card-title">
                    Відпустка
                </h3>
                <img src={VacationSVG} alt="Vacation" className="items-card-icon"/>
                <p className="items-card-icon_title">
                    21 день
                </p>
                <p className="items-card-description">
                    доступно для відпустки
                </p>
                <button className="items-card-button">
                    Додати відпустку
                </button>
            </div>
            <div className="items-card">
                <h3 className="items-card-title">
                    Освіта
                </h3>
                <img src={EducationSVG} alt="Education" className="items-card-icon"/>
                <p className="items-card-icon_title">
                    Магістр
                </p>
                <p className="items-card-description">
                    економічна кібернетика
                </p>
                <div className="items-card-education_info">
                    <p className="items-card-education_info-text">
                        2015 <br/>
                        <span>
                            рік отримання
                        </span>
                    </p>
                    <hr/>
                    <p className="items-card-education_info-text">
                        1 <br/>
                        <span>
                            кількість
                        </span>
                    </p>
                </div>
            </div>
            <div className="items-card">
                <h3 className="items-card-title">
                    Контактні дані
                </h3>
                <p className="items-card-contact">
                    380984476311 <br/>
                    <span>
                        номер мобільного телефону
                    </span>
                </p>
                <p className="items-card-contact">
                    sv.donchuk@vioil.com <br/>
                    <span>
                        корпоративна пошта
                    </span>
                </p>
                <p className="items-card-contact">
                    15.03.1995 <br/>
                    <span>
                        дата народження
                    </span>
                </p>
            </div>
            <div className="items-card" style={{justifyContent: "space-between"}}>
                <h3 className="items-card-title">
                    Відділ роботи
                </h3>
                <p className="items-card-icon_title">
                    економіки та виробництва
                </p>
                <p className="items-card-teacher">
                    Демянчук Я. В. <br/>
                    <span>
                        керівник відділу
                    </span>
                </p>
            </div>
            <div className="items-card">
                <h3 className="items-card-title">
                    Іноземна мова
                </h3>
                <img src={LanguagePNG} alt="Language" className="items-card-icon"/>
                <p className="items-card-icon_title">
                    Англійська: В1
                </p>
                <p className="items-card-description">
                    від 15 Червня 2021 року
                </p>
            </div>
            <div className="items-card" style={{justifyContent: "space-between"}}>
                <h3 className="items-card-title">
                    Настрій
                </h3>
                <img src={MoodPNG} alt="Mood" className="items-card-icon"/>
                <p className="items-card-description">
                    підтверджено 10 годин тому
                </p>
            </div>
            <div className="items-card">
                <h3 className="items-card-title">
                    Місце роботи
                </h3>
                <div className="items-card-list">
                    <div className="items-card-list-item">
                        <div className="items-card-list-item-point"/>
                        <p className="items-card-list-item-title">
                            На підприємстві
                        </p>
                    </div>
                    <div className="items-card-list-item">
                        <div className="items-card-list-item-point"/>
                        <p className="items-card-list-item-title">
                            Вдома
                        </p>
                    </div>
                </div>
                <button className="items-card-button">
                    Підтвердити
                </button>
                <p className="items-card-description">
                    підтверджено 5 годин тому
                </p>
            </div>
        </section>
    )
}

export default ProfileItems