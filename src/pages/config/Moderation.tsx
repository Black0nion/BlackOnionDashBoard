import {Container, Page, PageTitle} from "../../utils/styles";
import {useContext, useEffect, useState} from "react";
import {GuildContext} from "../../utils/context/GuildContext";
import {fetchSettings} from "../../utils/db";
import {DropdownSetting} from "../../components/Setting";

export const Moderation = () => {
  const { guild } = useContext(GuildContext);
  const guildId = (guild && guild.id) || "";
  const [currentLoadingStatus, setCurrentLoadingStatus] = useState("waiting");

  useEffect(() => {
    if (currentLoadingStatus === "waiting") {
      setCurrentLoadingStatus("loading");
      fetchSettings(guildId).then((res) => {
        setCurrentLoadingStatus("loaded");
      });
    }
  }, [currentLoadingStatus, guildId]);

  return (
    <Page>
      <PageTitle>Moderation Config</PageTitle>

      <Container>
        {currentLoadingStatus === "loading" && <p>Loading...</p>}
        {currentLoadingStatus === "loaded" &&
          <DropdownSetting id="anti_spoiler" options={["Test", "Hello", "World"]}/>
        }
      </Container>
    </Page>
  );
};
