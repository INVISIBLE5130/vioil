import React from "react";
import './History.css'
import Header from "../../components/Header/Header";
import {history} from "./constants";

function History() {
    return (
        <>
            <Header/>
            <section className="history">
                {
                    history?.map(({date, title, list}, i) => (
                        <div className="history-item"
                             key={Math.random()}
                        >
                            <p className="history-item-date">
                                {date}
                            </p>
                            <div className="history-item-point"/>
                            {
                                i !== (history.length - 1) &&
                                <div className="history-item-line"/>
                            }
                            <p className="history-item-title">
                                {title}
                            </p>
                            <ul className="history-item-list">
                                {
                                    list?.map(item => (
                                        <li>
                                            {item}
                                        </li>
                                    ))
                                }
                            </ul>
                        </div>
                    ))
                }
            </section>
        </>
    )
}

export default History