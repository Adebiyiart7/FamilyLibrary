import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  useWindowDimensions,
  View
} from "react-native";
import React from "react";
import { useSelector } from "react-redux";
import Screen from "../components/Screen";
import AppHeader from "../components/AppHeader";
import AppText from "../components/AppText";
import colors from "../config/colors";
import Card1 from "../components/Card1";
import { MaterialCommunityIcons, Fontisto } from "@expo/vector-icons";
import routes from "../config/routes";

const ProfileScreen = ({ navigation }) => {
  const { profile } = useSelector((state) => state.profile);
  const { width: screenWidth } = useWindowDimensions();

  return (
    <Screen
      style={{ backgroundColor: colors.primaryColor }}
      removeWall
      scrollable={false}
      header={
        <AppHeader
          title="Profile"
          textColor={colors.white}
          style={{ backgroundColor: colors.primaryColor }}
        />
      }
    >
      <View style={styles.userInfo}>
        <View style={styles.user}>
          <Image
            source={{ uri: "https://picsum.photos/200/200" }}
            style={styles.avatar}
          />
          <View style={{ marginLeft: 16 }}>
            <AppText style={styles.fullname}>Adeeyo Joseph Adebiyi</AppText>
            <AppText style={styles.username}>{profile.username}</AppText>
          </View>
        </View>
        <View style={styles.moreInfo}>
          <View style={styles.moreInfoTextsContainer}>
            <AppText style={styles.moreInfoText}>167</AppText>
            <AppText style={[styles.moreInfoSubText]}>Books Read</AppText>
          </View>
          <View style={styles.moreInfoTextsContainer}>
            <AppText style={styles.moreInfoText}>657</AppText>
            <AppText style={[styles.moreInfoSubText]}>Books Read</AppText>
          </View>
          <View style={styles.moreInfoTextsContainer}>
            <AppText style={styles.moreInfoText}>869</AppText>
            <AppText style={[styles.moreInfoSubText]}>Books Read</AppText>
          </View>
        </View>
        <View style={[styles.curve, { width: screenWidth }]} />
      </View>

      <ScrollView showsVerticalScrollIndicator={false} style={styles.cards}>
        <Card1
          RightItem={
            <MaterialCommunityIcons
              name="chevron-right"
              size={22}
              color={colors.mediumText}
            />
          }
          Icon={
            <MaterialCommunityIcons
              size={22}
              color={colors.primaryColor}
              name={"account-edit"}
            />
          }
          title={"Edit Profile"}
        />
        <Card1
          RightItem={
            <MaterialCommunityIcons
              name="chevron-right"
              size={22}
              color={colors.mediumText}
            />
          }
          Icon={
            <MaterialCommunityIcons
              size={22}
              color={colors.primaryColor}
              name="bookshelf"
            />
          }
          title={"Reading List"}
        />
        <Card1
          onPres
          RightItem={
            <MaterialCommunityIcons
              name="chevron-right"
              size={22}
              color={colors.mediumText}
            />
          }
          s={() => navigation.navigate(routes.BOOKMARKS)}
          Icon={
            <MaterialCommunityIcons
              size={22}
              color={colors.primaryColor}
              name="bookmark-multiple"
            />
          }
          title={"Bookmarks"}
        />
        <Card1
          onPres
          RightItem={
            <MaterialCommunityIcons
              name="chevron-right"
              size={22}
              color={colors.mediumText}
            />
          }
          s={() => navigation.navigate(routes.BOOKMARKS)}
          Icon={
            <MaterialCommunityIcons
              size={22}
              color={colors.primaryColor}
              name="file-document-multiple"
            />
          }
          title={"New Words"}
        />
        <Card1
          onPres
          RightItem={
            <MaterialCommunityIcons
              name="chevron-right"
              size={22}
              color={colors.mediumText}
            />
          }
          s={() => navigation.navigate(routes.BOOKMARKS)}
          Icon={
            <Fontisto size={22} color={colors.primaryColor} name="hashtag" />
          }
          title={"Interests"}
        />
        <Card1
          onPres
          RightItem={
            <MaterialCommunityIcons
              name="chevron-right"
              size={22}
              color={colors.mediumText}
            />
          }
          s={() => navigation.navigate(routes.BOOKMARKS)}
          Icon={
            <Fontisto size={22} color={colors.primaryColor} name="question" />
          }
          title={"FAQ's"}
        />
        <Card1
          onPres
          RightItem={
            <MaterialCommunityIcons
              name="chevron-right"
              size={22}
              color={colors.mediumText}
            />
          }
          s={() => navigation.navigate(routes.BOOKMARKS)}
          Icon={
            <MaterialCommunityIcons
              size={22}
              color={colors.primaryColor}
              name="information"
            />
          }
          title={"About"}
        />
      </ScrollView>
    </Screen>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({
  avatar: {
    height: 70,
    width: 70,
    borderRadius: 50
  },
  cards: {
    display: "flex",
    height: "100%",
    paddingHorizontal: 16,
    backgroundColor: colors.appBackground
  },
  curve: {
    position: "absolute",
    bottom: -45,
    backgroundColor: colors.appBackground,
    height: 70,
    borderTopStartRadius: 25,
    borderTopEndRadius: 25
  },
  fullname: {
    fontWeight: "bold",
    fontSize: 20,
    color: colors.white
  },
  username: {
    color: colors.white,
    fontSize: 13
  },
  moreInfo: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 16
  },
  moreInfoText: {
    color: colors.white,
    fontWeight: "bold",
    fontSize: 22
  },
  moreInfoTextsContainer: {
    alignItems: "center"
  },
  moreInfoSubText: {
    color: colors.white,
    fontSize: 13
  },
  rightAction: { color: colors.primaryColor, fontWeight: "bold", fontSize: 15 },
  user: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 16
  },
  userInfo: {
    paddingBottom: 50,
    paddingHorizontal: 16
  }
});
