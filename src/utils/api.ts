import configData from "../security/config.json";
import {UserImpl} from "../entites/impl/UserImpl";
import {User} from "../entites/User";

let clientId = configData.client_id
let redirectUrl = configData.redirect_url

export const getAuthLogin = () => {
    if (clientId === undefined || redirectUrl === undefined) {
        throw new Error("clientId or redirectUrl or clientSecret is undefined")
    }
    return `https://discord.com/api/oauth2/authorize?client_id=${clientId}&redirect_uri=${redirectUrl}&response_type=code&scope=identify%20guilds&state=random`
}

export const retrieveUserInfo = () : User | null => {
    let user : User | null = null
    fetch(configData.auth_api_url + "/users/@me")
        .then(response => {
            if (response.ok) {
                response.json().then(json => {
                    user = new UserImpl(json.id, json)
                })
            } else {
                throw new Error("Response was not ok")
            }
        })
        .catch(error => {
            console.error(error)
            user = null
        })
    return user
}
