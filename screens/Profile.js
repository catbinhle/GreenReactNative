import {
  StyleSheet,
  View,
  TouchableOpacity,
  Image,
} from "react-native";
import React from "react";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import CustomButton from "../components/CustomButton";

const Profile = (props) => {
  const { navigation, route } = props;
  const { replace } = navigation;
  return (
    
      <View style={styles.container}>
        {/* Khung body */}

        <View style={{ flex: 1, backgroundColor: "#0AA1DD" }}>
          {/* Khung chứa info */}
          <View style={styles.infoContainer}>
            <View style={{ marginTop: "20%" }}>
              <CustomButton iconName="payment" title="Phương thức thanh toán" />
              <CustomButton iconName="person" title="Thông tin cá nhân" />
              <CustomButton iconName="lock-outline" title="Thay đổi mật khẩu" />
              <CustomButton
                iconName="logout"
                title="Thoát tài khoản"
                onPress={() => replace("Login")}
              />
            </View>
          </View>

          {/* Khung hình avatar */}
          <View style={styles.avatarContainer}>
            <Image
              style={styles.avatarImage}
              resizeMode="cover"
              source={{
                uri: "https://scr.vn/wp-content/uploads/2020/07/H%C3%ACnh-m%C3%A8o-c%E1%BB%B1c-cute.jpg",
              }}
            />
            <TouchableOpacity style={styles.btnCamera}>
              <FontAwesome name="camera" size={20} color="white" />
            </TouchableOpacity>
          </View>
        </View>
      </View>

  );
};

export default Profile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  infoContainer: {
    height: "72%",
    width: "100%",
    backgroundColor: "white",
    borderTopRightRadius: 30,
    borderTopLeftRadius: 30,
    position: "absolute",
    bottom: 0,
  },
  avatarContainer: {
    backgroundColor: "white",
    elevation: 5,
    borderRadius: 20,
    height: 100,
    width: 100,
    alignSelf: "center",
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    top: "18%",
  },
  avatarImage: {
    width: "100%",
    height: "100%",
    borderRadius: 20,
  },
  btnCamera: {
    bottom: -5,
    right: -5,
    position: "absolute",
    backgroundColor: "red",
    padding: 5,
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
  },
});
