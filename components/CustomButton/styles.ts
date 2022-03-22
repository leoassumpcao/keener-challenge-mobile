import styled from "styled-components/native";

interface IContainerProps {
  type?: string;
}

interface ITextProps {
  type?: string;
}

export const Container = styled.Pressable<IContainerProps>`
  background-color: ${(props) =>
    props.type === undefined || props.type === "PRIMARY"
      ? "#3b71f3"
      : props.type === "ERROR"
      ? "#f33b3e"
      : "transparent"};
  width: 100%;
  padding: ${(props) =>
    props.type === undefined || props.type === "PRIMARY"
      ? "15px"
      : props.type === "ERROR"
      ? "15px"
      : "10px"};
  margin-vertical: 5px;
  align-items: center;
  border-radius: 5px;
  margin-bottom: 15px;
`;

export const Text = styled.Text<ITextProps>`
  font-weight: bold;
  color: ${(props) =>
    props.type === undefined || props.type === "PRIMARY" ? "white" : "gray"};
`;
