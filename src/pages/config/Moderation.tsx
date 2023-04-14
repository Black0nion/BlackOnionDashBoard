import { getCookie } from "../../utils/Cookies";
import {Button, Container, CustomSelect, Flex, Page, PageTitle} from "../../utils/styles";
import {useContext, useEffect, useState} from "react";
import {useNavigate} from "react-router";
import { getBotApiUrl } from "../../utils/api";
import { GuildContext } from "../../utils/context/GuildContext";

export const Moderation = () => {
    const navigate = useNavigate()
    const { guild } = useContext(GuildContext);
    const guildId = (guild && guild.id) || '';
    const [currentStatus, setCurrentStatus] = useState(false);
    const [currentLoadingStatus, setCurrentLoadingStatus] = useState("waiting");

    useEffect(() => {
        if (currentLoadingStatus === "waiting") {
            setCurrentLoadingStatus("loading")
            fetch(getBotApiUrl() + "guilds/moderation/anti-spoiler", {
                method: "GET",
                headers: {
                    "Authorization": "Bearer " + getCookie("access_token"),
                    "guildId": guildId
                }
            }).then(async response => {
                if (response.status !== 200) {
                    alert("Failed to get the info. Redirecting to login page.");
                    navigate(`/`)
                    return;
                }

                let json = await response.json();
                //get the status
                setCurrentStatus(json.status);
                setCurrentLoadingStatus("loaded");
            }).catch(error => {
                console.log(error);
                alert("Failed to get the guilds. Redirecting to login page.");
                navigate(`/`)
            })
        }
    }, [currentLoadingStatus, currentStatus, guildId, navigate])

    const save = async (
        e: React.MouseEvent<HTMLButtonElement, MouseEvent>
      ) => {
        e.preventDefault();
        try {
            updateAntiSpoilerSettings(guildId, currentStatus);
        } catch (err) {
          console.log(err);
        }
      };


return <Page>
        <PageTitle>Moderation Config</PageTitle>

        <Container>
            <h1>Enable/Disable Anti-Spoiler</h1>
            {currentLoadingStatus === "loading" && <p>Loading...</p>}
            {currentLoadingStatus === "loaded" && <p> Loaded </p> => {
            return <section>
                <div>
                    <label>Current status:</label>
                </div>
                <CustomSelect>
                    <select id={"anti-spoiler"}>
                        <option disabled selected>Choose a status</option>
                        <option>Enabled</option>
                        <option>Disabled</option>
                    </select>
                </CustomSelect>
            </section>

            {/*<AddWhiteLine/>*/}
            <Flex justifyContent={"flex-end"}>
                <Button variant={"secondary"} style={{marginRight: "0.625em"}}>
                    Reset
                </Button>
                <Button variant={"primary"} onClick={save}>
                    Save
                </Button>
            </Flex>
            }}
        </Container>
    </Page>
}