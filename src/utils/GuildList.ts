import { List } from "./List";
import { Guild } from "../entites/Guild";

export class GuildList {
  private readonly guilds: List<Guild>;

  constructor() {
    this.guilds = new List<Guild>();
  }

  size(): number {
    return this.guilds.size();
  }

  add(value: Guild): void {
    this.guilds.add(value);
  }

  addAll(values: List<Guild>): void {
    this.guilds.addAll(values);
  }

  get(index: number): Guild {
    return this.guilds.get(index);
  }

  map<U>(callback: (value: Guild, index: number, array: Guild[]) => U): U[] {
    return this.guilds.map(callback);
  }
}
