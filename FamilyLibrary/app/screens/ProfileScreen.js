import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { useSelector } from "react-redux";
import Screen from "../components/Screen";
import AppHeader from "../components/AppHeader";
import AppText from "../components/AppText";
import colors from "../config/colors";
import ProfileCard from "../components/ProfileCard";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const ProfileScreen = () => {
  const { profile } = useSelector((state) => state.profile);

  return (
    <Screen header={<AppHeader title="Profile" />}>
      <View style={styles.userInfo}>
        <Image
          source={{ uri: "https://picsum.photos/200/200" }}
          style={styles.avatar}
        />
        <AppText style={styles.fullname}>
          {profile.fullname ? profile.fullname : profile.username}
        </AppText>
        <AppText style={styles.booksRead}>Read 67 books</AppText>
      </View>
      <View style={styles.cards}>
        <ProfileCard
          Icon={<MaterialCommunityIcons name={"account-edit-outline"} />}
          title={"Edit profile"}
          RightItem={<TouchableOpacity><AppText>Edit</AppText></TouchableOpacity>}
        />
        <ProfileCard
          Icon={<MaterialCommunityIcons name="bookshelf" />}
          title={"Reading List"}
          RightItem={<TouchableOpacity><AppText>Edit</AppText></TouchableOpacity>}
        />
        <ProfileCard
          Icon={<MaterialCommunityIcons name="bookmark-multiple-outline" />}
           title={"Bookmarks"}
           RightItem={<TouchableOpacity><AppText>Edit</AppText></TouchableOpacity>}
        />
      </View>
    </Screen>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({
  avatar: {
    height: 150,
    width: 150,
    borderRadius: 100
  },
  cards: {
    marginTop: 50,
  },
  fullname: {
    fontWeight: "bold",
    fontSize: 20,
    marginTop: 16,
  },
  booksRead: {
    color: colors.mediumText
  },
  userInfo: {
    alignItems: "center"
  }
});
