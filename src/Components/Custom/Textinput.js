import React from "react";
import {StyleSheet, TextInput, View} from "react-native";

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import {useThemeAwareObject} from "../../Theme";
const Input = (props) => {
  const createStyle = (theme) => {
    const themeStyle = StyleSheet.create({
      textInput: {
        borderRadius: theme.radius.radius1,
        alignItems: "center",
        alignSelf: "center",
        flexDirection: "row",
        height: hp(7),
        width: wp(90),
        borderWidth: wp(0.4),
        marginTop: wp(3),
        borderColor: theme.color.robinBlueLight,
        backgroundColor: theme.color.black,
        shadowColor: theme.color.robinBlueLight,
        shadowOffset: {width: 0, height: 0},
        shadowOpacity: 10,
        shadowRadius: 5,
        elevation: 10,
      },
      textContainer: {
        color: theme.color.white,
        marginLeft: wp(4),
        width: wp(80),
      },
      placeholderColor: theme.color.white,
    });
    return themeStyle;
  };
  const styles = useThemeAwareObject(createStyle);

  return (
    <View
      style={
        props?.textInputStyleView ? props?.textInputStyleView : styles.textInput
      }
    >
      {props?.leftIcon && props.leftIcon}
      <TextInput
        placeholderTextColor={
          props.placeholderTextColor ?? styles.placeholderColor
        }
        keyboardType={props.keyboardType}
        placeholder={props.placeholder}
        maxLength={props.maxLength}
        numberOfLines={props.numberOfLines}
        editable={props.editable}
        secureTextEntry={props.secureTextEntry}
        onChangeText={props.onChangeText}
        multiline={props.multiline}
        scrollEnabled={props.scrollEnabled}
        onBlur={props.onBlur}
        spellCheck={props.spellCheck}
        allowFontScaling={false}
        style={props.style ? props.style : styles.textContainer}
        value={props.value}
      />
      {props.icon}
    </View>
  );
};
export default Input;
