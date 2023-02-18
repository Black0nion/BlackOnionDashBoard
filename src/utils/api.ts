import configData from "../security/config.json";
import {UserImpl} from "../entites/impl/UserImpl";
import {User} from "../entites/User";

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
            "Authorization" : localStorage.getItem("token_type") + " " + localStorage.getItem("token"),
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
