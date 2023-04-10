import configData from "../security/config.json";
import {useNavigate} from "react-router";
import {useContext, useEffect, useState} from "react";
import {GuildContext} from "../utils/context/GuildContext";
import {GuildMenuItem} from "../components/GuildMenuItem";
import {Container, Page} from "../utils/styles";
import {getBotGuilds, getBotInviteUrl, handleGuild} from "../utils/api";
import {List} from "../utils/List";
import {Guild} from "../entites/Guild";
import {getCookie} from "../utils/Cookies";

export const Menu = () => {
    const navigate = useNavigate()
    //context keeps track of the guildId
    const {updateGuild} = useContext(GuildContext)

    const handleClick = (guild: Guild) => {
        updateGuild(guild)
        navigate(`/dashboard`)
    }

    //state to make sure the guilds are loaded after fetching
    const [guilds, setGuilds] = useState<List<Guild>>(new List<Guild>())
    const [guildState, setGuildState] = useState<String>("waiting")

    useEffect(() => {
        if (guildState === "waiting") {
            setGuildState("loading");
            fetch(configData.bot_api + "/guilds", {
                method: "GET",
                headers: {
                    "Authorization": "Bearer " + getCookie("access_token"),
                }
            }).then(async response => {
                if (response.status !== 200) {
                    alert("Failed to get the guilds. Redirecting to login page.");
                    navigate(`/`)
                    return;
                }

                let json = await response.json();

                let independentList = new List<Guild>();
                for (let i = 0; i < json.length; i++) {
                    let guild = handleGuild(json[i]);
                    if (guild !== null) {
                        independentList.add(guild);
                    }
                }

                await setGuilds(independentList);

                setGuildState(independentList?.size() === 0 ? "no guilds" : "loaded");
            }).catch(error => {
                console.log(error);
                alert("Failed to get the guilds. Redirecting to login page.");
                navigate(`/`)
            })
        }
    }, [guildState, guilds, navigate])

    return (
        <Page>
            <Container>
                <h1>Menu</h1>
                <p>Choose a guild to manage</p>
                {guildState === "loading" && <p>Loading guilds...</p>}
                {guildState === "no guilds" && <p>No guilds found.</p>}
                {guilds?.size() !== 0 && guilds?.map((guild: Guild) => {
                    return <div>
                        {
                            <div onClick={() => {
                                if (guild !== null) {
                                    handleClick(guild)
                                } else {
                                    window.open(getBotInviteUrl(), "_blank", "noopener,noreferrer")
                                }
                            }}>
                                <GuildMenuItem guild={guild}/>
                            </div>
                        }
                    </div>
                })}
            </Container>
        </Page>
    )
}
