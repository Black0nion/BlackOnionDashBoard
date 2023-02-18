import {Snowflake} from "./Snowflake";

export interface User extends Snowflake{
    /**
     * The username of this user.
     *
     * @return the username of this user
     */
    username: string;

    /**
     * The discriminator of this user.
     *
     * @return the discriminator of this user
     */
    discriminator: string;

    /**
     * The avatar hash of this user.
     *
     * @return the avatar hash of this user
     */
    avatar: string;

    /**
     * The bot flag of this user.
     *
     * @return the bot flag of this user
     */
    isBot: boolean | undefined;

    /**
     * The system flag of this user.
     *
     * @return the system flag of this user
     */
    isSystem: boolean | undefined;

    /**
     * The mfa flag of this user.
     *
     * @return the mfa flag of this user
     */
    isMfaEnabled: boolean | undefined;
}