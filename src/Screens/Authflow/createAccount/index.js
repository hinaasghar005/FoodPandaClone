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

const CreateAccount = ({navigation}) => {
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
    <ScrollView contentContainerStyle={{flexGrow:1}}>
      <View
        style={{
          backgroundColor: '#D60665',
          padding: 10,
          height: heightPercentageToDP(30),
          width: widthPercentageToDP(100),
        }}>
                 <TouchableOpacity onPress={() => navigation.navigate('Login')}
        
          style={{
            bottom: 0,
            position: 'absolute',
            height: heightPercentageToDP(6),
            width: widthPercentageToDP(100),
            padding: 10,
          }}>
          <Text style={{fontSize: 15, fontWeight: '800', color: 'white'}}>
            Log in / Create account
          </Text>
        </TouchableOpacity>
      </View>
    
    
     
      
     
    
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
            borderColor: '#e8e8e8',
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
            Settings
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

export default CreateAccount;
