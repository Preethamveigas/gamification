import * as React from "react";
import { View, Dimensions, StyleSheet, Text } from "react-native";
import { DangerZone, LinearGradient } from "expo";
import RightSlide from "./CommentDrag";
import Cursor from "./Cursor";
import Labels from "./Label";

const { Animated } = DangerZone;
const { Value, max, add, round, divide } = Animated;

const { width: totalWidth } = Dimensions.get("window");
const count = 5;
const width = totalWidth / count - 20;
const height = width;

export default props => {
  const reset = props;
  const x = new Value(0);
  return (
    <View style={styles.container}>
      <Animated.View
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          width: "100%",
          height,
          borderRadius: 15
        }}
      />
      {/* <Labels size={height} {...{ x, count }} /> */}
      <View
        style={{
          justifyContent: "space-around",
          alignContent: "center",
          alignItems: "center",
          flexDirection: "row",
          padding: 20
        }}
      >
        <Text
          style={{
            justifyContent: "center",
            color: "white",
            alignContent: "center",
            alignItems: "center",
            textAlign: "center",
            fontSize: 20
          }}
        >
          New Features
        </Text>
        <Cursor size={height} {...{ x, count }} reset={reset} />
        <RightSlide size={height} {...{ x, count }} reset={reset} />
        {/* <RestButton  Disable={true} /> */}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: totalWidth,
    height,
    borderRadius: height / 2,
    backgroundColor: "#f1f2f6"
  }
});
