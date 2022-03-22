import { useState, useEffect } from "react";
import { TextProps } from "react-native";
import { Container } from "./styles";

interface IMessageProps extends TextProps {
  variant?: "error" | "info" | "warning" | undefined;
  size?: "small" | "medium" | "large" | "xlarge" | undefined;
  timer?: number;
}

const Message = (props: IMessageProps) => {
  const [show, setShow] = useState(true);

  // On componentDidMount set the timer
  useEffect(() => {
    if (props.timer && props.timer > 0) {
      const timeId = setTimeout(() => {
        // After 3 seconds set the show value to false
        setShow(false);
      }, props.timer);

      return () => {
        clearTimeout(timeId);
      };
    }
  }, []);

  // If show is false the component will return null and stop here
  if (!show) {
    return null;
  }

  // If show is true this will be returned
  return (
    <Container variant={props.variant} size={props.size} {...props}>
      {props.children}
    </Container>
  );
};

Message.defaultPros = {
  variant: "info",
};

export default Message;
