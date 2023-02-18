import {User} from "../User";

export class UserImpl implements User {
    id: string;
    idAsLong: number;
    username: string;
    discriminator: string;
    avatar: string;
    isBot: boolean | undefined;
    isSystem: boolean | undefined;
    isMfaEnabled: boolean | undefined;

    constructor(id : string, json : any) {
        this.id = id;
        this.idAsLong = Number(id);
        this.username = json.username;
        this.discriminator = json.discriminator;
        this.avatar = json.avatar;
        this.isBot = json.bot;
        this.isSystem = json.system;
        this.isMfaEnabled = json.mfa_enabled;
    }
}