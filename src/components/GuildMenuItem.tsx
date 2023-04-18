import { GuildIcon, GuildMenuStyle } from "../utils/styles";

type props = {
  guild: {
    id: string;
    name: string;
    icon: string;
  };
};

export const GuildMenuItem = ({ guild }: props) => {
  guild.icon = getIcon(guild.id, guild.icon);

  return (
    <GuildMenuStyle>
      <GuildIcon src={guild.icon} alt={guild.name} width={50} height={50} />
      <p>{guild.name}</p>
    </GuildMenuStyle>
  );
};

export function getIcon(id: string, icon: string) {
  if (icon === null) {
    return "https://cdn.discordapp.com/embed/avatars/0.png";
  } else {
    return "https://cdn.discordapp.com/icons/" + id + "/" + icon + ".png";
  }
}
