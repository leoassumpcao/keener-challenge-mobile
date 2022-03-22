import styled from "styled-components/native";

export const Logo = styled.Image`
  width: 70%;
  max-width: 300px;
  max-height: 200px;
  height: ${(props) => (props.height ? props.height * 0.25 + "px" : "25%")};
`;
