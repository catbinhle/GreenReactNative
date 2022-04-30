import React, { Component } from "react";
import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  Touchable,
  ScrollView,
  Pressable,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { HomePage, ToursPage, DetailsPage } from "../screens";

const namePage = ["Home", "Tours"];

class NavPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "Home",
      namePage: "Home",
      param: null,
    };
  }

  _onGoTo(namePage, param) {
    this.setState({
      namePage: namePage,
      param: param,
    });
  }

  _renderHeader() {
    return (
      <View style={styles.headerContainer}>
        <View
          style={{
            flex: 1,
            justifyContent: "center",
            paddingHorizontal: 5,
          }}
        >
          {this.state.namePage === "Details" && (
            <TouchableOpacity
              style={{ width: 25 }}
              onPress={() => {
                this.setState({ namePage: "Home" });
              }}
            >
              <Ionicons name="chevron-back" size={24} color="black" />
            </TouchableOpacity>
          )}
        </View>

        <View
          style={{
            flex: 3,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Text style={styles.txtHeader}>{this.state.title}</Text>
        </View>
        <View
          style={{
            flex: 1,
            justifyContent: "center",
          }}
        />
      </View>
    );
  }

  _renderBottomTab() {
    return (
      <View
        style={[
          styles.bottomTabContainer,
          {height: this.state.namePage === "Details" ? 0 : undefined },
        ]}
      >
        {namePage.map((e, index) => {
          return (
            <TouchableOpacity
              onPress={() => {
                this.setState({ namePage: e });
              }}
              key={index}
              style={
                this.state.namePage === e
                  ? styles.btnActive
                  : styles.btnInactive
              }
            >
              <Text
                style={
                  this.state.namePage === e
                    ? { ...styles.txtBtn, color: "white" }
                    : styles.txtBtn
                }
              >
                {e}
              </Text>
            </TouchableOpacity>
          );
        })}
      </View>
    );
  }

  _renderBody() {
    const { namePage, param } = this.state;
    return (
      <View style={styles.containerBody}>
        {namePage === "Home" && (
          <HomePage
            title={(title) => this.setState({ title: title })}
            onGoTo={(namePage, param) => this._onGoTo(namePage, param)}
          />
        )}
        {namePage === "Tours" && (
          <ToursPage title={(title) => this.setState({ title: title })} />
        )}
        {namePage === "Details" && (
          <DetailsPage
            title={(title) => this.setState({ title: title })}
            param={param}
          />
        )}
      </View>
    );
  }

  render() {
    return (
      <View style={{ flex: 1 }}>
        {this._renderHeader()}
        {this._renderBody()}
        {this._renderBottomTab()}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  containerBody: {
    flex: 1,
  },
  bottomTabContainer: {
    backgroundColor: "white",
    flexDirection: "row",
    position: "absolute",
    bottom: 0,
    justifyContent: "space-between",
  },
  btnActive: {
    flex: 1,
    height: 40,
    backgroundColor: "gray",
    justifyContent: "center",
    alignItems: "center",
    borderTopWidth: 1,
  },
  btnInactive: {
    flex: 1,
    height: 40,
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center",
    borderTopWidth: 1,
  },
  txtBtn: {
    color: "gray",
    fontSize: 18,
  },
  headerContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    height: 40,
    borderBottomWidth: 1,
  },
  txtHeader: {
    fontSize: 18,
    fontWeight: "bold",
  },
});
export default NavPage;
