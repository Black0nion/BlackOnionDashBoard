import configData from "../security/config.json";
import {UserImpl} from "../entites/impl/UserImpl";
import {User} from "../entites/User";
import {List} from "./List";
import {Guild} from "../entites/Guild";
import {getCookie} from "./Cookies";
import {GuildImpl} from "../entites/impl/GuildImpl";
import {GuildList} from "./GuildList";
import {throws} from "assert";

let clientId = configData.client_id
let redirectUrl = configData.redirect_url
export let discordBaseUrl = "https://discord.com/api/v10/"

export const getAuthLogin = () => {
    if (clientId === undefined || redirectUrl === undefined) {
        throw new Error("clientId or redirectUrl or clientSecret is undefined")
    }
    return `https://discord.com/api/oauth2/authorize?client_id=${clientId}&redirect_uri=${redirectUrl}&response_type=code&scope=identify%20guilds&state=random`
}

export const retrieveUserInfo = () : User | null => {
    let user : User | null = null

    //Get
    fetch(discordBaseUrl + "/users/@me" , {
        method: "GET",
        headers: {
            "Content-Type" : "application/json",
            "Authorization" : "Bearer " + localStorage.getItem("token"),
            "accept-encoding" : "json"
        }
    }).then(response => {
        if (response.ok) {
            response.json().then(json => {
                user = new UserImpl(json.id, json)
            })
        }
    })

    return user
}

const handleTheLoadingOfGuildJsons =  async (): Promise<any | null> => {
    let thisJson: any = null
    if (getCookie("token") === null) {
        alert("token is null")
        throw new Error("token is null")
    }

    fetch(discordBaseUrl + "/users/@me/guilds", {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            "Authorization": "Bearer " + getCookie("token"),
            "accept-encoding": "json"
        }
    }).then(async response => {
        let json = await response.json();

        if (!response.ok) {
            alert("error while loading guilds " + response.status)
            throw new Error("error while loading guilds " + response.status)
        }

        if (json === null) {
            thisJson = "null"
        } else {
            thisJson = json
        }
    }).catch(error => {
        alert("error while loading guilds " + error.message)
        throw new Error("error while loading guilds" + error.message)
    })

    await new Promise(resolve => setTimeout(resolve, 1000));

    return thisJson ?? null
}

export async function handleGuilds(): Promise<List<Guild>> {
    let json: any = handleTheLoadingOfGuildJsons()
    let guildList: List<Guild> = new List<Guild>()

    //promise
    while (json.then === undefined) {
        json = await json
    } //wait for the promise to resolve

    if (json !== "null") {
        try {
            //get the perms and check if they can manage the server 0x0000000000000020 (1 << 5)
            for (let i = 0; i < json.length; i++) {
                if (json[i].permissions & 0x0000000000000020) {
                    guildList.add(new GuildImpl(json[i].id, json[i]))
                }
            }

            return guildList
        } catch (error) {
            alert("error while handling guilds: " + error)
            throw new Error("error while handling guilds: " + error)
        }
    } else {
        return guildList
    }
}

export  function handleGuild(json: any): Guild | null {
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
