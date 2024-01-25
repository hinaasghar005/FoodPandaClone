// import React, {useState, useRef} from "react";
// import {ScrollView, View, Image, StyleSheet, Text,Button, TouchableOpacity,Modal} from "react-native";
// import { heightPercentageToDP, widthPercentageToDP } from "react-native-responsive-screen";

// export default function logoutModal({
//     modalVisible,
//     title,
   

//     message,
//     onPress = () => null,
//     onClose = () => null,
//   })  {
//  return (
//     <Modal transparent={true} visible={modalVisible} animationType="none">
//         <View style={styles.centeredView}>
//           <View style={[styles.modalView]}>
//             <View>
//               <Text
//                 style={{
//                   fontSize: 20,
//                   lineHeight:25,
//                   fontWeight: '600',
//                   color: 'black',
//                   textAlign: 'center',
//                   paddingBottom: 10,
//                 }}>
//             Logging out?
//               </Text>
//               <Text
//                 style={{
//                   fontSize: 18,
//                   lineHeight:22,
//                   fontWeight: '500',
//                   color: 'black',
//                   textAlign: 'center',
//                 }}>
//         Thanks for stopping by. see you again {"\n"}soon!
//               </Text>
//             </View>
//             <View
//               style={{
//                 flexDirection: 'row',
//                 alignItems: 'center',
//                 justifyContent: 'space-between',
//                 width: '60%',
//                 alignSelf: 'center',
//               }}>
//               <TouchableOpacity onPress={() => setModalVisible(false)}>
//                 <Text
//                   style={{
//                     fontSize: 20,
//                     lineHeight: 25,
//                     fontWeight: '600',
//                     color: COLORS.darkTextColor,
//                   }}>
//                   Cancle
//                 </Text>
//               </TouchableOpacity>
//               <TouchableOpacity
//                 // onPress={() => logoutF()}
//                 style={{
//                   paddingHorizontal:15,
//                   paddingVertical: 8,
//                  // backgroundColor: COLORS.placeHolderColor,
//                   borderRadius: moderateScale(10),
//                 }}>
//                 <Text
//                   style={{
//                     fontSize: 20,
//                     lineHeight: 25,
//                     fontWeight: '600',
//                    // color: COLORS.darkTextColor,
//                   }}>
//                   Logout
//                 </Text>
//               </TouchableOpacity>
//             </View>
//           </View>
//         </View>
//       </Modal>
//   );
// };

// const styles = StyleSheet.create({


//     wrapper: {
//         flexDirection: 'row',
//         justifyContent: 'space-between',
//         borderBottomWidth: 3,
//        // borderBottomColor: COLORS.placeHolderColor,
//         paddingVertical: 20,
//         paddingHorizontal: 15,
//         alignItems: 'center',
//       },
//       nameAndImgWrapper: {flexDirection: 'row', alignItems: 'center'},
//       imageWrapper: {
//         marginRight: 10,
//         height: 45,
//         width: 45,
//         alignItems: 'center',
//         justifyContent: 'center',
//        // backgroundColor: COLORS.white,
//         borderWidth: 3,
//       //  borderColor: COLORS.orangeColor,
//         borderRadius: 100,
//       },
//       image: {
//         height: 40,
//         width: 40,
//         borderRadius: 100,
//         overflow: 'hidden',
//       },
//       textStyle: {
//        // color: COLORS.darkTextColor,
//         fontSize: 20,
//         fontWeight: '500',
//         lineHeight: 36,
//       },
//       locationStyle: {
//         height: heightPercentageToDP(28),
//         width: heightPercentageToDP(28),
//         marginRight: 10,
//       },
//       inputStyle: {
//         color: 'white',
//         fontSize: 16,
//         fontWeight: '500',
//         lineHeight:20,
//         paddingVertical: 6,
//         borderBottomWidth: 1,
//       //  borderBottomColor: COLORS.placeHolderColor,
//         marginTop: 20,
//       },
//       centeredView: {
//         flex: 1,
//         justifyContent: 'center',
//         alignItems: 'center',
//         backgroundColor: 'rgba(0, 0, 0, 0.4)',
//       },
//       modalView: {
//        // backgroundColor: COLORS.orangeColor,
//         width: '90%',
//         borderRadius:20,
//         shadowRadius: 4,
//         height: heightPercentageToDP(200),
//         justifyContent: 'space-between',
//         paddingVertical: 20,
//       },
//   });







