import Cookies, { CookieSetOptions } from "universal-cookie";

let cookies = new Cookies();

export function setCookie(
  name: string,
  value: string,
  options?: CookieSetOptions | undefined
) {
  try {
    cookies.set(name, value, { ...{ path: "/" }, ...options });
  } catch (e) {
    alert("Error: " + e);
  }
}

export function getCookie(name: string): string | null {
  if (cookies.get(name) === undefined || cookies.get(name) === null) {
    return null;
  } else {
    return cookies.get(name);
  }
}
