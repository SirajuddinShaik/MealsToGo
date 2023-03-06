/* eslint-disable prettier/prettier */
import React from "react";
import { View, Text } from "react-native";
import { Card,Paragraph} from "react-native-paper";
import styled from "styled-components/native";

import { colors } from "../../../utils/colors";

const Title=styled.Text`
    color:red
`;

export const RestaurentInfoCard = (restaurant) => {
    const {
        name = "Some Restaurant",
        icon,
        photos = [
            "https://www.foodiesfeed.com/wp-content/uploads/2019/06/top-view-for-box-of-2-burgers-home-made-600x899.jpg",
        ],
        address = "janda chettu Center",
        isOpen = true,
        rating = 4.5,
        isClosedTemporary,
    } = restaurant;
  return (
    <View style={styles.list}>
        <Card>
        <Card.Cover source={{ uri: photos[0]  }} />
    <Card.Content>
      <Title>{name}</Title>
      <Paragraph>{address}</Paragraph>
    </Card.Content>
    </Card>
    </View>
  );
};

const styles = {
  list: {
    flex: 1,
    padding: 16,
    backgroundColor: colors.blue,
  },
};
