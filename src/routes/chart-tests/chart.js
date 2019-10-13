import React, { useState } from "react";
import { ScrollView } from "react-native";
import { connect } from "react-redux";

import { LayoutWithFooter, LayoutWithHeader } from "layouts";
import { Container, Text, DayChart } from "components";
import { selectors } from "state-management/parameter";
import FilterForm from "./filter-form";
import mocklines from "./mock-data";

const Component = ({ lines }) => {
  // console.log("lines;", lines, "");
  const [domain, setDomain] = useState("month");
  return (
    <LayoutWithHeader>
      <LayoutWithFooter>
        <ScrollView>
          <Container>
            <Text>Test</Text>
            <FilterForm initialValues={{ domain }} onDomainChange={setDomain} />
          </Container>
          <DayChart lines={mocklines} domain={domain} />
        </ScrollView>
      </LayoutWithFooter>
    </LayoutWithHeader>
  );
};

const mapStateToProps = state => ({
  lines: Object.values(selectors.entities(state))
});

export default Component |> connect(mapStateToProps);
