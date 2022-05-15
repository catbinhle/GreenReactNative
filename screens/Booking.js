import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Button,
  TouchableOpacity,
  Modal,
} from "react-native";
import React, { useState } from "react";
import ImageScroll from "../components/ImageScroll";
import ItemRoom from "../components/ItemRoom";
import moment from "moment";
import CalendarView from "../components/CalendarView";

const Booking = (props) => {
  const { route } = props;
  const { type_room, room_pics } = route.params;
  const [isShow, setIsShow] = useState(false);
  const currentDate = moment().format("YYYY-MM-DD");
  const [selectedRange, setRange] = useState({
    firstDate: moment(currentDate).format("DD-MM-YYYY"),
    secondDate: moment(currentDate).add(1, "days").format("DD-MM-YYYY"),
  });

  return (
    <ScrollView nestedScrollEnabled style={styles.container}>
      <View style={styles.imageContainer}>
        <ImageScroll data_images={room_pics} />
      </View>
      <View style={styles.infoContainer}>
        {type_room.map((item, index) => {
          return <ItemRoom key={index} index={index} item={item} />;
        })}

        {/* Tùy chỉnh lịch */}
        <TouchableOpacity
          onPress={() => {
            setIsShow(true);
          }}
          style={styles.calendarContainer}
        >
          <View style={styles.checkInContainer}>
            <Text style={styles.title}>Nhận phòng</Text>
            <Text style={styles.date}>Ngày {selectedRange.firstDate}</Text>
            <Text style={styles.time}>Từ 14:00</Text>
          </View>
          <View style={styles.checkOutContainer}>
            <Text style={styles.title}>Trả phòng</Text>
            <Text style={styles.date}>Ngày {selectedRange.secondDate}</Text>
            <Text style={styles.time}>Từ 12:00</Text>
          </View>
        </TouchableOpacity>
        <Modal
          animationType="slide"
          visible={isShow}
          style={{ justifyContent: "center", alignItems: "center" }}
          transparent
        >
          <CalendarView
            setRange={setRange}
            currentDate={currentDate}
            onPress={() => setIsShow(false)}
          />
        </Modal>

        {/* Button Book phòng */}
        <View style={{ marginHorizontal: 10, marginBottom: 10 }}>
          <Button title="Đặt ngay hôm nay" />
        </View>
      </View>
    </ScrollView>
  );
};

export default Booking;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  imageContainer: {
    height: 300,
  },
  infoContainer: {
    flex: 1,
    backgroundColor: "white",
  },
  calendarContainer: {
    flexDirection: "row",
    marginHorizontal: 10,
    marginVertical: 10,
    elevation: 3,
    backgroundColor: "white",
    borderWidth: StyleSheet.hairlineWidth,
  },
  checkInContainer: {
    flex: 1,
    borderRightWidth: StyleSheet.hairlineWidth,
    borderColor: "lightgray",
    padding: 10,
  },
  checkOutContainer: {
    flex: 1,
    padding: 10,
  },
  title: {
    color: "black",
    fontWeight: "700",
  },
  date: {
    color: "blue",
    fontWeight: "bold",
    fontSize: 15,
  },
  time: {
    color: "black",
  },
  selectedDateContainerStyle: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "blue",
    borderRadius: 25,
    padding: 10,
  },
  selectedDateStyle: {
    fontWeight: "bold",
    color: "white",
  },
});
