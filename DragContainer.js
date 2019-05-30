import React from "react";
import {
  StyleSheet,
  View,
  PanResponder,
  Animated,
  Image,
  Dimensions
} from "react-native";
import {
  Container,
  Header,
  Text,
  Content,
  Card,
  CardItem,
  Body
} from "native-base";

import aws from "./assets/aws.jpg";
import gc from "./assets/gc.png";
import anthos from "./assets/anthos.jpg";

import CommentDrag from "./compo/CommentDrag";
import LikeDrag from "./compo/LikeDrag";

// import console = require("console");

const { width, height } = Dimensions.get("window");

// import console = require("console")s;

export default class DragContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      mes: ""
    };

    this.ViewRef = React.createRef();
    this.onLayout = this.onLayout.bind(this);
  }
  onLayout = e => {};
  render() {
    return (
      <View
        style={{
          flex: 1
        }}
      >
        <View
          style={{
            width: width,
            flexDirection: "row",
            justifyContent: "center",
            alignContent: "center",
            height: height / 2
          }}
          onLayout={this.onLayout}
        >
          <Image
            source={anthos}
            style={{
              resizeMode: "contain",
              width: width - 20,
              height: height / 2
            }}
          />
        </View>
        {/* <View style={[styles.row]}>
          <Card
            style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
          >
            <Text>Comment Feature</Text>
            <CommentDrag />
          </Card>
          <View
            style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
          >
            <Text>Like Feature</Text>
            <LikeDrag mes={this.state.mes} />
          </View>
        </View> */}
      </View>
    );
  }
}

let CIRCLE_RADIUS = 30;
const styles = StyleSheet.create({
  mainContainer: {
    flex: 1
  },
  ballContainer: {
    height: 200
  },
  circle: {
    backgroundColor: "skyblue",
    width: CIRCLE_RADIUS * 2,
    height: CIRCLE_RADIUS * 2,
    borderRadius: CIRCLE_RADIUS
  },
  row: {
    flexDirection: "row",
    height: 300
  },
  dropZone: {
    height: 200,
    width: 200,
    backgroundColor: "#00334d"
  },
  text: {
    marginTop: 25,
    marginLeft: 5,
    marginRight: 5,
    textAlign: "center",
    color: "#fff",
    fontSize: 25,
    fontWeight: "bold"
  }
});
