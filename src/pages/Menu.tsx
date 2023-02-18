import {useNavigate} from "react-router";
import {useContext} from "react";
import {GuildContext} from "../utils/context/GuildContext";
import {GuildMenuItem} from "../components/GuildMenuItem";
import {Container, Page} from "../utils/styles";
import {retrieveUserGuilds} from "../utils/api";

export const Menu = () => {
    const navigate = useNavigate()
    //context keeps track of the guildId
    const {updateGuildId} = useContext(GuildContext)
    const handleClick = (guildId: string) => {
        updateGuildId(guildId)
        navigate(`/dashboard`)
    }

    let guilds = retrieveUserGuilds()

    if (guilds.size() === 0) {
        return <Page>
            <Container>
                <h1>Join a Server</h1>
                <p>You need to join a server to use this bot.</p>
            </Container>
        </Page>
    }

    return <Page>
        <Container>
            <h1>Select a Server</h1>
            <div>
                {
                    guilds.map(guild => (
                        <div onClick={() => {
                            handleClick(guild.id)
                        }}>
                            <GuildMenuItem guild={guild}/>
                        </div>
                    ))
                }
            </div>
        </Container>
    </Page>
}