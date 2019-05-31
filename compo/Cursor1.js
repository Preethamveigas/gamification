import * as React from "react";
import { StyleSheet, View, Button, Text, PanResponder } from "react-native";
import { DangerZone } from "expo";
import { Interactable } from "react-native-redash";
import { Toast } from "native-base";

import { Feather } from "@expo/vector-icons";

import axios from "axios";
const Like_URI = "http://35.224.245.248:1200/enablelike";
const disLike_URI = "http://35.224.245.248:1200/disablelike";

const { Animated } = DangerZone;

export default class Cursor1 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      snapToIndex: [{ x: 50, y: -300 }],
      snapped: false,
      color: "#fff",
      backgroundColor: "#fe5f55",
      like: "like /off"
    };
    this.dddd = "";
    this.snapps = this.snapps.bind(this);
  }

  componentWillReceiveProps() {
    const { reset } = this.props.reset;
  }

  componentDidUpdate() {}

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
    if (nativeEvent.x === 50 && nativeEvent.y === -260) {
      if (!this.state.snapped) {
        console.log(`${Like_URI}`, "like get request");
        this.setState({
          snapped: true,
          backgroundColor: "green",
          color: "white",
          like: "Like /On"
        });

        // Toast.show({
        //   text: "Deployemnt Initiated",
        //   buttonText: "Okay",
        //   duration: 5000
        // });
        axios
          .get(`${Like_URI}`)
          .then(res => {})
          .catch(err => {});
      }
    }

    if (nativeEvent.x === undefined && nativeEvent.y === -0) {
      if (this.state.snapped) {
        this.setState({
          snapped: false,
          backgroundColor: "#fe5f55",
          color: "#fff",
          like: "Like /off"
        });
        console.log(`${disLike_URI}`, "like disable get request");
        axios
          .get(`${disLike_URI}`)
          .then(res => console.log(JSON.stringify(res)))
          .catch(err => console.log(JSON.stringify(err)));
      }
    }
  };

  render() {
    const { color } = this.state;
    const { size, count, x: animatedValueX, reset } = this.props;
    // const snapPoints = new Array(count)
    //   .fill(0)
    //   .map((e, i) => ({ y: -(i * size) }));
    // const index = round(divide(animatedValueX, size));
    let snapPoints = [{ y: -0 }, { x: 50, y: -260 }];
    // console.log(snapPoints);
    // console.log("rendering");
    // console.log(JSON.stringify(this.dddd));
    // console.log(t);
    console.log(reset.reset);
    return reset.reset ? (
      <Interactable
        {...{ snapPoints, animatedValueX }}
        style={[
          {
            position: "absolute",
            left: 200,
            bottom: 25
          }
        ]}
        onDrag={this.dragged}
        onSnap={this.snapps}
      >
        <Animated.View
          style={{
            ...StyleSheet.absoluteFillObject,
            width: size,
            height: size,
            borderRadius: size / 2,
            elevation: 5,
            shadowColor: "#000",
            shadowOffset: {
              width: 0,
              height: 2
            },
            shadowOpacity: 0.25,
            shadowRadius: 3.84,
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: this.state.backgroundColor
          }}
        >
          {
            // For an implementation of ReText on android look at
            // https://bit.ly/2DXZFbS
            <View
              style={{
                justifyContent: "center",
                alignItems: "center",
                paddingTop: 10
              }}
            >
              <Feather name="thumbs-up" size={60} color="white" />
              <Button
                title={""}
                onPress={this.onButtonPress.bind(this)}
                color={color}
                style={{ justifyContent: "center", alignItems: "cent" }}
              />
            </View>
          }
        </Animated.View>
      </Interactable>
    ) : (
      <Interactable
        snapPoints={[{ y: -0 }, { x: 50, y: -260 }]}
        style={[
          {
            position: "absolute",
            left: 200,
            bottom: 25
          }
        ]}
        onDrag={this.dragged}
        onSnap={this.snapps}
      >
        <Animated.View
          style={{
            ...StyleSheet.absoluteFillObject,
            width: size,
            height: size,
            borderRadius: size / 2,
            elevation: 5,
            shadowColor: "#000",
            shadowOffset: {
              width: 0,
              height: 2
            },
            shadowOpacity: 0.25,
            shadowRadius: 3.84,
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: this.state.backgroundColor
          }}
        >
          {
            // For an implementation of ReText on android look at
            // https://bit.ly/2DXZFbS
            <View
              style={{
                justifyContent: "center",
                alignItems: "center",
                paddingTop: 10
              }}
            >
              <Feather name="thumbs-up" size={60} color="white" />
              <Button
                title={""}
                onPress={this.onButtonPress.bind(this)}
                color={color}
                style={{ justifyContent: "center", alignItems: "cent" }}
              />
            </View>
          }
        </Animated.View>
      </Interactable>
    );
  }
}
