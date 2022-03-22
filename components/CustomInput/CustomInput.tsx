import { TextInputProps } from "react-native";
import { Input } from "./styles";

const CustomInput = (props: TextInputProps) => {
  return <Input {...props} />;
};

export default CustomInput;
