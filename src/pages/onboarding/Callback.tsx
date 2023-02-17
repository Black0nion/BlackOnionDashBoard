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

let amountOfTimeTried : number = 0;

export const CallbackPage = () => {
    if (amountOfTimeTried === 1) {
        alert("Tried to get the session once, but failed. Redirecting to login page.");
        window.location.href = "/";
    } else {
        amountOfTimeTried++;
    }

    useEffect(() => {


        //get the code added that has been added as an additional querystring parameter
        const code = new URLSearchParams(window.location.search).get('code');
        const state = new URLSearchParams(window.location.search).get('state');

        fetch(configData.auth_api_url + `/auth/exchange_code?code=${code}&state=${state}`)
            .then(async response => {
                // TODO: error handling
                const body = await response.text();

                if (!response.ok) {
                    alert("Error while getting response!" + body)
                    return;
                }

                alert("got session response: " + body);
                window.location.href = "/menu";
            })
            .catch(error => {
                //make sure error makes sense
                let errorMessage = error.toString();
                if (errorMessage.includes("TypeError: Failed to fetch")) {
                    errorMessage = "Failed to fetch. Please check your internet connection.";
                }
                alert("Error while getting session: " + errorMessage);
            });
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
