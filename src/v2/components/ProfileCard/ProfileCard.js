import React from "react";
import './ProfileCard.css'
import CardPhoto from '../../assets/cardPhoto.png'
import LocationSVG from '../../assets/locationIcon.svg'

function ProfileCard() {
    return (
        <section className="card">
            <img src={CardPhoto} alt="Card photo" className="card-photo"/>
            <div className="card-info">
                <h2 className="card-info-name">
                    Світлана Дончук
                </h2>
                <p className="card-info-role">
                    молодший економіст
                </p>
                <div className="card-info-location">
                    <img src={LocationSVG} alt="Location"/>
                    <p>
                        Україна, Вінниця, Немирівське шосе, 26
                    </p>
                </div>
            </div>
        </section>
    )
}

export default ProfileCard