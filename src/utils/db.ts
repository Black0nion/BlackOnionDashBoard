import { getCookie } from "./Cookies";
import { HashMap } from "./HashMap";
import { getBotApiUrl } from "./api";

export const fetchSettings = async (
  guildId: string
): Promise<any> => {
  fetch(getBotApiUrl() + "/settings/guild/" + guildId, {
    method: "GET",
    headers: {
      AUTHORIZATION: "Bearer " + getCookie("access_token"),
    },
  })
    .then((response) => {
      if (response.ok) {
        return response.json();
      } else {
        alert("Something went wrong while fetching the settings ");
        throw new Error(
          "Something went wrong while fetching the settings "
        );
      }
    })
    .then((data) => {
      return data;
    })
    .catch((error) => {
      alert(error);
    });
};

export const updateSettings = async (
  guildId: string,
  data: HashMap<string, any>
) => {
  fetch(getBotApiUrl() + "/settings/guild/" + guildId, {
    method: "POST",
    headers: {
      AUTHORIZATION: "Bearer " + getCookie("access_token"),
      guildId: guildId,
      data: convertDataToJSON(data),
    },
  }).catch((error) => {
    alert(error);
  });
};

const convertDataToJSON = (data: HashMap<string, any>): string => {
  //id is the key, value is the value
  let json = "{";
  data.forEachEntry((value: string, key: any) => {
    json += '"' + key + '":"' + value + '",';
  });
  json = json.substring(0, json.length - 1);
  json += "}";
  return json;
};
