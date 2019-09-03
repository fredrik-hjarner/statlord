import React from "react";
import { ScrollView } from "react-native";
import { connect } from "react-redux";
import Icon from "react-native-vector-icons/MaterialIcons";

import { LayoutWithFooter, LayoutWithHeader } from "layouts";
import { Container, Text } from "components";
import { selectors } from "state-management/parameter";
import Table from "./table";

const iconSize = 20;
const loadIcon = <Icon name="add-circle" color="white" size={iconSize} />;

const Component = ({ parameter, routeParams: { parameterName } }) => {
  const actions = [{ text: "Create new", callback: () => {}, icon: loadIcon }];
  return (
    <LayoutWithHeader>
      <LayoutWithFooter actions={actions}>
        <ScrollView>
          <Container>
            <Text>{parameterName}</Text>
            <Table parameter={parameter} />
          </Container>
        </ScrollView>
      </LayoutWithFooter>
    </LayoutWithHeader>
  );
};

const mapStateToProps = state => ({
  parameter: selectors.entity(state, 0)
});

export default Component |> connect(mapStateToProps);
