import React from "react";
import { SearchInput, Container } from "./styles";

interface SearchBarProps {
  placeholder?: string | undefined;
  onChangeText?: (text: string) => void | Promise<void> | undefined;
  onSubmitEditing?: () => void | Promise<void> | undefined;
}

const SearchBar = (props: SearchBarProps) => {
  return (
    <Container>
      <SearchInput
        style={{ height: 50 }}
        placeholder={props.placeholder}
        onChangeText={props.onChangeText}
        onSubmitEditing={props.onSubmitEditing}
        clearButtonMode={"always"}
      />
    </Container>
  );
};

export default SearchBar;
