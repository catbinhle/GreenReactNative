import React, { Component } from "react";
import { View, StyleSheet, FlatList } from "react-native";
import ItemTours from "../components/ItemTours";

class ToursPage extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    const { title } = this.props;
    title("Tours");
  }

  _renderItem(item) {
    return <ItemTours item={item} />;
  }

  render() {
    const { param } = this.props;
    return (
      <View style={{ flex: 1 }}>
        <FlatList
          keyExtractor={(item) => `${item.id}`}
          contentContainerStyle={{ paddingBottom: 40, paddingTop: 10 }}
          data={param.tours}
          renderItem={({ item, index }) => {
            return this._renderItem(item);
          }}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({});

export default ToursPage;
