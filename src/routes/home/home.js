import React, { useEffect } from "react";
import { ScrollView, View } from "react-native";
import { VictoryLine, VictoryChart, VictoryTheme } from "victory-native";

import { LayoutWithFooter, LayoutWithHeader } from "layouts";
import { Container, H1 } from "components";

const Chart = () => {
  const data = [
    { x: 1, y: 2 },
    { x: 2, y: 3 },
    { x: 3, y: 5 },
    { x: 4, y: 4 },
    { x: 5, y: 6 }
  ];
  return (
    <View style={{ borderWidth: 1 }}>
      <VictoryChart theme={VictoryTheme.material}>
        <VictoryLine data={data} />
      </VictoryChart>
    </View>
  );
};

const Home = () => {
  return (
    <LayoutWithHeader>
      <LayoutWithFooter>
        <ScrollView>
          {/* <Container> */}
          <H1>Test</H1>
          <Chart />
          {/* </Container> */}
        </ScrollView>
      </LayoutWithFooter>
    </LayoutWithHeader>
  );
};

export default Home;
