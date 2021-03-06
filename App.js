import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  TouchableHighlight,
  TouchableOpacity
} from "react-native";
import { Constants, DangerZone, Font, LinearGradient } from "expo";
import {
  Ionicons,
  Feather,
  AntDesign,
  SimpleLineIcons
} from "@expo/vector-icons";
import Slider from "react-native-slider";

const { Animated } = DangerZone;
const { Value, max, add, round, divide } = Animated;
import {
  Container,
  Header,
  Left,
  Body,
  Right,
  Button,
  Icon,
  Title,
  Switch,
  Root,
  CardItem,
  Card,
  Toast,
  Footer
} from "native-base";
import Logo from "./assets/logo.png";
import anthosLogo from "./assets/anthoslogo.jpg";
import StatusContainer from "./StatusContainer";
import DragContainer from "./DragContainer";
import Draggitems from "./compo/Slider";

const { width: totalWidth } = Dimensions.get("window");
const count = 5;
const width = totalWidth / count;
const height = width;

const LOAD_TEST = "http://35.224.245.248:1200/enablelike";

import RightDrg from "./compo/CommentDrag";
export default class App extends React.Component {
  // Later on in your component
  state = {
    value: 1,
    loading: true,
    comment: false,
    like: false,
    dislike: false,
    discomm: false,
    reset: false
  };
  async componentDidMount() {
    await Font.loadAsync({
      Helvetica: require("./assets/fonts/Helvetica.ttf"),
      ...Ionicons.font
    });
    this.setState({ loading: false });
  }

