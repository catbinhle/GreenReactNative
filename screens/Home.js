import { StyleSheet, Text, View, FlatList, Dimensions } from "react-native";
import React, { useState } from "react";
import data from "../shared/data";
import ItemCity from "../components/ItemCity";

const Home = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const onScrollEnd = (e) => {
    let contentOffset = e.nativeEvent.contentOffset;
    let viewSize = Dimensions.get("screen");
    let pageNum = Math.floor(contentOffset.x / viewSize.width + 0.5);
    setCurrentIndex(pageNum);
  };

  return (
    <View style={styles.container}>
      <FlatList
        keyExtractor={(item) => `${item.id}`}
        data={data}
        centerContent
        pagingEnabled
        horizontal
        onMomentumScrollEnd={onScrollEnd}
        showsHorizontalScrollIndicator={false}
        renderItem={({ item, index }) => {
          return <ItemCity item={item} index={index} />;
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
                  backgroundColor: currentIndex === i ? "black" : "#C0C0C0",
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
  dotContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  dot: {
    height: 10,
    width: 15,
    borderRadius: 15,
    backgroundColor: "black",
    marginLeft: 5,
    marginBottom: 10,
  },
});
