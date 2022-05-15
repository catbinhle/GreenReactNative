import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import React from "react";
import DateRangePicker from "rn-select-date-range";

const { width, height } = Dimensions.get("screen");

const CalendarView = (props) => {
  const { setRange, currentDate, onPress } = props;
  return (
    <View style={{ flex: 1, justifyContent: "center" }}>
      <TouchableOpacity onPress={onPress} style={styles.overlayBackground} />
      <View style={styles.calendarContainer}>
        <DateRangePicker
          onSelectDateRange={(range) => {
            if (range.firstDate === "" || range.secondDate === "") {
              return;
            }
            setRange(range);
          }}
          blockSingleDateSelection={true}
          responseFormat="DD-MM-YYYY"
          minDate={currentDate}
          selectedDateContainerStyle={styles.selectedDateContainerStyle}
          selectedDateStyle={styles.selectedDateStyle}
        />
        <View style={styles.btnOK}>
          <Text onPress={onPress} style={styles.txtOK}>
            OK
          </Text>
        </View>
      </View>
    </View>
  );
};

export default CalendarView;

const styles = StyleSheet.create({
  btnOK: {
    position: "absolute",
    backgroundColor: "white",
    bottom: 8,
    right: 70,
  },
  txtOK: {
    color: "black",
    fontSize: 14,
  },
  calendarContainer: {
    width: width * 1,
    position: "absolute",
    alignSelf: "center",
    backgroundColor: "white",
  },
  overlayBackground: {
    flex: 1,
    backgroundColor: "#000000aa",
  },
});
