import configData from "../security/config.json";

let clientId = configData.client_id
let redirectUrl = configData.redirect_url

export const getAuthLogin = () => {
    if (clientId === undefined || redirectUrl === undefined) {
        throw new Error("clientId or redirectUrl or clientSecret is undefined")
    }
    return `https://discord.com/api/oauth2/authorize?client_id=${clientId}&redirect_uri=${redirectUrl}&response_type=code&scope=identify%20guilds&state=random`
}
