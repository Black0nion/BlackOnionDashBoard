import {GuildIcon, GuildMenuStyle} from "../utils/styles";

type props = {
    guild: {
        id: string,
        name: string,
        icon: string,
    }
}

export const GuildMenuItem = ({guild}: props) => {

    if (guild.icon === null) {
        guild.icon = "https://cdn.discordapp.com/embed/avatars/0.png";
    } else {
        guild.icon = "https://cdn.discordapp.com/icons/" + guild.id + "/" + guild.icon + ".png";
    }

    return <GuildMenuStyle>
        <GuildIcon src={guild.icon} alt={guild.name} width={50} height={50}/>
        <p>{guild.name}</p>
    </GuildMenuStyle>
}