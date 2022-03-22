import styled from "styled-components/native";

interface IContainerProps {
  variant?: string;
  size?: string;
}

export const Container = styled.Text<IContainerProps>`
  background: ${(props) =>
    props.variant === "error"
      ? "#ffcfcf"
      : props.variant === "warning"
      ? "#fffd9c"
      : "#8DC93E"};
  border: 1px solid
    ${(props) =>
      props.variant === "error"
        ? "#ff6262"
        : props.variant === "warning"
        ? "#fffc62"
        : "#D6ECA6"};
  text-align: center;
  padding: 5px 20px;
  margin-bottom: 15px;
  font-size: ${(props) =>
    !props.size || props.size === "small"
      ? "11px"
      : props.size === "medium"
      ? "15px"
      : props.size === "large"
      ? "20px"
      : "25px"};
  width: 100%;
`;
