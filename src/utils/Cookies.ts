import Cookies, {CookieSetOptions} from 'universal-cookie';

let cookies = new Cookies()


export function setCookie(name : string, value : string, options?: CookieSetOptions | undefined) {
    try {
        cookies.set(name, value, options)
    } catch (e) {
        alert("Error: " + e)
    }
}

export function getCookie(name : string) {
    return cookies.get(name)
}