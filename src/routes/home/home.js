import React, { useEffect } from "react";
import { ScrollView } from "react-native";
import FontAwesome5Icon from "react-native-vector-icons/FontAwesome5";
import FeatherIcon from "react-native-vector-icons/Feather";

import { LayoutWithFooter, LayoutWithHeader } from "layouts";
import { Container, H1 } from "components";

const iconSize = 20;
const loadIcon = <FeatherIcon name="download" color="white" size={iconSize} />;
const saveIcon = <FontAwesome5Icon name="save" color="white" size={iconSize} />;

type Props = {};

const Home = () => {
  /* const actions = [
    { text: "Load", callback: () => {}, icon: loadIcon },
    { text: "Save", callback: () => {}, icon: saveIcon }
  ]; */
  return (
    <LayoutWithHeader>
      <LayoutWithFooter /* actions={actions} */>
        <ScrollView>
          <Container>
            <H1>Test</H1>
          </Container>
        </ScrollView>
      </LayoutWithFooter>
    </LayoutWithHeader>
  );
};

export default Home;
