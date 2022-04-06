import React from "react";
import Header from "../components/Header/Header";
import Search from "../components/Search/Search";
import ProfileCard from "../components/ProfileCard/ProfileCard";
import ProfileItems from "../components/ProfileItems/ProfileItems";

function Profile() {
    const wrapperStyle = {
        minHeight: '100vh',
        padding: '52px 143px',
        backgroundColor: '#000'
    }

    return (
        <div style={wrapperStyle}>
            <Header/>
            <Search/>
            <ProfileCard/>
            <ProfileItems/>
        </div>
    )
}

export default Profile