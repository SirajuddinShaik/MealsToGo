import React from "react";
import { StatusBar } from "react-native";
import { Searchbar } from "react-native-paper";
import styled from "styled-components/native";

import { RestaurentInfoCard } from "../components/restaurant-info-card.component";
import { spacing } from "../../../utils/sizes";

const Safe1 = styled.SafeAreaView`
  flex: 1;
  ${StatusBar.currentHeight && `marginTop :${StatusBar.currentHeight}`};
`;
const Search1 = styled.View`
  padding: ${spacing.md};
`;

export const RestaurentsScreen = () => {
  return (
    <Safe1>
      <Search1>
        <Searchbar />
      </Search1>
      <RestaurentInfoCard />
    </Safe1>
  );
};
