import Cookies, {CookieSetOptions} from 'universal-cookie';

let cookies = new Cookies()


export function setCookie(name : string, value : string, options?: CookieSetOptions | undefined) {
    cookies.set(name, value, options)
}

export function getCookie(name : string) {
    return cookies.get(name)
}