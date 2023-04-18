import { createContext } from "react";
import { Guild } from "../../entites/Guild";

type GuildContextType = {
  guild?: Guild;
  updateGuild: (guild: Guild) => void;
};

export const GuildContext = createContext<GuildContextType>({
  updateGuild: () => {},
});
