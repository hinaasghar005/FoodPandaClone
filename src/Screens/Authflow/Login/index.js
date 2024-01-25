import React, {useEffect, useState} from 'react';
import {
  ScrollView,
  Image,
  StyleSheet,
  View,
  StatusBar,
  ImageBackground,
  Text,
  TouchableOpacity,
} from 'react-native';
import {
  heightPercentageToDP,
  widthPercentageToDP,
} from 'react-native-responsive-screen';
import {
  GoogleSignin,
  statusCodes,
} from '@react-native-google-signin/google-signin';
import {fontSize} from '../../../Components/Constants';
import {useDispatch, useSelector} from 'react-redux';
import {
  setAuthToken,
  setData,
  setEmailToken,
  setUser,
} from '../../../../store/reducer';
import {userData} from '../../../../store/Services/general.service';
import {googleSign} from '../../../../store/Services/auth.services';
import messaging from '@react-native-firebase/messaging';

const Login = ({navigation}) => {
  useEffect(
    () =>
      GoogleSignin.configure({
        scopes: [],
        webClientId:
          '373830717279-k8dknd03lh26s4kb2sq97pqlla1gk8pn.apps.googleusercontent.com',
        offlineAccess: true,
      }),
    [],
  );

  useEffect(() => {
    getDeviceId();
  }, []);

  const getDeviceId = () => {
    messaging()
      .getToken()
      .then(e => {
        console.log('FCM Token:', e);
        setToken(e);
      });
  };

  const [token, setToken] = useState('');
  const dispatch = useDispatch();

  const onGoogleButtonPress = async () => {
    googleSign(token)
      .then(async data => {
        dispatch(setUser(data.value));
        navigation.navigate('Home'); 
        const thoughts = await userData(data.value.uid);
        dispatch(setData(thoughts));
        console.log('setuser===>', setUser);
      })
      .catch(error => {
        console.log('error ===>>>', error);
      });
  };

  const EmailBtnclick = useSelector(state => state?.root?.user?.token);
  console.log('🚀 ~ file: index.js:13 ~ Login ~ EmailBtnclick:', EmailBtnclick);

  const handleBtnPress = () => {
    const genetatedtoken = 'Device Tokennn';
    dispatch(setEmailToken(genetatedtoken));

    console.log('btnpress', EmailBtnclick);
  };
  return (
    <View style={styles.mainContainer}>
      <StatusBar barStyle={'light-content'} />
      <ImageBackground
        resizeMode="stretch"
        style={styles.logo}
        source={require('../../../../assets/Images/Login.png')}>
        <TouchableOpacity
          onPress={() => navigation.navigate('Home')}
          style={styles.arrView}>
          <Image
            style={styles.arrimg}
            source={require('../../../../assets/Images/clse.png')}
          />
        </TouchableOpacity>
        <View
          style={{
            height: heightPercentageToDP(45),
            width: widthPercentageToDP(100),
            borderTopRightRadius: 20,
            borderWidth: 1,
            borderTopLeftRadius: 20,
            padding: 15,
            backgroundColor: 'white',
            bottom: 0,
            position: 'absolute',
            borderColor: 'white',
          }}>
          <View style={{padding: 5}}>
            <Text style={[styles.sigin, {padding: 5}]}>Sign up or Log in</Text>
            <Text style={[styles.subtext, {padding: 5}]}>
              Select your preferred method to continue
            </Text>
          </View>

          <TouchableOpacity
            onPress={onGoogleButtonPress}
            //  onPress={()=>LOgin().then(res =>{ console.log(res)}).catch(error=>  console.log(error))}
            style={styles.loginButton}
            //  onPress={() => navigation.navigate('Login')}
          >
            <View style={{flexDirection: 'row', justifyContent: 'center'}}>
              <Image
                style={{
                  height: 20,
                  width: 20,
                  alignSelf: 'flex-start',
                  marginLeft: 15,
                }}
                source={require('../../../../assets/Images/google.png')}
              />
              <Text
                style={[
                  styles.returnToLogic,
                  {paddingHorizontal: 65, color: '#5C5C5C'},
                ]}>
                Continue with Google
              </Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            style={[
              styles.loginButton,
              {backgroundColor: '#3381F0', borderColor: '#3381F0'},
            ]}
            //  onPress={() => navigation.navigate('Login')}
          >
            <View style={{flexDirection: 'row', justifyContent: 'center'}}>
              <Image
                style={{
                  height: 20,
                  width: 20,
                  alignSelf: 'flex-start',
                  marginLeft: 15,
                }}
                source={require('../../../../assets/Images/fblogo.png')}
              />
              <Text
                style={[
                  styles.returnToLogic,
                  {color: 'white', paddingHorizontal: 60},
                ]}>
                Continue with Facebook
              </Text>
            </View>
          </TouchableOpacity>
          <Text style={styles.borderline}>Or</Text>
          {/* <View style={styles.borderline}><Text>or</Text></View> */}
          <TouchableOpacity
            onPress={() => {
              handleBtnPress();
              navigation.navigate('Emailscreen');
            }}
            style={[styles.loginButton, {marginTop: 20}]}
            //  onPress={() => navigation.navigate('Login')}
          >
            <View style={{flexDirection: 'row', justifyContent: 'center'}}>
              <Image
                style={{
                  height: 20,
                  width: 20,
                  alignSelf: 'flex-start',
                  marginLeft: 15,
                }}
                source={require('../../../../assets/Images/email.png')}
              />

              <Text
                style={[
                  styles.returnToLogic,
                  {color: '#D60665', paddingHorizontal: 70},
                ]}>
                Continue with email
              </Text>
            </View>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: 'black',
    flex: 1,
  },
  logo: {
    height: heightPercentageToDP(100),
    width: widthPercentageToDP(100),
  },
  container: {
    flexDirection: 'column',
    height: 30,
  },
  imageContainer: {
    flexDirection: 'row',
  },
  image: {
    width: 60,
    height: 60,
    resizeMode: 'cover',
  },
  sigin: {
    fontSize: 18,
    fontWeight: '700',
    color: 'black',

    //textAlign:'center'
  },
  subtext: {
    fontSize: 12,
    fontWeight: '400',
    color: 'black',
  },
  loginButton: {
    //  justifyContent: 'center',
    width: widthPercentageToDP(90),
    backgroundColor: 'white',
    marginTop: 15,
    borderRadius: 9,
    // borderWidth: scale(1),
    // borderColor: 'rgba(0,0,0,0.15)',
    paddingVertical: 13,
    flexDirection: 'row',
    borderWidth: 1,
    borderColor: '#C4C4C4',
    // left: normalized.width(1.8),
  },
  returnToLogic: {
    color: 'black',
    fontWeight: '600',
    fontSize: fontSize.avgSmall,
    //  textAlign:'center'
  },
  borderline: {
    // height: heightPercentageToDP(0.1),
    // width: '90%',
    // backgroundColor: '#C4C4C4',

    // marginHorizontal: 15,
    marginTop: 12,
    color: '#5C5C5C',
    textAlign: 'center',
  },
  arrView: {
    height: heightPercentageToDP(5),
    width: widthPercentageToDP(10),
    marginTop: 20,

    borderRadius: 30,
    //backgroundColor: 'white',
    // borderColor: '#D60665',
    marginLeft: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },
  arrimg: {
    height: heightPercentageToDP(2),
    width: widthPercentageToDP(6),
  },
});

export default Login;
