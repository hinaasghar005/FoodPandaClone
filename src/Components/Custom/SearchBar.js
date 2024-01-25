import {useRef, useState} from "react";
import {
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Image,
  Text,
} from "react-native";

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import {Platform} from "react-native";
import {useThemeAwareObject} from "../../../Theme";
import {SvgXml} from "react-native-svg";

import {closeIcon, searchBarLeftIcon} from "../../Svg";
const SearchBar = (props) => {
  const styles = useThemeAwareObject(createStyle);
  const [inputValue, setInputValue] = useState(props.value || "");

  const handleClearInput = () => {
    setInputValue("");
    if (props.onChangeText) {
      props.onChangeText(""); // This will notify the parent component if needed
    }
  };

  return (
    <View style={[props.style, styles.topView]}>
      <View
        style={{
          alignItems: "center",
          width: wp(83),
          alignSelf: "center",
          justifyContent: "center",
          // backgroundColor:'white'
          
        }}
      >
        <View style={styles.textInput}>
          {/* {props?.searchBarLeftIcon && (
            <SvgXml xml={props?.searchBarLeftIcon} height={20} width={20} />
          )} */}
          <Image style={{ height:20,width:25}} source={require('../../../assets/Images/search.png')}/>
          <TextInput
            placeholderTextColor={
              props.placeholderTextColor ?? styles?.placeholderColor
            }
            keyboardType={props.keyboardType}
            placeholder={props.placeholder}
            maxLength={props.maxLength}
            numberOfLines={props.numberOfLines}
            editable={props.editable}
            secureTextEntry={props.secureTextEntry}
            onChangeText={props.onChangeText}
            multiline={props.multiline}
            onKeyPress={props.onKeyPress}
            scrollEnabled={props.scrollEnabled}
            onBlur={props.onBlur}
            onPressIn={props.onPressIn}
            spellCheck={props.spellCheck}
            allowFontScaling={false}
            style={props.style ? props.style : styles.textContainer}
            value={props.value}
          />
          {props.value?.length > 0 && (
            <TouchableOpacity
              style={{marginLeft: 10}}
              onPress={() => handleClearInput()}
            >
              {/* <SvgXml xml={searchBarLeftIcon} height={20} width={20} /> */}
           <Image style={{ height:20,width:20,backgroundColor:'red'}} source={require('../../../assets/Images/search.png')}/>
            </TouchableOpacity>
          )}
        </View>
      </View>
    </View>
  );
};
export default SearchBar;

const createStyle = (theme) => {
  const styles = StyleSheet.create({
    topView: {
      alignItems: "center",
      alignSelf: "center",
      // flexDirection: "row",
      // justifyContent: "space-between",
      
      
      
    },

    textInput: {
      borderRadius: theme.radius.radius3,
      paddingHorizontal: wp(3),
      alignItems: "center",
      alignSelf: "center",
      flexDirection: "row",
      height: hp(5),
      width: wp(85),
      borderWidth: wp(0.5),
      shadowColor: theme.color.white,
      shadowOffset: {width: 0.2, height: 0},
      shadowOpacity: 10,
      shadowRadius: 5,
      borderColor: theme.color.white,
      backgroundColor:'white'
    
    },
    textContainer: {
      color:'black',
      marginLeft: wp(2),
      width: wp(60),
      padding:5
    },
    placeholderColor: 'grey',
  });
  return styles;
};
