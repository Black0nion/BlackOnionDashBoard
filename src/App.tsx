import React, {useState} from 'react';
import {Route, Routes} from "react-router";
import {LoginPage} from "./pages/LoginPage";
import {Menu} from "./pages/Menu";
import {Dashboard} from "./pages/Dashboard";
import {GuildContext} from "./utils/context/GuildContext";
import {SetMessages} from "./pages/config/SetMessages";
import {Meta} from "./pages/config/Meta";
import {Moderation} from "./pages/config/Moderation";
import {CallbackPage} from "./pages/onboarding/Callback";
import {getCookie} from "./utils/Cookies";
import {Sidebar} from "./components/SideBar";
import {AppBar} from "./components/AppBar";
import {Guild} from "./entites/Guild";

//Provider will be used to provide the context to the children
function App() {
    const [guild, setGuild] = useState<Guild>();
    //state variable and function to update the state
    const updateGuild = (guild: Guild) => setGuild(guild);

    //if token exists in cookies, redirect to dashboard
    //if not, redirect to login page

    const token = getCookie("token")

    if (token === "") {
        return <Routes>
            <Route path="/" element={<LoginPage/>}/>
            <Route path="/onboarding/callback" element={<CallbackPage/>}/>
        </Routes>
    } else {
        return <GuildContext.Provider value={{guild, updateGuild}}>
            <Routes>
                <Route path="/dashboard/*" element={<AppBar/>}/>
            </Routes>
            <Routes>
                <Route path="/dashboard/*" element={<Sidebar/>}/>
            </Routes>
            <Routes>
                <Route path="/" element={<LoginPage/>}/>
                <Route path="/menu" element={<Menu/>}/>
                <Route path="/dashboard" element={<Dashboard/>}/>
                <Route path="/dashboard/messages" element={<SetMessages/>}/>
                <Route path="/dashboard/meta" element={<Meta/>}/>
                <Route path="/dashboard/moderation" element={<Moderation/>}/>
                <Route path="/onboarding/callback" element={<CallbackPage/>}/>
            </Routes>
        </GuildContext.Provider>
    }
}

export default App;
