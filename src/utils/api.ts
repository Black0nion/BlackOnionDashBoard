import configData from "../security/config.json";
import { Guild } from "../entites/Guild";
import { GuildImpl } from "../entites/impl/GuildImpl";
import { List } from "./List";
import { getCookie } from "./Cookies";

let clientId = configData.client_id;
let redirectUrl = configData.redirect_url;
export let discordBaseUrl = "https://discord.com/api/v10/";

export const getAuthLogin = () => {
  if (clientId === undefined || redirectUrl === undefined) {
    throw new Error("clientId or redirectUrl or clientSecret is undefined");
  }
  return `https://discord.com/api/oauth2/authorize?client_id=${clientId}&redirect_uri=${redirectUrl}&response_type=code&scope=identify%20guilds&state=random`;
};

export function handleGuild(json: any): Guild | null {
  try {
    return new GuildImpl(json.id, json);
  } catch (error) {
    alert("error while handling guilds: " + error);
    throw new Error("error while handling guilds: " + error);
  }
}

export async function getBotGuilds(): Promise<List<Guild>> {
  try {
    await fetch(configData.bot_api + "/guilds", {
      method: "GET",
      headers: {
        Authorization: "Bearer " + getCookie("access_token"),
      },
    })
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error(
            "error while retrieving bot guilds: " + response.status
          );
        }
      })
      .then((json) => {
        let guilds = new List<Guild>();
        for (let i = 0; i < json.length; i++) {
          let guild = handleGuild(json[i]);
          if (guild !== null) {
            guilds.add(guild);
          }
        }
        return guilds;
      });
  } catch (error) {
    alert("error while handling retrieving bot guilds: " + error);
    throw new Error("error while handling retrieving bot guilds: " + error);
  }

  return new List<Guild>();
}

export const getBotInviteUrl = (): string => {
  return configData.bot_invite_url;
};

export const getBotApiUrl = (): string => {
  return configData.bot_api;
};

// https://github.com/microsoft/TypeScript/issues/30611#issuecomment-570773496
export function createEnumChecker<T extends string, TEnumValue extends string>(enumVariable: { [key in T]: TEnumValue }) {
  const enumValues = Object.values(enumVariable)
  return (value: string): value is TEnumValue => enumValues.includes(value)
}
