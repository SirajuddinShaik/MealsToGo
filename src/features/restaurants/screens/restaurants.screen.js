import React, { useContext } from "react";
import { Searchbar } from "react-native-paper";
import { ActivityIndicator, MD2Colors } from "react-native-paper";
import { StatusBar, FlatList, SafeAreaView, View } from "react-native";
import styled from "styled-components/native";

import { RestaurantInfoCard } from "../components/restaurant-info-card.component";
import { Spacer } from "../../../components/spacer/spacer.component";
import { RestaurantsContext } from "../../../services/restaurants/restaurants.context";
import { SafeArea } from "../../../components/utility/safe-area.component";
import { Search } from "../components/search.component";

const SearchContainer = styled.View`
  padding: ${(props) => props.theme.space[3]};
`;
const LoadingView = styled(View)`
  pasition: absolute;
  top: 50%;
`;

const RestaurantList = styled(FlatList).attrs({
  contentContainerStyle: { padding: 16 },
})``;

export const RestaurantsScreen = () => {
  const { restaurants, isLoading, error } = useContext(RestaurantsContext);
  return (
    <SafeArea>
      <Search />
      {isLoading && (
        <LoadingView>
          <ActivityIndicator
            size={50}
            animating={true}
            color={MD2Colors.blue300}
          />
        </LoadingView>
      )}
      <RestaurantList
        data={restaurants}
        renderItem={({ item }) => {
          return (
            <Spacer position="bottom" size="large">
              <RestaurantInfoCard restaurant={item} />
            </Spacer>
          );
        }}
        keyExtractor={(item) => item.name}
      />
    </SafeArea>
  );
};
