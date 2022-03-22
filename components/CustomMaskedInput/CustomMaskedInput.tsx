import { styles } from "./styles";
import MaskInput, { MaskInputProps, Masks } from "react-native-mask-input";

const CustomMaskedInput = (props: MaskInputProps) => {
  return <MaskInput {...props} style={[styles.container, props.style]} />;
};

export default CustomMaskedInput;
