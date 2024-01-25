import { StyleSheet } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { fontSize, radius } from "../../../Components/Constants";

const createStyle = (theme) => {
  const styles = StyleSheet.create({
    safeArea: {
      flex: 1,
      backgroundColor: "black",
    },

  });

  return styles;
};

export default createStyle;
