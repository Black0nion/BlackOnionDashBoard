import {getAuthLogin} from "./api";

export const redirectToDiscord = () => {
    window.location.href = getAuthLogin();
}

export const redirectToSupportServer = () => {
    window.location.href = "https://discord.gg/88bryEbntG";
}

export const redirectToPrivacyPolicy = () => {
    window.location.href = "/privacy-policy";
}

export const redirectToTermsOfService = () => {
    window.location.href = "/terms-of-service";
}

export const redirectToTeam = () => {
    window.location.href = "/team";
}

export const redirectToContact = () => {
    window.location.href = "/contact";
}

export const redirectToLicense = () => {
    window.location.href = "https://github.com/Black0nion/BlackOnionDashBoard/blob/main/LICENSE";
}