import {
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  ScrollView,
  Button,
  TouchableOpacity,
  Modal,
} from 'react-native';
import React, {useState} from 'react';
import ImageScroll from '../components/ImageScroll';
import ItemRoom from '../components/ItemRoom';
import {Calendar, CalendarList, Agenda} from 'react-native-calendars';
import moment from 'moment';
import DateRangePicker from 'rn-select-date-range';

const {width, height} = Dimensions.get('screen');

const Booking = props => {
  const {route} = props;
  const {type_room, room_pics} = route.params;
  const [isShow, setIsShow] = useState(false);
  const currentDate = moment().format('YYYY-MM-DD');
  const [selectedRange, setRange] = useState({
    firstDate: moment(currentDate).format('DD-MM-YYYY'),
    secondDate: moment(currentDate).add(1, 'days').format('DD-MM-YYYY'),
  });

  const CalendarScreen = () => {
    return (
      <View style={{flex: 1, justifyContent: 'center'}}>
        <TouchableOpacity
          onPress={() => setIsShow(false)}
          style={{
            flex: 1,
            backgroundColor: '#000000aa',
          }}
        />
        <View
          style={{
            width: width * 1,
            position: 'absolute',
            alignSelf: 'center',
            backgroundColor: 'white',
          }}>
          {/* <CalendarList
         
            minDate={currentDate.toString()}
            horizontal
            pagingEnabled
            onDayPress={day => {
              console.log('selected day', day);
              setCheckInOut(moment(day.dateString).format('DD-MM-YYYY'));
            }}
            theme={{
              calendarBackground: 'white',
              todayTextColor: 'red',
              textSectionTitleColor: 'black',
              textMonthFontWeight: 'bold',
              textDayHeaderFontWeight: '300',
              textDayFontSize: 16,
              textMonthFontSize: 18,
              textDayHeaderFontSize: 16,
            }}
          /> */}

          <DateRangePicker
            onSelectDateRange={range => {
              if (range.firstDate === '' || range.secondDate === '') {
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
          <View
            style={{
              position: 'absolute',
              backgroundColor: 'white',
              bottom: 8,
              right: 70,
            }}>
            <Text
              onPress={() => setIsShow(false)}
              style={{
                color: 'black',
                fontSize: 14,
              }}>
              OK
            </Text>
          </View>
        </View>
      </View>
    );
  };

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
          style={styles.calendarContainer}>
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
          style={{justifyContent: 'center', alignItems: 'center'}}
          transparent>
          {CalendarScreen()}
        </Modal>

        {/* Button Book phòng */}
        <View style={{marginHorizontal: 10, marginBottom: 10}}>
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
    backgroundColor: 'white',
  },
  calendarContainer: {
    flexDirection: 'row',
    marginHorizontal: 10,
    marginVertical: 10,
    elevation: 3,
    backgroundColor: 'white',
    borderWidth: StyleSheet.hairlineWidth,
  },
  checkInContainer: {
    flex: 1,
    borderRightWidth: StyleSheet.hairlineWidth,
    borderColor: 'lightgray',
    padding: 10,
  },
  checkOutContainer: {
    flex: 1,
    padding: 10,
  },
  title: {
    color: 'black',
    fontWeight: '700',
  },
  date: {
    color: 'blue',
    fontWeight: 'bold',
    fontSize: 15,
  },
  time: {
    color: 'black',
  },
  selectedDateContainerStyle: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'blue',
    borderRadius: 25,
    padding: 10,
  },
  selectedDateStyle: {
    fontWeight: 'bold',
    color: 'white',
  },
});
