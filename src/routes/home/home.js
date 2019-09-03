import React, { useEffect } from "react";
import { ScrollView } from "react-native";
import { connect } from "react-redux";
import Icon from "react-native-vector-icons/MaterialIcons";

import { LayoutWithFooter, LayoutWithHeader } from "layouts";
import { Container, StatCardList } from "components";
import { CREATE_PARAMETER_ROUTE } from "consts";
import { selectors, fetchParameterNames } from "state-management/parameter";
import { pushRoute } from "state-management/navigation";

const iconSize = 20;
const icon = <Icon name="add-circle" color="white" size={iconSize} />;

type Props = {
  pushRoute: Function,
  fetchParameterNames: Function,
  parameterNames: [string]
};

const Component = ({ parameterNames, ...props }: Props) => {
  useEffect(() => {
    props.fetchParameterNames();
    return () => {};
  }, []);

  const actions = [
    {
      text: "Create new",
      callback: () => props.pushRoute(CREATE_PARAMETER_ROUTE),
      icon
    }
  ];
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
  parameters: Object.values(selectors.entities(state)),
  parameterNames: selectors.parameterNames(state)
});

export default Component
  |> connect(
    mapStateToProps,
    { pushRoute, fetchParameterNames }
  );
