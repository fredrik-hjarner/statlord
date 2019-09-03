import React from "react";
import { ScrollView } from "react-native";
import { connect } from "react-redux";
import { submit } from "redux-form";
import Icon from "react-native-vector-icons/MaterialIcons";

import { LayoutWithFooter, LayoutWithHeader } from "layouts";
import { Container, Text, H1, Padding } from "components";
import { goBack } from "state-management/navigation";
import Form from "./form";

const iconSize = 20;
// TODO: better icons.
const cancelIcon = <Icon name="add-circle" color="white" size={iconSize} />;
const createIcon = <Icon name="add-circle" color="white" size={iconSize} />;

type Props = {
  goBack: Function,
  submit: Function
};

const Component = (props: Props) => {
  const actions = [
    { text: "Cancel", callback: props.goBack, icon: cancelIcon },
    {
      text: "Create",
      callback: () => props.submit("create-parameter-form"),
      icon: createIcon
    }
  ];

  return (
    <LayoutWithHeader>
      <LayoutWithFooter actions={actions}>
        <ScrollView>
          <Container>
            <H1>Create parameter</H1>
            <Padding />
            <Text>Name:</Text>
            <Form />
          </Container>
        </ScrollView>
      </LayoutWithFooter>
    </LayoutWithHeader>
  );
};

export default Component
  |> connect(
    null,
    { goBack, submit }
  );
