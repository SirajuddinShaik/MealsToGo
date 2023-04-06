import React, { useContext } from "react";
import styled from "styled-components";
import { List, Avatar } from "react-native-paper";

import { SafeArea } from "../../../components/utility/safe-area.component";
import { Spacer } from "../../../components/spacer/spacer.component";
import { Text } from "../../../components/typography/text.component";

import { AuthenticationContext } from "../../../services/authentication/authentication.context";

const SettingsItem = styled(List.Item)`
  padding: ${(props) => props.theme.space[3]};
`;
const setIcon = (props, icon) => (
  <List.Icon {...props} color="black" icon={icon} />
);

const AvatarContainer = styled.View`
  align-items: center;
  background-color: "#2182BD";
`;

const AvatarIcon = styled(Avatar.Icon).attrs({ size: 180, icon: "human" })`
  background-color: #2182bd;
`;

export const SettingsScreen = ({ navigation }) => {
  const { onLogout, user } = useContext(AuthenticationContext);
  return (
    <SafeArea>
      <AvatarContainer>
        <AvatarIcon />
        <Spacer size="large" pos="top">
          <Text varient="caption">{user.email}</Text>
        </Spacer>
      </AvatarContainer>
      <List.Section>
        <SettingsItem
          title="Favourites"
          description="View your Favorites"
          left={(props) => setIcon(props, "heart")}
          onPress={() => navigation.navigate("Favourites")}
        />
        <SettingsItem
          title="Logout"
          left={(props) => setIcon(props, "logout")}
          onPress={onLogout}
        />
      </List.Section>
    </SafeArea>
  );
};
