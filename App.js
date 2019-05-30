import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import { Constants } from "expo";
import {
  Container,
  Header,
  Left,
  Body,
  Right,
  Button,
  Icon,
  Title
} from "native-base";
import Logo from "./assets/logo.png";
import StatusContainer from "./StatusContainer";
import DragContainer from "./DragContainer";
import Slider from "./compo/Slider";
export default class App extends React.Component {
  render() {
    return (
      <Container style={{ paddingTop: Constants.statusBarHeight }}>
        <Header style={{ borderColor: "red", borderWidth: 1 }}>
          <Left>
            <Button transparent>
              <Image source={Logo} style={{ resizeMode: "contain" }} />
            </Button>
          </Left>
          {/* <Body>
            <Title style={{ color: "red" }}> Header</Title>
          </Body> */}
          <Right>
            <Button transparent>
              <Text>Niveus Solutions</Text>
            </Button>
          </Right>
        </Header>
        {/* <StatusContainer /> */}
        <DragContainer />
        <Slider />
      </Container>
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
