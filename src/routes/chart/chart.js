import React from "react";
import { ScrollView } from "react-native";
import { dropLast } from "ramda";

import { LayoutWithFooter, LayoutWithHeader } from "layouts";
import { Container, Text, Chart } from "components";
import { keepTrackCsvParser, fileAsString } from "utils";

const linesData = keepTrackCsvParser(fileAsString);
console.log("linesData:", linesData, "");

export default () => {
  return (
    <LayoutWithHeader>
      <LayoutWithFooter>
        <ScrollView>
          <Container>
            <Text>Test</Text>
          </Container>
          <Chart lines={dropLast(1, linesData)} />
        </ScrollView>
      </LayoutWithFooter>
    </LayoutWithHeader>
  );
};
