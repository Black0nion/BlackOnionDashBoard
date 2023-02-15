import React, {useState} from 'react';
import {Route, Routes} from "react-router";
import {LoginPage} from "./pages/LoginPage";
import {Menu} from "./pages/Menu";
import {Dashboard} from "./pages/Dashboard";
import {GuildContext} from "./utils/context/GuildContext";
import {AppBar} from "./components/AppBar";
import {SetMessages} from "./pages/config/SetMessages";
import {Meta} from "./pages/config/Meta";
import {Moderation} from "./pages/config/Moderation";
import {Sidebar} from "./components/SideBar";
import {useFetchUser} from "./utils/hooks/userFetchUser";
import {CallbackPage} from "./pages/onboarding/Callback";

//Provider will be used to provide the context to the children
function App() {
    const [guildId, setGuildId] = useState("")

    //state variable and function to update the state
    const updateGuildId = (guildId: string) => setGuildId(guildId)
    //useFetchUser();
    return <GuildContext.Provider value={{guildId, updateGuildId}}>
        {/*{true ? (<>
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
            </Routes> </>) : (<Routes>
                <Route path="*" element={<LoginPage/>}/>
            </Routes>
        )} */}
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

export default App;
