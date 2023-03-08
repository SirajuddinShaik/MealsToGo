import React from "react";
import styled from "styled-components/native";
import { Text, View, Image } from "react-native";
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
    icon = "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/lodging-71.png",
    photos = [
      "https://www.foodiesfeed.com/wp-content/uploads/2019/06/top-view-for-box-of-2-burgers-home-made-600x899.jpg",
    ],
    address = "100 some random street",
    isOpenNow = true,
    rating = 4.6,
    isClosedTemporarily = true,
  } = restaurant;

  const rattingArray = Array.from(new Array(Math.round(rating)));

  const RestDetails = styled(View)`
    flex-direction: row;
  `;
  const IsOpen = styled(View)`
    position: absolute;
    right: 36px;
    padding: ${(props) => props.theme.space[2]} 0;
  `;
  const IsClosedTemporarily = styled(Text)`
    padding: ${(props) => props.theme.space[2]} 0;
    position: absolute;
    right: ${(props) => props.theme.space[5]};
    font-family: ${(props) => props.theme.fonts.heading};
    font-size: ${(props) => props.theme.fontSizes.caption};
    color: ${(props) => props.theme.colors.ui.error};
  `;
  const RestTypeImage = styled(View)`
    position: absolute;
    right: ${(props) => props.theme.space[2]};
    padding: ${(props) => props.theme.space[2]} 0;
  `;
  const Rating = styled(Text)`
    padding: ${(props) => props.theme.space[2]} 0;
  `;

  return (
    <RestaurantCard elevation={5}>
      <RestaurantCardCover key={name} source={{ uri: photos[0] }} />
      <Info>
        <Title>{name}</Title>
        <RestDetails>
          <Rating>
            {rattingArray.map(() => (
              <SvgXml xml={star} height={20} width={20} />
            ))}
          </Rating>

          <IsOpen>
            {isOpenNow && <SvgXml xml={open} height={20} width={20} />}
          </IsOpen>

          {isClosedTemporarily && (
            <IsClosedTemporarily>CLOSED TEMPORARILY</IsClosedTemporarily>
          )}
          <Image source={{ uri: icon }} height={20} />
          <RestTypeImage>
            <Image source={{ uri: icon }} height={20} width={20} />
          </RestTypeImage>
        </RestDetails>
        <Address>{address}</Address>
      </Info>
    </RestaurantCard>
  );
};
