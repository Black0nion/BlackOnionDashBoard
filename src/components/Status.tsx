import { CustomSelect, Flex, Button } from "../utils/styles";

export const Status = (
  statusId: string,
  valueStatus: boolean,
  saveFunction: (id: string, status: boolean) => void
) => {
  const save = () => {
    saveFunction(statusId, valueStatus);
  };

  return (
    <>
      <section>
        <div>
          <label>Current status:</label>
        </div>
        <CustomSelect>
          <select
            id={statusId}
            value={valueStatus ? "Enabled" : "Disabled"}
            onChange={(e) => {
              if (e.target.value === "Enabled") {
                valueStatus = true;
              } else {
                valueStatus = false;
              }
            }}
          >
            <option disabled selected>
              Choose a status
            </option>
            <option value="Enabled">Enabled</option>
            <option value="Disabled">Disabled</option>
          </select>
        </CustomSelect>
      </section>
      <Flex justifyContent={"flex-end"}>
        <Button variant={"secondary"} style={{ marginRight: "0.625em" }}>
          Reset
        </Button>
        <Button variant={"primary"} onClick={save}>
          Save
        </Button>
      </Flex>
    </>
  );
};
