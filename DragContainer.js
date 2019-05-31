import React from "react";

import { StyleSheet, View, Image, Dimensions } from "react-native";
import { Text, Content, Card, CardItem, Body } from "native-base";
import { LinearGradient } from "expo";

import azure from "./assets/azure.png";
import gc from "./assets/gcp.png";
import aws from "./assets/aws.png";

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
          flexDirection: "row",
          width: "100%",

          justifyContent: "space-around"
        }}
      >
        <View style={{ flex: 1, paddingRight: 15 }}>
          <Card>
            <CardItem header style={{ height: 55, justifyContent: "flex-end" }}>
              <Text>On-Prem</Text>
              {/* <Text>Feature1</Text> */}
            </CardItem>
            <CardItem>
              <Body style={{ height: 80 }} />
            </CardItem>
            <CardItem footer>
              <Text>Feature</Text>
            </CardItem>
          </Card>
        </View>
        {/* Card Two */}
        <View
          style={{
            marginTop: -20,
            flex: 2,
            shadowOffset: {
              width: 0,
              height: 11
            },
            shadowOpacity: 0.55,
            shadowRadius: 14.78,

            elevation: 22
          }}
        >
          <View style={{ backgroundColor: "orange", flex: 1 }} />
          <LinearGradient
            colors={["rgba(0,0,0,0.8)", "transparent"]}
            style={{
              position: "absolute",
              left: 0,
              right: 0,
              top: 10,
              height: 250,
              shadowOffset: {
                width: 0,
                height: 11
              },
              shadowOpacity: 0.55,
              shadowRadius: 14.78,

              elevation: 22
            }}
          />
          <Card>
            <CardItem
              header
              style={{
                justifyContent: "center",
                alignContent: "center"
              }}
            >
              <Image
                source={gc}
                style={{
                  resizeMode: "contain",
                  width: 50,
                  height: 50,
                  position: "absolute",
                  top: 10,
                  right: 10
                }}
              />
              <Text>Drop Here</Text>
            </CardItem>
            <CardItem>
              <Body style={{ height: 140 }} />
            </CardItem>
            <CardItem
              footer
              style={{
                justifyContent: "center",
                alignContent: "center"
              }}
            >
              <Text>
                <Text>Drop To the Box</Text>
              </Text>
            </CardItem>
          </Card>
        </View>
        <View style={{ flex: 1, paddingLeft: 15 }}>
          <Card>
            <CardItem header style={{ height: 55, justifyContent: "flex-end" }}>
              <Text>Other Cloud</Text>
            </CardItem>
            <CardItem>
              <Body style={{ height: 100 }} />
            </CardItem>
            <CardItem footer>
              <Text>Feature</Text>
            </CardItem>
          </Card>
        </View>
      </View>
    );
  }
}

// <Card
// style={{
//   flex: 1,
//   alignContent: "center",
//   alignItems: "center",
//   alignSelf: "center",
//   justifyContent: "center"
// }}
// >
// <CardItem
//   style={{
//     width: width,
//     flexDirection: "row",
//     justifyContent: "center",
//     alignContent: "center",
//     height: height / 2
//   }}
//   onLayout={this.onLayout}
// >
//   <Image
//     source={anthos}
//     style={{
//       resizeMode: "contain",
//       width: width - 100,
//       height: height / 2
//     }}
//   />
// </CardItem>
// </Card>

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

/* <CardItem
          style={{
            height: 100,
            width: 500,
            justifyContent: "center",
            alignContent: "center",
            alignItems: "center",
            alignSelf: "center",
            backgroundColor: "#fe5f55",
            borderRadius: 50,

            marginTop: 50,
            elevation: 5,
            shadowColor: "#000",
            shadowOffset: {
              width: 0,
              height: 2
            },
            shadowOpacity: 0.25,
            shadowRadius: 3.84
          }}
        /> */
/* <View style={[styles.row]}>
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
        </View> */
