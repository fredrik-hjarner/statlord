import React from "react";
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

const handleDomainChange = (domain: string) => {};

export default () => {
  return (
    <LayoutWithHeader>
      <LayoutWithFooter>
        <ScrollView>
          <Container>
            <Text>Test</Text>
            <FilterForm onDomainChange={handleDomainChange} />
          </Container>
          <Chart lines={lines} domain="day" />
        </ScrollView>
      </LayoutWithFooter>
    </LayoutWithHeader>
  );
};
