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
import {setCookie} from "../../utils/Cookies";

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
        fetch(configData.bot_api + "/login?code=" + code, {
            method: "POST"
        }).then(async response => {
            let accessToken = await response.text();
            if (response.status !== 200) {
                alert("Failed to get the session. Redirecting to login page.");
                window.location.href = "/";
                return;
            }

            //todo : change sent text to include expiry time
            setCookie("access_token", accessToken)

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
