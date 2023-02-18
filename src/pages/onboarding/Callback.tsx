import {useEffect} from 'react';
import {HomeStyle, MainFooter} from "../../utils/styles";
import configData from "../../security/config.json";
import {
    redirectToContact,
    redirectToLicense,
    redirectToPrivacyPolicy,
    redirectToTeam,
    redirectToTermsOfService
} from "../../utils/LoginPageUtils";

let amountOfTimeTried: number = 0;

export const CallbackPage = () => {
    if (amountOfTimeTried === 1) {
        alert("Tried to get the session once, but failed. Redirecting to login page.");
        window.location.href = "/";
    } else {
        amountOfTimeTried++;
    }

    useEffect(() => {
        const code = new URLSearchParams(window.location.search).get('code');

        // change of approach: we get the token and save it in the session storage, then we redirect to the menu page
        fetch("https://discord.com/api/v10" + "/oauth2/token", {
            method: "POST",
            headers: {
                "Content-Type": "application/x-www-form-urlencoded"
            },
            body: new URLSearchParams({
                client_id: configData.client_id,
                client_secret: configData.client_secret,
                grant_type: "authorization_code",
                code: code as string,
                redirect_uri: "http://localhost:3000/onboarding/callback",
            }).toString()
        }).then(async response => {
            let json = await response.json();
            if (response.status !== 200) {
                alert("Failed to get the session. Redirecting to login page.");
                window.location.href = "/";
                return;
            }

            if (json.access_token === undefined || json.access_token === null) {
                alert("Failed to get the session. Redirecting to login page.");
                window.location.href = "/";
                return;
            }

            sessionStorage.setItem("token", json.access_token);
            sessionStorage.setItem("refresh_token", json.refresh_token);
            sessionStorage.setItem("expires_in", json.expires_in);
            sessionStorage.setItem("scope", json.scope);
            sessionStorage.setItem("token_type", json.token_type);

            window.location.href = "/menu";
        }).catch(error => {
            console.log(error);
            alert("Failed to get the session. Redirecting to login page.");
            window.location.href = "/";
        })
    }, []);

    return (
        <HomeStyle
        >
            {/*  needed to keep the divs in the center */}
            <div></div>
            <div>
                Please wait while we get you ready....
            </div>
            <MainFooter>
                <span onClick={redirectToPrivacyPolicy}>Privacy Policy</span>
                <span onClick={redirectToTermsOfService}>Terms of Service</span>
                <span onClick={redirectToTeam}>The Black Onion team</span>
                <span onClick={redirectToContact}>Contact us</span>
                <span onClick={redirectToLicense}>© 2023 Black Onion</span>
            </MainFooter>
        </HomeStyle>
    );
}
