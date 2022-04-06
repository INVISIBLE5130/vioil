import React from "react";
import Header from "../../components/Header/Header";
import './Agroholding.css'
import {table} from "./constants";

function Agroholding() {
    const {header, body} = table
    return (
        <>
            <Header/>
            <section className="agroholding">
                <h1 className="agroholding-title">
                    Рейтинг агрохолденгів за кількістью землі
                </h1>
                <div className="agroholding-table">
                    <div className="agroholding-table-header">
                        {
                            header.map(item => (
                                    <p className="agroholding-table-header-item">
                                        {item}
                                    </p>
                                )
                            )
                        }
                    </div>
                    <div className="agroholding-table-body">
                        {
                            body.map(({description, image, amount}, i) => (
                                <div className="agroholding-table-body-item">
                                    <p className="agroholding-table-body-item-number">
                                        {i + 1}
                                    </p>
                                    <img src={image} alt="Company logo" className="agroholding-table-body-item-img src"/>
                                    <p className="agroholding-table-body-item-description">
                                        {description}
                                    </p>
                                    <p className="agroholding-table-body-item-amount">
                                        {amount}
                                    </p>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </section>
        </>
    )
}

export default Agroholding