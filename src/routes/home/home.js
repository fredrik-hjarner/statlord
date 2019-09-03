import React from "react";
import { ScrollView } from "react-native";
import { connect } from "react-redux";
import Icon from "react-native-vector-icons/MaterialIcons";

import { LayoutWithFooter, LayoutWithHeader } from "layouts";
import { Container, StatCardList } from "components";
import { CREATE_PARAMETER_ROUTE } from "consts";
import { selectors } from "state-management/parameter";
import { pushRoute } from "state-management/navigation";

const iconSize = 20;
const icon = <Icon name="add-circle" color="white" size={iconSize} />;

type Props = {
  pushRoute: Function
};

const Component = ({ parameters, ...props }: Props) => {
  const actions = [
    {
      text: "Create new",
      callback: () => props.pushRoute(CREATE_PARAMETER_ROUTE),
      icon
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
    { pushRoute }
  );
