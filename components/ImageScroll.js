import {
  StyleSheet,
  Text,
  View,
  Image,
  FlatList,
  Dimensions,
} from 'react-native';
import React, {useState} from 'react';

const {width, height} = Dimensions.get('screen');

const ImageScroll = props => {
  const {data_images} = props;
  const [currentIndex, setCurrentIndex] = useState(0);

  const onScrollEnd = e => {
    let contentOffset = e.nativeEvent.contentOffset;
    let viewSize = Dimensions.get('screen');
    let pageNum = Math.floor(contentOffset.x / viewSize.width + 0.5);
    setCurrentIndex(pageNum);
  };

  return (
    <View style={styles.imageStyle}>
      <FlatList
        showsHorizontalScrollIndicator={false}
        onMomentumScrollEnd={onScrollEnd}
        pagingEnabled
        data={data_images}
        horizontal
        renderItem={({item, index}) => {
          return <Image style={styles.imageStyle} source={item} />;
        }}
      />
      <View style={styles.totalPics}>
        <Text style={{color: 'white', fontSize: 16}}>
          {currentIndex + 1}/{data_images.length}
        </Text>
      </View>
    </View>
  );
};

export default ImageScroll;

const styles = StyleSheet.create({
  imageStyle: {
    height: 300,
    width: width,
  },
  totalPics: {
    backgroundColor: '#000000aa',
    width: 60,
    height: 30,
    position: 'absolute',
    bottom: 10,
    right: 10,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
  },
});
