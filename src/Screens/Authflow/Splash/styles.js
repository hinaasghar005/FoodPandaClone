import {StyleSheet} from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
const createStyle = () => {
  const styles = StyleSheet.create({
    mainContainer: {
    
      flex: 1,
    },
    logo: {
      height: hp(100),
      width: wp(100),
    },
  });
  return styles;
};

export default createStyle;
