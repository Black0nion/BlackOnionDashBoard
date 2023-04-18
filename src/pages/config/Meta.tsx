import {
  Button,
  Container,
  CustomSelect,
  Flex,
  Page,
  PageTitle,
} from "../../utils/styles";

export const Meta = () => {
  return (
    <Page>
      <PageTitle>Bot Configs</PageTitle>

      <Container>
        <h1> Set a language</h1>
        <section>
          <div>
            <label>Current language:</label>
          </div>
          <CustomSelect>
            <select id={"language"}>
              <option disabled selected>
                Choose a language
              </option>
              <option>English</option>
              <option>German</option>
            </select>
          </CustomSelect>
        </section>

        {/*<AddWhiteLine/>*/}
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
