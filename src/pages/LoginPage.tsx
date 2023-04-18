import { FaDiscord, FaQuestionCircle } from "react-icons/fa";
import { HomeStyle, MainButton, MainFooter } from "../utils/styles";
import {
  redirectToContact,
  redirectToDiscord,
  redirectToLicense,
  redirectToPrivacyPolicy,
  redirectToSupportServer,
  redirectToTeam,
  redirectToTermsOfService,
} from "../utils/LoginPageUtils";

export const LoginPage = () => {
  return (
    <HomeStyle>
      {/*  needed to keep the divs in the center */}
      <div></div>
      <div>
        <MainButton onClick={redirectToDiscord}>
          <FaDiscord size={50} color="5865F2" />
          <p style={{ fontSize: "1.4em" }}>Login With Discord</p>
        </MainButton>
        <MainButton onClick={redirectToSupportServer}>
          <FaQuestionCircle size={50} />
          <p style={{ fontSize: "1.4em" }}>Support Server</p>
        </MainButton>
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
};
