import React, { useState } from "react";
import { ScrollView } from "react-native";

import { LayoutWithFooter, LayoutWithHeader } from "layouts";
import { Container, Text, Chart } from "components";
import { keepTrackCsvParser, fileAsString, fillMissingDataPoints } from "utils";
import FilterForm from "./filter-form";

const linesData = keepTrackCsvParser(fileAsString);

const { lineData1, lineData2 } = fillMissingDataPoints(
  linesData[0].data,
  linesData[1].data
);

const lines = [
  {
    name: linesData[0].name,
    color: "blue",
    data: lineData1
  },
  {
    name: linesData[1].name,
    color: "red",
    data: lineData2
  }
];

export default () => {
  const [domain, setDomain] = useState("year");
  return (
    <LayoutWithHeader>
      <LayoutWithFooter>
        <ScrollView>
          <Container>
            <Text>Test</Text>
            <FilterForm initialValues={{ domain }} onDomainChange={setDomain} />
          </Container>
          <Chart lines={lines} domain={domain} />
        </ScrollView>
      </LayoutWithFooter>
    </LayoutWithHeader>
  );
};
