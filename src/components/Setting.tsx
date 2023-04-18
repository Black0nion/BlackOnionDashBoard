import {Button, CustomSelect, Flex} from "../utils/styles";
import React, {Component} from "react";

interface SettingProps<T> {
    id: string;
    validators?: [(value: T) => boolean];
}

abstract class Setting<T, P extends SettingProps<T> = SettingProps<T>> extends Component<P> {

  public state = {
    value: null
  }

  protected constructor(
    id: string,
    validators: [(value: T) => boolean],
    extraProps?: any
  ) {
    super({id: id, validators: validators, ...extraProps});
  }

  render() {
    return this.getDisplay();
  }

  protected setValue(value: T) {
    this.setState({value: value});
  }

  abstract getDisplay(): any;
}

export class BooleanSetting extends Setting<boolean> {
  getDisplay(): any {
    return (
        <>
          <section>
            <div>
              <label>Current status:</label>
            </div>
            <CustomSelect>
              <select
                id={this.props.id}
                value={this.state.value ? "Enabled" : "Disabled"}
                onChange={(e) => {
                  if (e.target.value === "Enabled") {
                    this.setValue(true)
                  } else {
                    this.setValue(false)
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
            <Button variant={"primary"}>
              Save
            </Button>
          </Flex>
        </>
      )
  }
}

interface DropdownProps<T> extends SettingProps<T> {
  options: T[];
}

export class DropdownSetting<T> extends Setting<T, DropdownProps<T>> {

  constructor(
    id: string,
    validators: [(value: T) => boolean],
    options: T[]
  ) {
    super(id, validators, {options: options});
  }

  getDisplay(): any {
    return (
        <>
          <section>
            <div>
              <label>Current status:</label>
            </div>
            <CustomSelect>
              <select
                  id={this.props.id}
                  value={this.state.value ? "Enabled" : "Disabled"}
                  onChange={(e) => {
                    if ((this.props as any).options.includes(e.target.value as T)) {
                      this.setValue(e.target.value as T)
                    }
                  }}
              >
                <option disabled selected>
                  Choose a status
                </option>
                {this.props.options.map((option) => {
                  return <option key={option as string} value={option as string}>{option as string}</option>
                })}
              </select>
            </CustomSelect>
          </section>
          <Flex justifyContent={"flex-end"}>
            <Button variant={"secondary"} style={{ marginRight: "0.625em" }}>
              Reset
            </Button>
            <Button variant={"primary"}>
              Save
            </Button>
          </Flex>
        </>
    )
  }
}
