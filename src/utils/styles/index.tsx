import styled, {css} from 'styled-components';
import "./switch.css";

export const MainButton = styled.div`
  gap: 0.625em;
  display: flex;
  width: 46.875em;
  background-color: #313030;
  padding: 0.25em 3.125em;
  box-sizing: border-box;
  //add gap between the two divs
  border-Radius: 0.3125em;
  border: 0.0625em solid #313030;
  //center the text and icon and remove excess padding
  justify-Content: center;
  align-Items: center;
  box-Shadow: 0 0.0625em 0.3125em 0 rgba(77, 73, 73, 0.18);
  margin: 0.625em 0;
  //add fade effect on hover
  &:hover {
    background-color: #2b2b2b;
    border: 0.0625em solid #2b2b2b;
    box-Shadow: 0 0.0625em 0.3125em 0 rgba(77, 73, 73, 0.18);
    cursor: pointer;
  }
`;

export const TextButton = styled(MainButton)`
  display: flex;
  width: 15.875em;
  height: 3.425em;
  font-size: 1.1em;
  background-color: transparent;
  padding: 0.25em 3.125em;
`;

export const HomeStyle = styled.div`
  height: 100%;
  padding: 3.125em 0;
  box-Sizing: border-box;
  display: flex;
  flex-Direction: column;
  justify-Content: space-between;
  align-Items: center;
`;

export const MainFooter = styled.div`
  display: flex;
  width: 46.875em;
  justify-Content: space-between;
  align-Items: center;

  span {
    color: #b9b9b9;

    &:hover {
      cursor: pointer;
      color: #ffffff;
    }
  }
`;

export const GuildMenuStyle = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0.7em 1.25em;
  background-color: #252525;
  border-radius: 0.3125em;
  border: 0.0625em solid rgba(255, 255, 255, 0.07);
  margin: 0.625em 0;

  //add fade effect on hover
  &:hover {
    background-color: #2b2b2b;
    border: 0.0625em solid #2b2b2b;
    box-shadow: 0 0.0625em 0.3125em 0 rgba(77, 73, 73, 0.18);
    cursor: pointer;
  }
`;

export const Container = styled.div`
  width: 75em;
  margin: 0 auto;

  h1 {
    //center the text
    text-align: start;
    color: #ffffff;
    font-size: 1.5em;
    font-weight: 550;
    margin: 0.625em 0;
  }

  //add margin between the two sections
  section {
    margin: 0.725em 0;

    div {
      font-size: 1em;
    }
  }

  label {
    font-size: 1.2em;
    font-weight: 500;
    color: #ffffff;
    margin: 0.625em 0;
  }
`;

export const AddWhiteLine = styled.div`
  width: 100%;
  height: 0.0625em;
  background-color: rgba(255, 255, 255, 0.42);
  padding: 0.05em 0;
  margin: 1.2em 0 1.5em 0;
`;

export const GuildIcon = styled.img`
  border-radius: 50%;
  width: 3.125em;
  height: 3.125em;
  margin-right: 1.25em;
`;

export const AppBarStyle = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1.5625em 2.1875em;
  box-sizing: border-box;
  border-bottom: 0.0625em solid rgba(255, 255, 255, 0.2);
`;

export const AppBarTitle = styled.h1`
  //center the text
  text-align: center;
  color: #ffffff;
  font-size: 1.9em;
  font-weight: 550;
  margin: 0.625em 0;
`;


export const Title = styled.p`
  font-size: 1.6em;
  font-weight: 700;
  color: #ffffff;
  margin: 0.925em 0;
`;

type FlexProps = Partial<{
    alignItems: string;
    justifyContent: string;
    flexDirection: string;
}>;

export const Flex = styled.div<FlexProps>`
  display: flex;
  align-items: ${(props) => props.alignItems};
  justify-content: ${(props) => props.justifyContent};
  flex-direction: ${(props) => props.flexDirection};

  ${(props) =>
          props.flexDirection === 'column' &&
          css`
            height: 100%;
          `}

`;

export const TestTextButtonGroup = styled.div`
  //Two next to each with a gap
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0.7em 1.25em;
  background-color: #252525;
  border-radius: 0.3125em;
  border: 0.0625em solid rgba(255, 255, 255, 0.07);
  margin: 20.625em 0;
`;

type ButtonProps = Partial<{
    variant: 'primary' | 'secondary';
}>;

export const Button = styled.button<ButtonProps>`
  padding: 0.625em 1.5em;
  border-radius: 0.3125em;
  outline: none;
  border: none;
  font-size: 1em;
  color: #fff;
  cursor: pointer;

  ${({variant}) =>
          variant === 'primary' &&
          css`
            background-color: #006ed3;
          `}
  ${({variant}) =>
          variant === 'secondary' &&
          css`
            background-color: #3d3d3d;
          `}
  &:hover {
    ${({variant}) =>
            variant === 'primary' &&
            css`
              background-color: #0057a3;
            `}
    ${({variant}) =>
            variant === 'secondary' &&
            css`
              background-color: #2b2b2b;
            `}
`;


export const Page = styled.div`
  padding: 3.125em 0;
`;

export const CustomSelect = styled.div`
  position: relative;
  display: inline-block;
  width: 100%;
  margin: 0.825em 0;

  select {
    width: 100%;
    padding: 0.75em 3.125em 0.75em 1.25em;
    border-radius: 0.3125em;
    border: 0.0625em solid rgba(54, 57, 63, 0.44);
    outline: none;
    cursor: pointer;
    font-size: 1.1em;
    font-weight: 700;
    color: #ffffff;
    background-color: #313030;
    box-shadow: 0 0.0625em 0.3125em 0 rgba(77, 73, 73, 0.18);
    transition: all 0.2s ease-in-out;

    //disable default button style
    -webkit-appearance: none;

    //made the menu dropdown not up

    option {
      background-color: #2c2f33;
    }

    &:hover {
      background-color: rgba(35, 39, 42, 0.88);
    }

    & > option {
      color: #292929;
    }

    .select-arrow {
      position: absolute;
      top: 0.75em;
      right: 1.25em;
      width: 0;
      height: 0;
      border-left: 0.625em solid transparent;
      border-right: 0.625em solid transparent;
      border-top: 0.625em solid #ffffff;
      pointer-events: none;
    }
  }
`;

export const TextArea = styled.textarea`
  padding: 0.875em 1em;
  box-sizing: border-box;
  font-size: 1.1em;
  color: #ffffff;
  background-color: #313030;
  border: 0.0625em solid rgba(54, 57, 63, 0.44);
  border-radius: 0.3125em;
  outline: none;
  resize: none;
  width: 100%;
  height: 3em;
  margin: 0.725em 0;
  transition: all 0.2s ease-in-out;

  &:hover {
    background-color: rgba(35, 39, 42, 0.88);
  }

  :focus {
    background-color: rgba(35, 39, 42, 0.88);
  }
`;

export const sideBar = styled.div``;

export const PageTitle = styled.h1`
  font-size: 2.5em;
  font-weight: 700;
  color: #ffffff;
  margin: 0.625em 0;
  //center the text
  text-align: center;

`;

// @ts-ignore
export const Switch = ({isOn, handleToggle, onColor, id}) => {
    //use SwitchCss
    return (
        <>
            <input
                checked={isOn}
                onChange={handleToggle}
                className="react-switch-checkbox"
                id={id}
                type="checkbox"
            />
            <label
                style={{background: isOn && onColor}}
                className="react-switch-label"
                htmlFor={id}
            >
                <span className={`react-switch-button`}/>
            </label>
        </>
    );
};