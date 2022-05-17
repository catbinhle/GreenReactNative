import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  TextInput,
  Button,
  KeyboardAvoidingView,
} from "react-native";
import React, { useState } from "react";

const Login = (props) => {
  const { navigation } = props;
  const { navigate } = navigation;

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isShow, setIsShow] = useState(true);
  return (
    <KeyboardAvoidingView style={{ flex: 1 }}>
      <View style={styles.container}>
        <View
          style={{
            flex: 1,
            justifyContent: "center",
          }}
        >
          {/* <Image
          resizeMode="cover"
          style={{ height: 200, width: 200 }}
          source={{
            uri: "https://static.vecteezy.com/system/resources/previews/004/759/846/large_2x/cute-panda-with-helmet-and-roadblock-free-vector.jpg",
          }}
        />
        <Text>Xin lỗi quý khách , hiện tại ứng dụng đang bảo trì</Text>
        <Text>Vui lòng quay lại sau</Text>
        <TouchableOpacity
          onPress={() => navigation.navigate("HomeScreen", { screen: "Booking" })}
        >
          <Text style={{ color: "blue", marginTop: 20 }}>
            Quay lại trang Home
          </Text>
        </TouchableOpacity> */}

          {/* username  */}
          <View style={styles.inputText}>
            <TextInput
              placeholder="Username"
              value={username}
              onChangeText={(text) => setUsername(text)}
            />
          </View>
          {/* password  */}
          <View style={styles.inputText}>
            <TextInput
              style={{ width: "90%" }}
              placeholder="Password"
              secureTextEntry={isShow}
              value={password}
              onChangeText={(text) => setPassword(text)}
            />
            <TouchableOpacity onPress={() => setIsShow(!isShow)}>
              {isShow ? <Text>Show</Text> : <Text>Hide</Text>}
            </TouchableOpacity>
          </View>

          <View style={{ marginHorizontal: 50 }}>
            <Button
              onPress={() => {
                navigate("ProfileScreen", { screen: "Profile" });
              }}
              title="Đăng nhập"
            />
          </View>
          <View style={{ alignItems: "center", marginTop: 10 }}>
            <TouchableOpacity>
              <Text style={styles.linkStyle}>Quên mật khẩu ?</Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <Text style={styles.linkStyle}>Đăng ký tài khoản mới</Text>
            </TouchableOpacity>
          </View>

          <Text>tài khoản : {username}</Text>
          <Text>mật khẩu : {password}</Text>
        </View>
      </View>
    </KeyboardAvoidingView>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  inputText: {
    backgroundColor: "lightgray",
    marginHorizontal: 15,
    borderRadius: 10,
    justifyContent: "center",
    padding: 10,
    marginBottom: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  linkStyle: {
    textDecorationLine: "underline",
    marginTop: 5,
  },
});
