import { Guild } from "../Guild";

export class GuildImpl implements Guild {
  id: string;
  idAsLong: number;
  name: string;
  icon: string;

  constructor(id: string, json: any) {
    this.id = id;
    this.idAsLong = Number(id);
    this.name = json.name;
    this.icon = json.icon;
  }
}
