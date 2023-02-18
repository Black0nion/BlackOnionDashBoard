import {Snowflake} from "./Snowflake";

export interface Guild extends Snowflake {
    /**
     * The name of this guild.
     *
     * @return the name of this guild
     */
    name: string;

    /**
     * The icon of this guild.
     *
     * @return the icon of this guild
     */
    icon: string;
}