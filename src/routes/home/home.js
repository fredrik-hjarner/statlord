import React from "react";
import { ScrollView } from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";

import { LayoutWithFooter, LayoutWithHeader } from "layouts";
import { Container, StatCardList } from "components";

const iconSize = 20;
const loadIcon = <Icon name="add-circle" color="white" size={iconSize} />;

const Home = () => {
  const actions = [{ text: "Create new", callback: () => {}, icon: loadIcon }];
  return (
    <LayoutWithHeader>
      <LayoutWithFooter actions={actions}>
        <ScrollView>
          <Container>
            <StatCardList stats={["feel good", "alert/tired"]} />
          </Container>
        </ScrollView>
      </LayoutWithFooter>
    </LayoutWithHeader>
  );
};

export default Home;
