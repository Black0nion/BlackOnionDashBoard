export interface Snowflake {
  /**
   * The id of this snowflake as a String.
   *
   * @return the id of this snowflake as a [String]
   */
  id: string;

  /**
   * The id of this snowflake as a Long.
   *
   * @return the id of this snowflake as a [Long]
   */
  idAsLong: number;
}
