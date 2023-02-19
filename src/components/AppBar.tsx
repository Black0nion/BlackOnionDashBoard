import {AppBarStyle, AppBarTitle} from "../utils/styles";
import {GuildContext} from "../utils/context/GuildContext";
import React, {useContext} from "react";
import {Navigate} from "react-router";

export const AppBar = () => {
    const {guild} = useContext(GuildContext);

    if (guild === undefined) {
        return <Navigate replace to="/menu"/>
    } else {
        try {
            return (
                <AppBarStyle>
                    <AppBarTitle/>
                    <AppBarTitle>
                        Configuring {guild.name}
                    </AppBarTitle>
                    <img
                        src={guild.icon}
                        height={55}
                        width={55}
                        style={{display: "block", borderRadius: "50%"}}
                        alt={guild.name + " icon"}
                    />
                </AppBarStyle>
            )
        } catch (error) {
            console.error("Failed to load guild icon", error);
            alert("Failed to load guild icon. Please try again later.")
            return null;
        }
    }
};