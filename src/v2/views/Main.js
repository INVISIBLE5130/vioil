import React from "react";
import Contacts from "../components/Contacts/Contacts";
import Header from "../components/Header/Header";
import About from "../components/About/About";
import History from "../components/History/History";
import ProductionSlider from "../components/ProductionSlider/ProductionSlider";

function Main() {
    const wrapperStyle = {
        minHeight: '100vh',
        padding: '52px 143px',
        backgroundColor: '#000'
    }

    return (
        <div style={wrapperStyle}>
            <Header menuStatus/>
            <About/>
            <History/>
            <ProductionSlider/>
            <Contacts/>
        </div>
    )
}

export default Main