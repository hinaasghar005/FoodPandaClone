// DrawerContent.tsx
import React, {useState} from 'react';
// import { DrawerContentComponentProps } from '@react-navigation/drawer';
import {
  View,
  Text,
  Image,
  Alert,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Modal,
} from 'react-native';
import {DrawerContentComponentProps} from '@react-navigation/drawer';
import {
  heightPercentageToDP,
  widthPercentageToDP,
} from 'react-native-responsive-screen';

const DrawerContent = ({navigation}) => {
  const logoutpopup = () => {
    Alert.alert(
      'Logging Out?',
      'Logout from device'[
        {
          text: 'ok',
          onPress: () => console.log('ok pressed'),
        }
      ],
      {
        cancellable: false,
      },
    );
  };
  const settingData = [
    {
      borderColor: '#49FFE9',

      shadowColorTwo: 'white',
      color: 'black',
      title: 'Become a pandapro',
      imgBg: require('../../../../assets/Images/Food.png'),
    },
    {
      borderColor: '#49FFE9',

      shadowColorTwo: 'white',
      color: 'black',
      title: 'Vouchers & offers',
      imgBg: require('../../../../assets/Images/Food.png'),
    },
    {
      borderColor: '#49FFE9',

      shadowColorTwo: 'white',
      color: 'black',
      title: 'View profile',
      imgBg: require('../../../../assets/Images/Food.png'),
    },
    {
      borderColor: '#49FFE9',

      shadowColorTwo: 'white',
      color: 'black',
      title: 'Addresses',
      imgBg: require('../../../../assets/Images/Food.png'),
    },
    {
      borderColor: '#49FFE9',

      shadowColorTwo: 'white',
      color: 'black',
      title: 'panda rewards',
      imgBg: require('../../../../assets/Images/Food.png'),
    },
    {
      borderColor: '#49FFE9',

      shadowColorTwo: 'white',
      color: 'black',
      title: 'Help center',
      imgBg: require('../../../../assets/Images/Food.png'),
    },
    {
      borderColor: '#49FFE9',

      shadowColorTwo: 'white',
      color: 'black',
      title: 'foodpanda for business',
      imgBg: require('../../../../assets/Images/Food.png'),
    },
  ];

  const [modalVisible, setModalVisible] = useState(false);
  const openModal = () => {
    setModalVisible(true);
  };
  const closeModal = () => {
    setModalVisible(false);
  };
  const navigateToModal = () => {
    navigation.navigate(logoutModal);
  };
  return (
    <ScrollView>
      <View
        style={{
          backgroundColor: '#D60665',
          padding: 10,
          height: heightPercentageToDP(30),
          width: widthPercentageToDP(100),
        }}>
        <View
          style={{
            height: heightPercentageToDP(6),
            width: widthPercentageToDP(12),
            marginTop: 30,
            borderWidth: 1,
            borderRadius: 30,
            backgroundColor: 'white',
            borderColor: '#D60665',
          }}>
          <View style={{padding: 5}}>
            <Text
              style={{
                color: '#D60665',
                fontSize: 25,
                textAlign: 'center',
                fontWeight: 'bold',
              }}>
              H
            </Text>
          </View>
        </View>
        <View
          style={{
            bottom: 0,
            position: 'absolute',
            height: heightPercentageToDP(6),
            width: widthPercentageToDP(100),
            padding: 10,
          }}>
          <Text style={{fontSize: 15, fontWeight: '800', color: 'white'}}>
            Hina Asghar
          </Text>
        </View>
      </View>
      <View
        style={{
          padding: 15,
          backgroundColor: 'white',
          borderColor: '#C4C4C4',
          borderBottomWidth: 1,
        }}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            //  marginHorizontal:10,
            //padding:10,
            backgroundColor: 'white',
          }}>
            <View style={{alignItems:'center', height:18,flexDirection:'row'}}>
              <Text style={{color: '#D60665', fontSize: 15, fontWeight: '400'}}>Panda</Text>
              <Text style={{
                fontStyle: 'italic',
                backgroundColor: '#D60665',
                color: 'white',
                paddingHorizontal:3
              }}>pay</Text>
            </View>
          {/* <View style={{flexDirection: 'row',height:15}}>
            <Text style={{color: '#D60665', fontSize: 15, fontWeight: '400'}}>
              panda
            </Text>
            <Text
              style={{
                fontStyle: 'italic',
                backgroundColor: '#D60665',
                color: 'white',
                fontSize:16,
                height:20,
                paddingHorizontal:3
              }}>
              pay
            </Text>
          </View> */}
          {/* </View> */}
          <View
            style={{
              backgroundColor: '#F0D4DD',
              flexDirection: 'row',
              borderRadius: 8,
              padding: 2,
            }}>
            <Text style={{textAlign: 'center', color: '#D60665', fontSize: 10}}>
              RS.{' '}
            </Text>
            <Text style={{textAlign: 'center', color: '#D60665', fontSize: 10}}>
              0.00
            </Text>
          </View>
        </View>
        <View style={{paddingVertical: 5}}>
          <Text style={{fontSize: 13, color: 'black'}}>
            Top up, check your balance and get exciting offers!
          </Text>
        </View>
      </View>
      <TouchableOpacity>
        <View style={{padding: 20, flexDirection: 'row'}}>
          <Image
            style={{
              height: heightPercentageToDP(3),
              width: widthPercentageToDP(5),
            }}
            source={require('../../../../assets/Images/Voucher.png')}
          />
          <Text
            style={{color: 'black', backgroundColor: 'white', marginLeft: 20}}>
            Become a pandago
          </Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity>
        <View style={{padding: 20, flexDirection: 'row'}}>
          <Image
            style={{
              height: heightPercentageToDP(3),
              width: widthPercentageToDP(5),
            }}
            source={require('../../../../assets/Images/Voucher.png')}
          />
          <Text
            style={{color: 'black', backgroundColor: 'white', marginLeft: 20}}>
            Vouchers & offers
          </Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity>
        <View style={{padding: 20, flexDirection: 'row'}}>
          <Image
            style={{
              height: heightPercentageToDP(2),
              width: widthPercentageToDP(5.5),
            }}
            source={require('../../../../assets/Images/favo.png')}
          />
          <Text
            style={{color: 'black', backgroundColor: 'white', marginLeft: 20}}>
            Favorites
          </Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity>
        <View style={{padding: 20, flexDirection: 'row'}}>
          <Image
            style={{
              height: heightPercentageToDP(3),
              width: widthPercentageToDP(5),
            }}
            source={require('../../../../assets/Images/order.png')}
          />
          <Text
            style={{color: 'black', backgroundColor: 'white', marginLeft: 20}}>
            Order & reordering
          </Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity>
        <View style={{padding: 20, flexDirection: 'row'}}>
          <Image
            style={{
              height: heightPercentageToDP(3),
              width: widthPercentageToDP(5),
            }}
            source={require('../../../../assets/Images/profile.png')}
          />
          <Text
            style={{color: 'black', backgroundColor: 'white', marginLeft: 20}}>
            View profile
          </Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity>
        <View style={{padding: 20, flexDirection: 'row'}}>
          <Image
            style={{
              height: heightPercentageToDP(3),
              width: widthPercentageToDP(5),
            }}
            source={require('../../../../assets/Images/loc.png')}
          />
          <Text
            style={{color: 'black', backgroundColor: 'white', marginLeft: 20}}>
            Addresses
          </Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity>
        <View style={{padding: 20, flexDirection: 'row'}}>
          <Image
            style={{
              height: heightPercentageToDP(3),
              width: widthPercentageToDP(5),
            }}
            source={require('../../../../assets/Images/trophy.png')}
          />
          <Text
            style={{color: 'black', backgroundColor: 'white', marginLeft: 20}}>
            panda reward
          </Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity>
        <View style={{padding: 20, flexDirection: 'row'}}>
          <Image
            style={{
              height: heightPercentageToDP(3),
              width: widthPercentageToDP(5.5),
            }}
            source={require('../../../../assets/Images/helpp.png')}
          />
          <Text
            style={{color: 'black', backgroundColor: 'white', marginLeft: 20}}>
            Help center
          </Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity>
        <View style={{padding: 20, flexDirection: 'row'}}>
          <Image
            style={{
              height: heightPercentageToDP(3),
              width: widthPercentageToDP(5),
            }}
            source={require('../../../../assets/Images/company.png')}
          />
          <Text
            style={{color: 'black', backgroundColor: 'white', marginLeft: 20}}>
            foodpanda for business
          </Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity>
        <View
          style={{
            padding: 20,
            flexDirection: 'row',
            borderBottomWidth: 1,
            borderColor: '#C4C4C4',
          }}>
          <Image
            style={{
              height: heightPercentageToDP(3),
              width: widthPercentageToDP(5),
            }}
            source={require('../../../../assets/Images/rwrd.png')}
          />
          <Text
            style={{color: 'black', backgroundColor: 'white', marginLeft: 20}}>
            Invite friends
          </Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity>
        <View style={{paddingVertical: 15, flexDirection: 'row'}}>
          <Text
            style={{color: 'black', backgroundColor: 'white', marginLeft: 20}}>
            Setttings
          </Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity>
        <View
          style={{
            paddingVertical: 15,
            flexDirection: 'row',
            borderColor: '#C4C4C4',
          }}>
          <Text
            style={{color: 'black', backgroundColor: 'white', marginLeft: 20}}>
            Terms & conditions / Privacy.
          </Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={openModal}
        style={{
          paddingVertical: 15,
          flexDirection: 'row',
          borderColor: '#C4C4C4',
        }}>
        <Text
          style={{color: 'black', backgroundColor: 'white', marginLeft: 20}}>
          Log out
        </Text>
      </TouchableOpacity>
      <Modal transparent={true} visible={modalVisible} animationType="none">
        <View style={styles.centeredView}>
          <View style={[styles.Modal]}>
            <View>
              <Text
                style={{
                  fontSize: 20,
                  lineHeight: 25,
                  fontWeight: '600',
                  color: 'black',
                  //textAlign: 'center',
                  paddingBottom: 10,
                  // backgroundColor:'red'
                }}>
                Logging out?
              </Text>
              <View>
                <Text
                  style={{
                    fontSize: 15,
                    // lineHeight:22,
                    fontWeight: '400',
                    color: 'black',
                    textAlign: 'center',
                    marginTop: 5,
                  }}>
                  Thanks for stopping by.See you again
                </Text>
                <Text
                  style={{
                    fontSize: 15,
                    // lineHeight:22,
                    fontWeight: '400',
                    color: 'black',
                    // textAlign: 'center',
                    textAlign: 'left',
                  }}>
                  soon!
                </Text>
              </View>
            </View>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
                width: '90%',
                alignSelf: 'center',
                //  backgroundColor:'blue',
                margin: 15,
                height: heightPercentageToDP(6),
              }}>
              <TouchableOpacity
                onPress={() => {
                  navigation.navigate('Home');
                  setModalVisible(false);
                }}
                style={{
                  paddingHorizontal: 35,
                  paddingVertical: 8,
                  // backgroundColor: COLORS.placeHolderColor,
                  borderRadius: 5,
                  backgroundColor: 'pink',
                  borderColor: '#D60665',
                  borderWidth: 1,
                  backgroundColor: 'white',
                }}>
                <Text
                  style={{
                    fontSize: 13,
                    lineHeight: 25,
                    fontWeight: '600',
                    color: 'black',
                    textAlign: 'center',
                    color: '#D60665',
                  }}>
                  Cancle
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => {
                  console.log('logout');
                  setModalVisible(false);
                }}
                // onPress={() => logoutF()}
                style={{
                  paddingHorizontal: 35,
                  paddingVertical: 10,
                  // backgroundColor: COLORS.placeHolderColor,
                  borderRadius: 5,
                  backgroundColor: '#D60665',
                }}>
                <Text
                  style={{
                    fontSize: 13,
                    lineHeight: 25,
                    fontWeight: '600',
                    color: 'white',
                  }}>
                  Log out
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  nameAndImgWrapper: {flexDirection: 'row', alignItems: 'center'},
  imageWrapper: {
    marginRight: 10,
    height: 45,
    width: 45,
    alignItems: 'center',
    justifyContent: 'center',
    // backgroundColor: COLORS.white,
    borderWidth: 3,
    //  borderColor: COLORS.orangeColor,
    borderRadius: 100,
  },
  image: {
    height: 40,
    width: 40,
    borderRadius: 100,
    overflow: 'hidden',
  },
  textStyle: {
    // color: COLORS.darkTextColor,
    fontSize: 20,
    fontWeight: '500',
    lineHeight: 36,
  },

  inputStyle: {
    color: 'white',
    fontSize: 16,
    fontWeight: '500',
    lineHeight: 20,
    paddingVertical: 6,
    borderBottomWidth: 1,
    //  borderBottomColor: COLORS.placeHolderColor,
    marginTop: 20,
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.4)',
  },
  modalView: {
    // backgroundColor: COLORS.orangeColor,
    width: '95%',
    borderRadius: 20,
    shadowRadius: 4,
    height: heightPercentageToDP(200),
    justifyContent: 'space-between',
    paddingVertical: 20,
    backgroundColor: 'red',
  },
  Modal: {
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 20,
    width: '85%',
    height: heightPercentageToDP(26),
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default DrawerContent;
