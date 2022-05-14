import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';

const Login = () => {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Image
        resizeMode="cover"
        style={{height: 200, width: 200}}
        source={{
          uri: 'https://static.vecteezy.com/system/resources/previews/004/759/846/large_2x/cute-panda-with-helmet-and-roadblock-free-vector.jpg',
        }}
      />
      <Text>Xin lỗi quý khách , hiện tại ứng dụng đang bảo trì</Text>
      <Text>Vui lòng quay lại sau</Text>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
