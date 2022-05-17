import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
  Button,
} from "react-native";
import React, { useState } from "react";
import { Ionicons } from "@expo/vector-icons";
import IconSocial from "../components/IconSocial";

const Login = (props) => {
  const { navigation } = props;
  const { navigate, replace } = navigation;

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isShow, setIsShow] = useState(true);
  return (
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
        <View style={styles.inputTextContainer}>
          <TextInput
            style={styles.inputText}
            placeholder="Username"
            value={username}
            onChangeText={(text) => setUsername(text)}
          />
        </View>
        {/* password  */}
        <View style={styles.inputTextContainer}>
          <TextInput
            style={styles.inputText}
            placeholder="Password"
            secureTextEntry={isShow}
            value={password}
            onChangeText={(text) => setPassword(text)}
          />
          <TouchableOpacity onPress={() => setIsShow(!isShow)}>
            <Ionicons
              name={isShow ? "eye-off-outline" : "eye-outline"}
              size={24}
            />
          </TouchableOpacity>
        </View>

        <View style={{ marginHorizontal: 50 }}>
          <Button
            onPress={() => {
              replace("Home");
            }}
            title="Đăng nhập"
          />
        </View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "center",
            marginVertical: 10,
          }}
        >
          <TouchableOpacity>
            <Text style={styles.linkStyle}>Quên mật khẩu?</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={[styles.linkStyle, { marginLeft: 5 }]}>
              Đăng ký tài khoản
            </Text>
          </TouchableOpacity>
        </View>

        <View
          style={{
            height: 0.5,
            width: "100%",
            backgroundColor: "black",
          }}
        />

        <Text style={{ alignSelf: "center", marginVertical: 10 }}>
          Hoặc đăng nhập với
        </Text>
        <View style={{ flexDirection: "row", alignSelf: "center" }}>
          <IconSocial nameIcon="facebook" color="#4267B2" />
          <IconSocial nameIcon="google" color="#DB4437" />
          <IconSocial nameIcon="twitter" color="#1DA1F2" />
        </View>
      </View>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  inputTextContainer: {
    backgroundColor: "white",
    marginHorizontal: 15,
    borderRadius: 10,
    justifyContent: "center",
    padding: 10,
    marginBottom: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    elevation: 3,
  },
  linkStyle: {
    textDecorationLine: "underline",
    color: "blue",
    fontStyle: "italic",
  },
  inputText: {
    flex: 1,
  },
  iconContainer: {},
});
