import React, {useState, useRef, useEffect} from 'react';
import {
  ScrollView,
  View,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  Modal,
  TextInput,
} from 'react-native';
import {
  heightPercentageToDP,
  widthPercentageToDP,
} from 'react-native-responsive-screen';
import {colors, fontSize} from '../../../Components/Constants';
// import * as yup from 'yup';
import * as Yup from 'yup';
import firestore from '@react-native-firebase/firestore';
import {useDispatch, useSelector} from 'react-redux';
import Button from '../../../Components/Custom/Button';
import {setUser} from '../../../../store/reducer';
import {Formik} from 'formik';

const loginValidationSchema = Yup.object().shape({
  email: Yup.string()
    .email('Invalid email')
    .matches(
      /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Z|a-z]{2,}$/,
      'Invalid email'
    )
    .required('Email is required'),
// Add more validation rules for other fields if needed
});



const Emailscreen = ({navigation}) => {
  const [emaillog, setEmailLog] = useState('');
  const [passs, SetPass] = useState('');
  const [token, setToken] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  
  // const [emaillog , setEmailLog] = useState('')

  // Creating Param for email that used on password screen
const Loginemail = {email: ''}
//
 

  const dispatch = useDispatch();
  //   const reduxMarkers = useSelector((state) => state?.reducer?.marker);
  //   console.log('reduxMarkersss',reduxMarkers)
  const Addemail = useSelector(state => state?.root?.user?.user);
  console.log(
    '🚀 ~ file: index.js:41 ~ Emailscreen ~ EmailBtnclick:',
    Addemail,
  );

  // const handlecontinue = () => {
  //   if (!credentials.emailErr) {
  //     navigation.navigate('passwordscreen');
  //     console.log('passwordscreen');
  //   }
  // };
  const emailRef = useRef(null);

  const handleEmailPress = (values) => {
    //  const EmailAdded = 'User Email';
    // const enteredEmail = credentials.email;

    // const enteredEmail = 'user email';
    dispatch(setUser(values.email));
    //  console.log('email====', email)
    navigation.navigate('passwordscreen', {paramemail: values.email});
    console.log('User====', setUser);
  };


  const signupValues = {name: '', email: '', password: '', confirmPassword: ''};
  const [loading, setLoading] = useState(false);

  // const SignUpF = async (values, resetForm) => {
  //   setLoader(true);

  //   RegisterUser(values, token)
  //     .then((response) => {
  //       if (response.status) {
  //         console.log('obj', response.value);
  //         dispatch(setUser(response.value));
  //         resetForm();
  //       //  setLoader(false);
  //       } else {
  //         setLoader(false);
  //         Alert.alert(response);
  //       }
  //     })
  //     .catch((error) => {
  //     //  setLoader(false);
  //     });
  // };

  const handleData = async data => {
    handleEmailPress()
  };

  return (
    <Formik
      initialValues={{
        email: '',
      }}
   //   validateOnMount={true}
      validationSchema={loginValidationSchema}
      onSubmit={values => handleEmailPress(values)}>
      {({
        handleChange,
        handleBlur,
        handleSubmit,
        values,
        touched,
        errors,
        isValid,
        dirty,
        setFieldTouched,
      }) => (
        <View style={styles.container}>
          <View
            style={{
              height: heightPercentageToDP(10),
              width: widthPercentageToDP(100),
              // backgroundColor:'blue',
            }}>
            <View
              style={{
                padding: 20,
                flexDirection: 'row',
                justifyContent: 'space-between',
              }}>
              <TouchableOpacity onPress={() => navigation.navigate('Login')}>
                <Image
                  style={styles.arrimg}
                  source={require('../../../../assets/Images/leftarr.png')}
                />
              </TouchableOpacity>
              <Text style={{color: 'gray'}}>Continue</Text>
            </View>
          </View>

          <Image
            style={{
              height: heightPercentageToDP(10),
              width: widthPercentageToDP(20),
              marginLeft: 20,
            }}
            source={require('../../../../assets/Images/emailicon.png')}
          />
          <View style={{padding: 12}}>
            <Text style={styles.DealText}>What's Your email?</Text>
            <Text style={styles.Text}>We'll check if you have an account</Text>

            <TextInput
              placeholder="Email"
              placeholderTextColor="black"
              keyboardType="default"
              onChangeText={handleChange('email')}
              value={values.email}
              onBlur={() => setFieldTouched('email')}
              style={[
                styles.loginButton,
                {
                  borderBottomColor:
                    errors.email && touched.email ? 'red' : '#262E2B',
                },
              ]}
              //  onChangeText={e => setCredentials({...credentials, email: e})}
              //     value={credentials.email}
              //  value={emaillog}
              // onChangeText={(txt)=>{setEmailLog(txt)}}
              // containerStyle={styles.PassStyle}
              // error={{
              //   condition: credentials.emailErr,
              //   message: '',
              // }}

              // style={styles.
              // }
            />
          
            {errors.email && touched.email && (
              <Text style={{color: 'red'}}>{errors.email}</Text>
            )}

            {/* {credentials.emailErr && <Text style={{color:'red'}}>{credentials.errMessage}</Text>} */}
          </View>
          {console.log("isValid",isValid)}
          <View style={styles.BottomView}>
            <Button
            disabled={!isValid || !dirty}
              // disabled={
              //  !isValid

              //   }
              disableStyle={{
                borderWidth: 1,
                borderColor: 'rgba(0,0,0,.25)',
                backgroundColor: '#C4C4C4',
              }}
              disableTextColor={'rgba(0,0,0,.25)'}
              textStyle={[
                styles.Buttontext,
                // {
                //    color: isValid  ? 'white' : 'grey',
                // },
              ]}
              style={styles.continueButton}
              text={'continue'}
              // loading={loading}
              // onPress={ handleEmailPress}
              onPress={handleSubmit}
            />
          </View>
        </View>
      )}
    </Formik>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  arrView: {
    height: heightPercentageToDP(5),
    width: widthPercentageToDP(10),
    marginTop: 20,
    left: 10,
    borderRadius: 30,
    backgroundColor: '#EBDBE2',
    // borderColor: '#D60665',

    justifyContent: 'center',
    alignItems: 'center',
    // marginLeft: 5,
  },
  arrimg: {
    height: heightPercentageToDP(2),
    width: widthPercentageToDP(6),
    marginLeft: 5,
  },
  shareView: {
    height: heightPercentageToDP(5),
    width: widthPercentageToDP(10),
    marginTop: 20,

    //borderRadius: 30,
    backgroundColor: '#EBDBE2',
    // borderColor: '#D60665',
    //  marginLeft: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  imgview: {
    height: heightPercentageToDP(10),
    width: widthPercentageToDP(25),
    backgroundColor: 'red',
    marginLeft: 10,
  },
  DealText: {
    fontSize: 25,
    fontWeight: '600',
    color: 'black',
    //  textAlign: 'center',
    padding: 5,
  },
  Text: {
    fontSize: 12,
    fontWeight: '400',
    color: 'black',
    //  textAlign: 'center',
    padding: 8,
  },
  loginButton: {
    justifyContent: 'center',
    width: widthPercentageToDP(90),
    //  backgroundColor: 'white',
    color: 'black',
    marginTop: 15,
    borderRadius: 9,
    // borderWidth: scale(1),
    // borderColor: 'rgba(0,0,0,0.15)',
    paddingVertical: 10,
    flexDirection: 'row',
    borderColor: '#C4C4C4',
    borderWidth: 1,
    paddingHorizontal: 10,
    // left: normalized.width(1.8),
  },
  returnToLogic: {
    color: 'white',
    fontWeight: '600',
    fontSize: fontSize.avgSmall,
  },
  BottomView: {
    position: 'absolute',
    bottom: 0,
    backgroundColor: 'white',
    paddingVertical: 15,
    justifyContent: 'center',
    width: '100%',
    /// height: heightPercentageToDP(10),
    paddingHorizontal: 15,
    // borderTopRightRadius: 20,
    // borderTopLeftRadius: 20,
    borderWidth: 1,
    borderColor: '#EDEDED',
    shadowOpacity: 10,
    shadowRadius: 20,
    shadowOffset: {
      // Shadow offset (x, y)
      width: 0,
      height: 0,
    },
    elevation: 50,
  },
  continueButton: {
    justifyContent: 'center',
    width: widthPercentageToDP(90),
    // backgroundColor: 'pink',
    //  marginTop: 2,
    borderRadius: 9,
    // borderWidth: scale(1),
    // borderColor: 'rgba(0,0,0,0.15)',
    paddingVertical: 15,
    flexDirection: 'row',
    // left: normalized.width(1.8),
  },
  input: {
    fontSize: fontSize.avgSmall,
    color: 'black',
  },
  inputStyle: {
    // color: COLORS.darkTextColor,
    // fontSize: moderateScale(16),
    // fontWeight: '500',
    // lineHeight: moderateScale(20),
    // paddingVertical: moderateScale(6),
    borderBottomWidth: 1,
    //   borderBottomColor: COLORS.darkTextColor,
    // marginTop: moderateScale(30)
  },
});

export default Emailscreen;
