import React from "react";
import { ScrollView } from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";

import { LayoutWithFooter, LayoutWithHeader } from "layouts";
import { Container, Text } from "components";

const iconSize = 20;
const loadIcon = <Icon name="add-circle" color="white" size={iconSize} />;

const Component = ({ routeParams: { parameterName } }) => {
  const actions = [
    { text: "Record new value", callback: () => {}, icon: loadIcon }
  ];
  return (
    <LayoutWithHeader>
      <LayoutWithFooter actions={actions}>
        <ScrollView>
          <Container>
            <Text>{parameterName}</Text>
            <Text>Record new value</Text>
          </Container>
        </ScrollView>
      </LayoutWithFooter>
    </LayoutWithHeader>
  );
};

export default Component;
