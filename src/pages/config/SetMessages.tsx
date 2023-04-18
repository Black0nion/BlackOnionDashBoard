import {
  AddWhiteLine,
  Button,
  Container,
  CustomSelect,
  Flex,
  Page,
  PageTitle,
  Switch,
  TextArea,
} from "../../utils/styles";
import React, { useState } from "react";

export const SetMessages = () => {
  const [welcomeMessageEnablity, setWelcomeMessageEnablity] = useState(false);
  const [leaveMessageEnablity, setLeaveMessageEnablity] = useState(false);

  return (
    <Page>
      <PageTitle>Join and Leave message Config</PageTitle>
      <Container>
        <section>
          <div>
            <label>Current Welcome Message Status: </label>
          </div>
          <CustomSelect>
            <Switch
              isOn={welcomeMessageEnablity}
              onColor="#3B82F6"
              handleToggle={() =>
                setWelcomeMessageEnablity(!welcomeMessageEnablity)
              }
              id="welcome_message_switch"
            />
          </CustomSelect>
        </section>
        {/* If enabled, show the following: */}
        {welcomeMessageEnablity && (
          <section>
            <div>
              <label>Current Channel:</label>
            </div>
            <CustomSelect>
              <select>
                <option disabled selected>
                  Choose a channel
                </option>
                <option>111</option>
                <option>222</option>
                <option>333</option>
              </select>
            </CustomSelect>
          </section>
        )}
        {welcomeMessageEnablity && (
          <section>
            <div>
              <label htmlFor="welcomeMessage">Current Message:</label>
            </div>
            <TextArea id={"welcomeMessage"}></TextArea>
          </section>
        )}
        {welcomeMessageEnablity && (
          <section>
            <div>
              <label htmlFor="welcomeImageStatus">Welcome Image Status:</label>
            </div>
            <CustomSelect>
              <select id={"welcomeImageStatus"}>
                <option disabled selected>
                  Choose an option
                </option>
                <option>Enabled</option>
                <option>Disabled</option>
              </select>
            </CustomSelect>
          </section>
        )}

        <AddWhiteLine />

        <section>
          <div>
            <label>Current Leave Message Status: </label>
          </div>
          <CustomSelect>
            <Switch
              isOn={leaveMessageEnablity}
              onColor="#3B82F6"
              handleToggle={() =>
                setLeaveMessageEnablity(!leaveMessageEnablity)
              }
              id="leave_message_switch"
            />
          </CustomSelect>
        </section>
        {/* If enabled, show the following: */}
        {leaveMessageEnablity && (
          <section>
            <div>
              <label>Current Channel:</label>
            </div>
            <CustomSelect>
              <select>
                <option disabled selected>
                  Choose a channel
                </option>
                <option>111</option>
                <option>222</option>
                <option>333</option>
              </select>
            </CustomSelect>
          </section>
        )}
        {leaveMessageEnablity && (
          <section>
            <div>
              <label htmlFor="leaveMessage">Current Message:</label>
            </div>
            <TextArea id={"leaveMessage"}></TextArea>
          </section>
        )}
        {leaveMessageEnablity && (
          <section>
            <div>
              <label htmlFor="leaveImageStatus">Leave Image Status:</label>
            </div>
            <CustomSelect>
              <select id={"leaveImageStatus"}>
                <option disabled selected>
                  Choose an option
                </option>
                <option>Enabled</option>
                <option>Disabled</option>
              </select>
            </CustomSelect>
          </section>
        )}

        <Flex justifyContent={"flex-end"}>
          <Button variant={"secondary"} style={{ marginRight: "0.625em" }}>
            Reset
          </Button>
          <Button variant={"primary"}>Save</Button>
        </Flex>
      </Container>
    </Page>
  );
};
