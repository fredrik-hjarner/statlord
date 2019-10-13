import React from "react";
import { StyleSheet } from "react-native";
import { VictoryLabel } from "victory-native";
import moment from "moment";

type Props = {
  datum: any,
  style: Object
};

const isDay: boolean = (val: number) => {
  const time = moment(val);
  return time.hour() === 0 && time.minute() === 0;
};

const hourAsString: string = (val: number) => moment(val).format("HH:mm");

const dayAsString: string = (val: number) => moment(val).format("D MMM");

export default ({ datum, ...props }: Props) => {
  if (isDay(datum)) {
    return (
      <>
        <VictoryLabel {...props} text={hourAsString(datum)} />
        <VictoryLabel
          {...props}
          text={dayAsString(datum)}
          dy={16}
          style={styles.dayLabel}
        />
      </>
    );
  }
  return <VictoryLabel {...props} text={hourAsString(datum)} />;
};

const styles = StyleSheet.create({
  dayLabel: {
    fontSize: 11,
    opacity: 0.5
  }
});