  render() {
    const x = new Value(0);
    return (
      <Root>
        <Container
          style={{
            paddingTop: Constants.statusBarHeight
          }}
        >
          <Header style={{ height: 90 }}>
            <Left>
              <Button transparent>
                <Image source={Logo} style={{ resizeMode: "contain" }} />
              </Button>
            </Left>
            {/* <Body>
            <Title style={{ color: "red" }}> APP NAME</Title>
          </Body> */}
            <Right>
              <Image source={anthosLogo} style={{ resizeMode: "cover" }} />
              <TouchableOpacity
                style={{
                  padding: 30,
                  paddingRight: 60,
                  alignContent: "center",
                  alignSelf: "center"
                }}
                onPress={() => {
                  Toast.show({
                    text: "Feature is not enabled",
                    buttonText: "Okay",
                    duration: 5000
                  });
                }}
              >
                <Switch
                  value={false}
                  style={{ backgroundColor: "red", width: 0 }}
                />
              </TouchableOpacity>
            </Right>
          </Header>
          {/* <StatusContainer /> */}
          <View style={{ height: 500 }}>
            <LinearGradient
              colors={["#ba6698", "#ba6698", "#631f47"]}
              style={{
                padding: 30,
                alignItems: "center",
                borderRadius: 5
              }}
            >
              <Text
                style={{
                  position: "absolute",
                  fontSize: 50,
                  fontWeight: "900",
                  fontFamily: "Helvetica",
                  lineHeight: 50,
                  color: "#fff",
                  textAlign: "left",
                  left: 30,
                  top: 30
                }}
              >
                Dynobuild
              </Text>
              <View
                style={{
                  position: "absolute",
                  backgroundColor: "#9fa947",
                  height: 5,
                  width: 80,
                  left: 30,
                  top: 100
                }}
              />
              <Text
                style={{
                  position: "absolute",
                  fontSize: 25,
                  fontWeight: "900",
                  fontFamily: "Helvetica",
                  lineHeight: 50,
                  color: "#fff",
                  textAlign: "left",
                  left: 30,
                  top: 105
                }}
              >
                Drag nd Drop
              </Text>
              <Text
                style={{
                  position: "absolute",
                  fontSize: 25,
                  fontWeight: "900",
                  fontFamily: "Helvetica",
                  lineHeight: 50,
                  color: "#fff",
                  textAlign: "left",
                  left: 30,
                  top: 130
                }}
              >
                Feature
              </Text>
              <View style={{ height: 200 }} />
              <DragContainer />
            </LinearGradient>
          </View>
          <Draggitems reset={this.state.reset} />

          <View
            style={{
              height: 500,
              marginTop: 60,
              marginLeft: 30,
              marginRight: 30
            }}
          >
            <LinearGradient
              colors={["#674198", "#674198", "#674198"]}
              style={{
                padding: 15,
                alignItems: "center",
                borderRadius: 15,
                paddingLeft: 30,
                paddingRight: 30
              }}
            >
              <Text
                style={{
                  position: "absolute",
                  fontSize: 25,
                  fontWeight: "900",
                  lineHeight: 50,
                  color: "#fff",
                  textAlign: "left",
                  left: 0,
                  fontFamily: "Helvetica",
                  paddingLeft: 30,
                  paddingRight: 30
                }}
              >
                CONCURRENT USER
              </Text>
              <View style={{ height: 80 }} />

              <Slider
                value={this.state.value}
                minimumTrackTintColor={"#87ceeb"}
                thumbTintColor={"#fff"}
                minimumValue={1}
                thumbTouchSize={{ width: 80, height: 80 }}
                maximumValue={2000}
                trackStyle={"#fff"}
                animateTransitions={true}
                animationType={"timing"}
                onValueChange={value => {
                  this.setState({ value });
                  axios
                    .get(`${LOAD_TEST},`)
                    .then(res => {})
                    .catch(err => {});
                }}
                style={{ width: "100%", paddingLeft: 30, paddingRight: 30 }}
              />
              <Text
                style={{
                  position: "absolute",
                  fontSize: 25,
                  fontWeight: "900",
                  lineHeight: 50,
                  color: "#fff",
                  textAlign: "left",
                  top: 40,
                  left: 10,
                  fontFamily: "Helvetica",
                  paddingLeft: 30
                }}
              >
                1
              </Text>

              <Text
                style={{
                  position: "absolute",
                  fontSize: 25,
                  fontWeight: "900",
                  lineHeight: 50,
                  color: "#fff",
                  textAlign: "left",
                  top: 40,
                  left: "45%",
                  fontFamily: "Helvetica",
                  paddingRight: 30
                }}
              >
                Users: {Math.round(this.state.value)}
              </Text>

              <Text
                style={{
                  position: "absolute",
                  fontSize: 25,
                  fontWeight: "900",
                  lineHeight: 50,
                  color: "#fff",
                  textAlign: "left",
                  top: 40,
                  right: 10,
                  fontFamily: "Helvetica",
                  paddingRight: 30
                }}
              >
                2000
              </Text>
            </LinearGradient>
          </View>

          {/* <RightDrg size={height} {...{ x, count }} /> */}
          <Footer
            style={{
              position: "absolute",
              bottom: 0,
              height: 80,
              backgroundColor: "#006400"
            }}
          >
            <Body>
              <Right style={{ borderColor: "white", borderRightWidth: 1 }}>
                <TouchableOpacity
                  onPress={() => {
                    alert("Services will Reset");
                    const { like, comment, discomm, dislike } = this.state;
                    this.setState({ reset: true });
                  }}
                  style={{
                    width: "100%",
                    justifyContent: "center",
                    alignContent: "center",
                    alignItems: "center",
                    alignSelf: "center",
                    backgroundColor: "red",
                    height: 80
                  }}
                >
                  <SimpleLineIcons
                    name="reload"
                    size={32}
                    color="#fff"
                    style={{
                      position: "absolute",
                      left: "30%",
                      top: 20
                    }}
                  />
                  <Text
                    style={{
                      fontSize: 25,
                      fontWeight: "900",
                      lineHeight: 50,
                      color: "#fff",
                      textAlign: "left",
                      fontFamily: "Helvetica",
                      paddingLeft: 30,
                      paddingRight: 30
                    }}
                  >
                    Reset
                  </Text>
                </TouchableOpacity>
              </Right>
              <Left>
                <TouchableOpacity
                  onPress={() => {
                    alert("Deploy will be initiated");
                    const { like, comment, discomm, dislike } = this.state;
                  }}
                  style={{
                    width: "100%",
                    justifyContent: "center",
                    alignContent: "center",
                    alignItems: "center",
                    alignSelf: "center",
                    height: 80
                  }}
                >
                  <AntDesign
                    name="rocket1"
                    size={32}
                    color="#fff"
                    style={{
                      position: "absolute",
                      left: "30%",
                      top: 20
                    }}
                  />
                  <Text
                    style={{
                      fontSize: 25,
                      fontWeight: "900",
                      lineHeight: 50,
                      color: "#fff",
                      textAlign: "left",
                      fontFamily: "Helvetica",
                      paddingLeft: 30,
                      paddingRight: 30
                    }}
                  >
                    Deploy
                  </Text>
                </TouchableOpacity>
              </Left>
            </Body>
          </Footer>
        </Container>
      </Root>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center"
  }
});
