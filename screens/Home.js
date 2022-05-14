import {StyleSheet, Text, View, FlatList, Dimensions} from 'react-native';
import React, {useState} from 'react';
import data from '../shared/data';
import Item from '../components/ItemCity';

const Home = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const onScrollEnd = e => {
    let contentOffset = e.nativeEvent.contentOffset;
    let viewSize = Dimensions.get('screen');
    let pageNum = Math.floor(contentOffset.x / viewSize.width + 0.5);
    setCurrentIndex(pageNum);
  };

  return (
    <View style={styles.container}>
      <FlatList
        keyExtractor={item => `${item.id}`}
        data={data}
        centerContent
        pagingEnabled
        horizontal
        onMomentumScrollEnd={onScrollEnd}
        showsHorizontalScrollIndicator={false}
        renderItem={({item, index}) => {
          return <Item item={item} index={index} />;
        }}
      />
      <View style={styles.dotContainer}>
        {data.map((e, i) => {
          return (
            <View
              key={i.toString()}
              style={[
                styles.dot,
                {
                  backgroundColor: currentIndex === i ? 'black' : '#C0C0C0',
                  width: currentIndex === i ? 25 : 15,
                },
              ]}
            />
          );
        })}
      </View>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  desContainer: {
    height: '52%',
    backgroundColor: '#000000aa',
    borderTopRightRadius: 15,
    borderTopLeftRadius: 15,
    marginHorizontal: 10,
    top: -50,
  },
  dotContainer: {
    alignSelf: 'center',
    // justifyContent: 'center',
    // alignItems: 'center',
    flexDirection: 'row',
    position: 'absolute',
    bottom: 0,
  },
  dot: {
    height: 10,
    width: 15,
    borderRadius: 15,
    backgroundColor: 'black',
    marginLeft: 5,
    marginBottom: 10,
  },
});
