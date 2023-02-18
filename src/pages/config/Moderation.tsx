import {Button, Container, CustomSelect, Flex, Page, PageTitle} from "../../utils/styles";

export const Moderation = () => {
    return <Page>
        <PageTitle>Moderation Config</PageTitle>

        <Container>
            <h1>Enable/Disable Anti-Spoiler</h1>
            <section>
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
                <Button variant={"primary"}>
                    Save
                </Button>
            </Flex>
        </Container>
    </Page>
}