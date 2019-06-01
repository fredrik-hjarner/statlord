import React from "react";
import { ScrollView } from "react-native";

import { LayoutWithFooter, LayoutWithHeader } from "layouts";
import { Container, Text, Chart } from "components";
import { keepTrackCsvParser, fileAsString, fillMissingDataPoints } from "utils";

const linesData = keepTrackCsvParser(fileAsString);

const { lineData1, lineData2 } = fillMissingDataPoints(
  linesData[0].data,
  linesData[1].data
);

const lines = [
  {
    name: linesData[0].name,
    data: lineData1
  },
  {
    name: linesData[1].name,
    data: lineData2
  }
];

export default () => {
  return (
    <LayoutWithHeader>
      <LayoutWithFooter>
        <ScrollView>
          <Container>
            <Text>Test</Text>
          </Container>
          <Chart lines={lines} />
        </ScrollView>
      </LayoutWithFooter>
    </LayoutWithHeader>
  );
};
