import { useContext } from "react";
import { GuildContext } from "../utils/context/GuildContext";
import {
  Container,
  Page,
  TestTextButtonGroup,
  TextButton,
} from "../utils/styles";
import { useNavigate } from "react-router";

export const Dashboard = () => {
  const { guild } = useContext(GuildContext);
  const navigate = useNavigate();

  const handleClick = (path: string) => {
    navigate(path);
  };

  return (
    <Page>
      <Container>
        <div>
          <TestTextButtonGroup>
            <TextButton onClick={() => handleClick(`/dashboard/moderation`)}>
              Moderation
            </TextButton>
            <TextButton onClick={() => handleClick(`/dashboard/meta`)}>
              Meta
            </TextButton>
            <TextButton onClick={() => handleClick(`/dashboard/messages`)}>
              Join/Leave
            </TextButton>
          </TestTextButtonGroup>
        </div>
      </Container>
    </Page>
  );
};
