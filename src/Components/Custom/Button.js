import React from 'react';
import {
  StyleSheet,
  TextInput,
  View,
  Text,
  TouchableOpacity,
} from 'react-native';
import {ActivityIndicator} from 'react-native-paper';

import Theme, {
  moderateScale,
  normalized,
  scale,
  verticalScale,
} from '../../../Theme';
import { heightPercentageToDP } from 'react-native-responsive-screen';
import { fontSize } from '../Constants';
export default Button = ({
  text,
  disabled,
  onPress,
  loading,
  indicatorColor,
  leftIcon,
  rightIcon,
  style,
  textStyle,
  disableStyle,
  disableTextColor,
}) => {
  return (
    <TouchableOpacity
      disabled={disabled}
      onPress={onPress ?? null}
      style={[styles.mainContainer, style, disabled && disableStyle]}>
      {loading ? (
        <ActivityIndicator color={indicatorColor} size="small" />
      ) : (
        <View
          style={{
            flexDirection: 'row',
            gap:5,
            alignItems: 'center',
          }}>
          {leftIcon}
          <Text
            style={[
              styles.buttonText,
              textStyle,
              disabled && {color: disableTextColor},
            ]}>
            {text}
          </Text>
          {rightIcon}
        </View>
      )}
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  mainContainer: {
    width: heightPercentageToDP(90),
    paddingVertical: 12,
    backgroundColor: '#D60665',
    borderRadius: 9,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: 'black',
    fontSize: fontSize.avgSmall,
    alignSelf: 'center',
    fontWeight: '500',
  },
  indicatorColor: 'white',
});
