import configData from "../security/config.json";
import {UserImpl} from "../entites/impl/UserImpl";
import {User} from "../entites/User";
import {List} from "./List";
import {Guild} from "../entites/Guild";
import {getCookie} from "./Cookies";
import {GuildImpl} from "../entites/impl/GuildImpl";

let clientId = configData.client_id
let redirectUrl = configData.redirect_url
let discordBaseUrl = "https://discord.com/api/v10/"


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

function handleGuilds(json: any) : List<Guild> {
    let guilds : List<Guild> = new List<Guild>()

    json.forEach((guild : any) => {
        guilds.add(new GuildImpl(guild.id, guild))
    })

    return guilds
}

//TODO: for some reason is empty
export const retrieveUserGuilds = () : List<Guild>  => {

    if (getCookie("token") === null) {
        alert("token is null")
        throw new Error("token is null")
    }

    //Get
    fetch(discordBaseUrl + "/users/@me/guilds" , {
        method: "GET",
        headers: {
            "Content-Type" : "application/json",
            "Authorization" : "Bearer " + getCookie("token"),
            "accept-encoding" : "json"
        }
    }).then(response => {
        if (response.ok) {
            response.json().then(json => {
                return handleGuilds(json)
            })
        } else {
            alert("error")
            return new List<Guild>()
        }
    }).catch(error => {
        alert("error")
        return new List<Guild>()
    })

    return new List<Guild>()
}

function parseJson(json : any) : any {
    return JSON.stringify(json)
}