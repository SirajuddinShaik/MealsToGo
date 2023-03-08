import React from "react";
import styled from "styled-components/native";
import { Text, View } from "react-native";
import { Card } from "react-native-paper";
import { SvgXml } from "react-native-svg";

import star from "../../../../assets/star";
import open from "../../../../assets/open";

const RestaurantCard = styled(Card)`
  background-color: ${(props) => props.theme.colors.bg.primary};
`;

const RestaurantCardCover = styled(Card.Cover)`
  padding: ${(props) => props.theme.space[3]};
  background-color: ${(props) => props.theme.colors.bg.primary};
`;

const Info = styled(View)`
  padding: ${(props) => props.theme.space[3]};
`;

const Address = styled(Text)`
  font-family: ${(props) => props.theme.fonts.body} 
  font-size: ${(props) => props.theme.fontSizes.caption}
`;

const Title = styled(Text)`
  font-family: ${(props) => props.theme.fonts.heading} 
  font-size: ${(props) => props.theme.fontSizes.body}
  color: ${(props) => props.theme.colors.ui.primary};
`;

export const RestaurantInfoCard = ({ restaurant = {} }) => {
  const {
    name = "Some Restaurant",
    icon,
    photos = [
      "https://www.foodiesfeed.com/wp-content/uploads/2019/06/top-view-for-box-of-2-burgers-home-made-600x899.jpg",
    ],
    address = "100 some random street",
    isOpenNow = true,
    rating = 4.6,
    isClosedTemporarily,
  } = restaurant;

  const rattingArray = Array.from(new Array(Math.round(rating)));

  const Rating = styled(View)`
    flex-direction: row;
    padding: ${(props) => props.theme.space[2]} 0;
  `;
  const IsOpen = styled(View)`
    position: absolute;
    right: ${(props) => props.theme.space[2]};
  `;
  return (
    <RestaurantCard elevation={5}>
      <RestaurantCardCover key={name} source={{ uri: photos[0] }} />
      <Info>
        <Title>{name}</Title>
        <Rating>
          {rattingArray.map(() => (
            <SvgXml xml={star} height={20} width={20} />
          ))}
          <IsOpen>
            {isOpenNow && <SvgXml xml={open} height={20} width={20} />}
          </IsOpen>
        </Rating>
        <Address>{address}</Address>
      </Info>
    </RestaurantCard>
  );
};
