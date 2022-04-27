import react, { Component } from "react";
import { View, Image, TouchableOpacity } from "react-native";
import styles from "./styles";

class Popup extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { imgeCity, onPress } = this.props;
    return (
      <TouchableOpacity onPress={onPress} style={styles.selectedView}>
        <View style={styles.contentSelectedView}>
          <Image style={styles.imageSelectedView} source={{ uri: imgeCity }} />
          {/* <View style={{justifyContent: 'center', alignItems: 'center'}}>
                        <Text style={{fontWeight: 'bold'}}>{item?.city}</Text>
                    </View> */}
        </View>
      </TouchableOpacity>
    );
  }
}

export default Popup;
