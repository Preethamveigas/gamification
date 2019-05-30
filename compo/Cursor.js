import * as React from "react";
import {
  StyleSheet,
  Platform,
  View,
  Button,
  PanResponder,
  Text
} from "react-native";
import { DangerZone } from "expo";
import { Interactable, ReText } from "react-native-redash";
import axios from "axios";
import URI from "../keys";
const { Animated } = DangerZone;
const { Value, round, divide, concat, add } = Animated;

export default class Cursor extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      snapToIndex: [{ x: 50, y: -300 }],
      snapped: false,
      color: "#424234"
    };
    this.dddd = "";
    this.snapps = this.snapps.bind(this);
  }

  onButtonPress() {
    // this.refs["headInstance"].snapTo({ index: this.state.snapToIndex });
    this.setState({
      snapToIndex: (this.state.snapToIndex + 1) % 10
    });
  }
  dragged = ({ nativeEvent }) => {
    // console.log("Drags", nativeEvent.x, nativeEvent.y);

    if (nativeEvent.x < 51 && nativeEvent.y < -300) {
    }
  };

  snapps = ({ nativeEvent }) => {
    console.log("snaps", nativeEvent.x, nativeEvent.y);

    if (nativeEvent.x === 200 && nativeEvent.y === -300) {
      if (!this.state.snapped) {
        this.setState({
          snapped: true
        });
        console.log(`${URI}enablelike`);
        axios
          .post(`${URI}`)
          .then(res => console.log(JSON.stringify(res.data)))
          .catch(err => console.log(JSON.stringify(err.data)));
      }
    }
    if (nativeEvent.x === undefined && nativeEvent.y === -0) {
      if (this.state.snapped) {
        this.setState({
          snapped: false
        });
      }
    }
  };

  render() {
    const { color } = this.state;
    const { size, count, x: animatedValueX } = this.props;
    // const snapPoints = new Array(count)
    //   .fill(0)
    //   .map((e, i) => ({ y: -(i * size) }));
    // const index = round(divide(animatedValueX, size));
    let snapPoints = [{ y: -0 }, { x: 200, y: -300 }];
    // console.log(snapPoints);
    console.log("rendering");
    // console.log(JSON.stringify(this.dddd));
    // console.log(t);

    return (
      <Interactable
        {...{ snapPoints, animatedValueX }}
        style={StyleSheet.absoluteFill}
        onDrag={this.dragged}
        onSnap={this.snapps}
      >
        <Animated.View
          style={{
            ...StyleSheet.absoluteFillObject,
            width: size,
            height: size,
            borderRadius: size / 2,
            backgroundColor: "white",
            elevation: 5,
            shadowColor: "#000",
            shadowOffset: {
              width: 0,
              height: 2
            },
            shadowOpacity: 0.25,
            shadowRadius: 3.84,
            justifyContent: "center",
            alignItems: "center"
          }}
        >
          {
            // For an implementation of ReText on android look at
            // https://bit.ly/2DXZFbS
            <View>
              <Button
                title="Like"
                onPress={this.onButtonPress.bind(this)}
                color={color}
              />
            </View>
          }
        </Animated.View>
      </Interactable>
    );
  }
}
