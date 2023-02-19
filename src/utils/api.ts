import configData from "../security/config.json";
import {Guild} from "../entites/Guild";
import {GuildImpl} from "../entites/impl/GuildImpl";

let clientId = configData.client_id
let redirectUrl = configData.redirect_url
export let discordBaseUrl = "https://discord.com/api/v10/"

export const getAuthLogin = () => {
    if (clientId === undefined || redirectUrl === undefined) {
        throw new Error("clientId or redirectUrl or clientSecret is undefined")
    }
    return `https://discord.com/api/oauth2/authorize?client_id=${clientId}&redirect_uri=${redirectUrl}&response_type=code&scope=identify%20guilds&state=random`
}

export function handleGuild(json: any): Guild | null {
    try {
        if (json.permissions & 0x0000000000000020) {
            return new GuildImpl(json.id, json)
        } else {
            return null
        }
    } catch (error) {
        alert("error while handling guilds: " + error)
        throw new Error("error while handling guilds: " + error)
    }
}
