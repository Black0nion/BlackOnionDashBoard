import axis, {AxiosRequestConfig} from 'axios';
import {User} from "./types";
import configData from "../security/config.json";

let clientId = configData.client_id
let redirectUrl = configData.redirect_url

const CONFIG: AxiosRequestConfig = {withCredentials: true}

export const getAuthStatus = () => axis.get<User>(getAuthLogin + 'status', CONFIG)

export const getAuthLogin = () => {
    if (clientId === undefined || redirectUrl === undefined) {
        throw new Error("clientId or redirectUrl or clientSecret is undefined")
    }
    return `https://discord.com/api/oauth2/authorize?client_id=${clientId}&redirect_uri=${redirectUrl}&response_type=code&scope=identify%20guilds&state=random`
}
