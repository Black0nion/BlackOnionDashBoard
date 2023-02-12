import {useEffect} from 'react';
import {FaDiscord, FaQuestionCircle} from "react-icons/fa";
import {HomeStyle, MainButton, MainFooter} from "../../utils/styles";
import configData from "../../security/config.json";
import {
    redirectToContact,
    redirectToDiscord,
    redirectToLicense,
    redirectToPrivacyPolicy,
    redirectToSupportServer,
    redirectToTeam,
    redirectToTermsOfService
} from "../../utils/LoginPageUtils";

export const CallbackPage = () => {
    useEffect(() => {
        //get the code added that has been added as an additional querystring parameter
        const code = new URLSearchParams(window.location.search).get('code');
        const state = new URLSearchParams(window.location.search).get('state');

        fetch(configData.auth_api_url + `/auth/exchange_code?code=${code}&state=${state}`)
            .then(async response => {
                // TODO: error handling
                const body = await response.json();

                if (!response.ok) {
                    alert("Error while getting response!");
                    console.error(body);
                    return;
                }

                alert("got session response: " + body);
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
