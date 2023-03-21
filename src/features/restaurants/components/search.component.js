import React, { useContext, useState, useEffect } from "react";
import { Searchbar } from "react-native-paper";
import styled from "styled-components/native";

import { LocationContext } from "../../../services/location/location.context";

const SearchContainer = styled.View`
  padding: ${(props) => props.theme.space[3]};
`;

export const Search = () => {
  const { keyword, search } = useContext(LocationContext);
  const [searchKeyword, setSearchKeyword] = useState(keyword);
  return (
    <SearchContainer>
      <Searchbar
        placeholder="Search For A Location"
        value={searchKeyword}
        onSubmitEditing={() => {
          search(searchKeyword);
        }}
        onChangeText={setSearchKeyword}
      />
    </SearchContainer>
  );
};
