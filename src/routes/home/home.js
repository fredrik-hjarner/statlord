import React from "react";
import { ScrollView } from "react-native";
import { connect } from "react-redux";
import Icon from "react-native-vector-icons/MaterialIcons";

import { LayoutWithFooter, LayoutWithHeader } from "layouts";
import { Container, StatCardList } from "components";
import { selectors, create } from "state-management/parameter";

const iconSize = 20;
const loadIcon = <Icon name="add-circle" color="white" size={iconSize} />;

const Component = ({ parameters }) => {
  const actions = [
    {
      text: "Create new",
      callback: () => create({ name: "test" }),
      icon: loadIcon
    }
  ];
  const parameterNames = parameters.map(p => p.name);
  return (
    <LayoutWithHeader>
      <LayoutWithFooter actions={actions}>
        <ScrollView>
          <Container>
            <StatCardList stats={parameterNames} />
          </Container>
        </ScrollView>
      </LayoutWithFooter>
    </LayoutWithHeader>
  );
};

const mapStateToProps = state => ({
  parameters: Object.values(selectors.entities(state))
});

export default Component
  |> connect(
    mapStateToProps,
    { create }
  );
