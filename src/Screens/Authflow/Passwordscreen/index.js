// import React, {useState, useRef, useEffect} from "react";
// import {ScrollView, View, Image, StyleSheet, Text, TouchableOpacity,Modal, TextInput} from "react-native";
// import { heightPercentageToDP, widthPercentageToDP } from "react-native-responsive-screen";
// import { fontSize } from "../../../Components/Constants";
// import Button from "../../../Components/Custom/Button";
// import { setpassword } from "../../../../store/reducer";
// import { useDispatch, useSelector } from "react-redux";
// import * as Yup from 'yup';
// import {Formik} from 'formik';
// import { useRoute } from "@react-navigation/native";

// const signUpValidationSchema = Yup.object().shape({

//     password: Yup
//       .string()
//       .min(8, ({min}) => `Password must be at least ${min} characters`)
//       .required('Password is required')
//       .matches(
//         /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[^A-Za-z0-9]).{8,}$/,
//         'Must Contain 8 Characters, One Uppercase, One Lowercase, One Number, and One Special Character',
//       ),
//   });

// const passwordscreen=({navigation})=> {

//   const route = useRoute();
//   const {Loginemail} = route.params;
//     // const handlepassword = () => {
//     //     if (!credentials.emailErr) {
//     //       navigation.navigate('Home');
//     //       console.log('navigatetohomescreen');
//     //     }
//     //   }; 

//       const dispatch = useDispatch();
      
//   const AddPassword = useSelector((state) => state?.root?.user?.password);
//   console.log("🚀 ~ file: index.js:41 ~ Emailscreen ~ EmailBtnclick:", AddPassword)
 
  
//     const handlePassPress = () => {
//     //    const passAdded = 'User Email';
//     const enteredpass = 'User Password';
//        dispatch(setpassword(enteredpass));
    
//        navigation.navigate('Home')
//        console.log('Passs=======',enteredpass );
//      };
//   const handlepass = async data =>{
//     handlePassPress()
//   }
//     // const [credentials, setCredentials] = useState({
//     //     password: '',
       
//     //     passErr: false,
       
//     //     errMessage: '',
//     //   });
//     //   useEffect(() => {
//     //     if (credentials.password.length < 8 && credentials.password.length > 0) {
//     //       setCredentials({
//     //         ...credentials,
//     //         passErr: true,
//     //         errMessage: 'Password must be 8 character long',
//     //       });
//     //     } 
      
//     //      else {
//     //       console.log('password:', credentials.password);
//     //       setCredentials({...credentials, passErr: false, errMessage: ''});
//     //     } 
//     //      console.log('testing:',credentials)
//     //   }, [credentials.confirmpassword, credentials?.password]);

//     // const SignUpF = async (values, resetForm) => {
//     //   setLoader(true);
//     //   RegisterUser(values, token)
//     //     .then((response) => {
//     //       if (response.status) {
//     //         console.log('obj', response.value);
//     //         dispatch(setUser(response.value));
//     //         resetForm();
//     //         setLoader(false);
//     //       } else {
//     //         setLoader(false);
//     //         Alert.alert(response);
//     //       }
//     //     })
//     //     .catch((error) => {
//     //       setLoader(false);
//     //     });
//     // };






// return (
//   <Formik 
//   initialValues={{password:''} } 
//   validationSchema={signUpValidationSchema}
//    onSubmit={values => handlepass(values)}
//   // SignUpF = (values => handlepass(values))
//  >
//    {({
//         handleChange,
//         handleBlur,
//         handleSubmit,
//         values,
//         touched,
//         errors,
//         isValid,
//         dirty,
//         setFieldTouched,
//         setFieldError
//       }) =>(
// <View style={styles.container}>
// <View
//            style={{
//              height: heightPercentageToDP(10),
//              width: widthPercentageToDP(100),
//             // backgroundColor:'blue',
            
//            }}>
//                <View style={{ padding:20,
          
//              }}>
//                <TouchableOpacity onPress={() => navigation.navigate('Emailscreen')}>
//                <Image style={styles.arrimg} source={require('../../../../assets/Images/leftarr.png')}/>
//                </TouchableOpacity>
          
//          </View>
//          </View>
        
//            <Image  style={{height:heightPercentageToDP(10),width:widthPercentageToDP(20), marginLeft:20}} source={require('../../../../assets/Images/emailicon.png')}/>
//      <View style={{padding:12}}>
//        <Text style={styles.DealText}>Log in with your email</Text>
//        <Text style={styles.Text}>Log in with your password to hinaasghar005@gmail.com. Or get a login link  ia email.</Text>
//        <TextInput placeholder="Password"  placeholderTextColor={'gray'}  secureTextEntry 
//        // keyboardType="default"  
//       //  onChangeText={e => setCredentials({...credentials, password: e})}
//       //   value={credentials.password}    error={{
//       //     condition: credentials.passErr,
//       //     message: '',
//       //   }}  style={styles.loginButton}
//       style={styles.loginButton}
//       onChangeText={handleChange('password')}
//       value={values.password}
//       onBlur={()=>setFieldTouched('password')}
//        />
// {errors.password&& touched.password &&(
//   <Text style={{color:'red'}}>{errors.password}</Text>
// )}

//          {/* {credentials.passErr && <Text style={{color:'red'}}>{credentials.errMessage}</Text>} */}
//        </View>
//        <View style={styles.BottomView}>
//        {/* <TouchableOpacity
//            style={styles.continueButton}
//            //  onPress={() => navigation.navigate('Login')}
//          >
//            <Text style={styles.returnToLogic}>Log in with password</Text>
//          </TouchableOpacity> */}
//          <Button 
//     //      disabled={
//     // credentials.passErr || credentials.password.length === 0

//     //     }
//     disabled={!isValid || !dirty}
//         disableStyle={{
//           borderWidth: 1,
//           borderColor: 'rgba(0,0,0,.25)',
//           backgroundColor: '#C4C4C4',
//         }}
//         disableTextColor={'rgba(0,0,0,.25)'}
//         textStyle={[
//           styles.Buttontext,
//           {
//             // color: isValid && dirty ? 'black' : 'grey',
//           },
//         ]}
//         style={styles.continueButton}
//         text={'continue'}
//        // loading={loading}
//        onPress={handleSubmit}
//         // style={[
//         //   styles?.Button,
//         //   {
//         //     backgroundColor:
//         //       isValid && dirty
//         //         ? Theme.colors.lightgreen
//         //         : Theme.colors.lightgray,
//         //   },
//         // ]}
//         // disabled={!isValid || !!errors.email || !!errors.password}
//       />
        
    
//          <TouchableOpacity
//            style={styles.linkButton}
//            //  onPress={() => navigation.navigate('Login')}
//          >
//            <Text style={[styles.returnToLogic, {color:'#D60665'}]}>Send me a login link</Text>
//          </TouchableOpacity>
//          </View>  
      
// </View>
// )}
// </Formik>
//  );
// };
 
// const styles = StyleSheet.create({
// container:{
//    flex:1,
//    backgroundColor:'white'
// },
// arrView: {
//    height: heightPercentageToDP(5),
//    width: widthPercentageToDP(10),
//    marginTop: 20,
//    left: 10,
//    borderRadius: 30,
//    backgroundColor: '#EBDBE2',
//    // borderColor: '#D60665',

//    justifyContent: 'center',
//    alignItems: 'center',
//    // marginLeft: 5,
//  },
//  arrimg: {
//    height: heightPercentageToDP(2),
//    width: widthPercentageToDP(6),
//    marginLeft: 5,
//  },
//  shareView: {
//    height: heightPercentageToDP(5),
//    width: widthPercentageToDP(10),
//    marginTop: 20,

//    //borderRadius: 30,
//    backgroundColor: '#EBDBE2',
//    // borderColor: '#D60665',
//    //  marginLeft: 10,
//    justifyContent: 'center',
//    alignItems: 'center',
//  },
//  imgview:{
//    height:heightPercentageToDP(10),
//    width:widthPercentageToDP(25),
//  backgroundColor:'red',
//  marginLeft:10

//  },
//  DealText: {
//    fontSize: 25,
//    fontWeight: '600',
//    color: 'black',
//  //  textAlign: 'center',
//     padding: 5,
//  },
//  Text: {
//    fontSize: 12,
//    fontWeight: '400',
//    color: 'black',
//  //  textAlign: 'center',
//     padding: 8,
//  },
//  loginButton: {
//    justifyContent: 'center',
//    width: widthPercentageToDP(90),
//  //  backgroundColor: 'white',
//    marginTop: 15,
//    borderRadius: 9,
//    color:'black',
//    // borderWidth: scale(1),
//    // borderColor: 'rgba(0,0,0,0.15)',
//    paddingVertical: 10,
//    flexDirection: 'row',
//    borderColor:'#C4C4C4',
//    borderWidth:1,
//     paddingHorizontal:10
//    // left: normalized.width(1.8),
//  },
//  returnToLogic: {
//    color: 'white',
//    fontWeight: '600',
//    fontSize: fontSize.avgSmall,
//  },
//  BottomView: {
   
//    position: 'absolute',
//    bottom: 0,
//    backgroundColor: 'white',
//    paddingVertical:15,
//    justifyContent:'center',
//    width: '100%',
//   /// height: heightPercentageToDP(10),
//    paddingHorizontal: 15,
//    borderTopRightRadius: 20,
//  borderTopLeftRadius: 20,
//    borderWidth: 1,
//    borderColor: '#EDEDED',
//    shadowOpacity: 10,
//    shadowRadius: 20,
//    shadowOffset: {
//      // Shadow offset (x, y)
//      width: 0,
//      height: 0,
//    },
//    elevation: 50,
//  },
//  continueButton: {
//    justifyContent: 'center',
//    width: widthPercentageToDP(90),
//   // backgroundColor: '#CCCCCC',
//    color:'black',
//  //  marginTop: 2,
//    borderRadius: 9,
//    // borderWidth: scale(1),
//    // borderColor: 'rgba(0,0,0,0.15)',
//    paddingVertical: 15,
//    flexDirection: 'row',
//    // left: normalized.width(1.8),
//  },
//  linkButton: {
//     justifyContent: 'center',
//     width: widthPercentageToDP(90),
//     backgroundColor: 'white',
//    marginTop: 10,
//     borderRadius: 9,
//     // borderWidth: scale(1),
// borderColor: '#D60665',
//     paddingVertical: 15,
//     flexDirection: 'row',
//     borderWidth:1
//     // left: normalized.width(1.8),
//   },
// })





// export default passwordscreen;



import React, { useState } from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Alert
} from 'react-native';
import { heightPercentageToDP, widthPercentageToDP } from 'react-native-responsive-screen';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { useDispatch, useSelector } from 'react-redux';
import { setpassword, setUser } from '../../../../store/reducer';
import Button from '../../../Components/Custom/Button';
import { fontSize } from '../../../Components/Constants';
import {RegisterUser} from '../../../../store/Services/auth.services';
// import MaterialCommunityIcons from 'react-native-vector-icons';

// import MaterialCommunityIcons from 'react-native-vector-icons'
const signUpValidationSchema = Yup.object().shape({
  password: Yup
    .string()
    .min(8, ({ min }) => `Password must be at least ${min} characters`)
    .required('Password is required')
    // .matches(
    //   /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[^A-Za-z0-9]).{8,}$/,
    //   'Must Contain 8 Characters, One Uppercase, One Lowercase, One Number, and One Special Character',
   // ),
});

const PasswordScreen = ({ navigation, route }) => {
  const [showEye, setShowEye] = useState(false);
  const [loader, setLoader] = useState(false);

  const [showPassword, setShowPassword] = useState(false); 
  
  // Function to toggle the password visibility state 
  const toggleShowPassword = () => { 
      setShowPassword(!showPassword); 
  };

  const { paramemail} = route.params; // Extracting email passed from Emailscreen
  console.log('route==', route)
  const dispatch = useDispatch();

  const AddPassword = useSelector((state) => state?.root?.user?.password);

  // const handlePassPress = (enteredPassword) => {
  //   dispatch(setpassword(enteredPassword));
  //   dispatch(setUser(paramemail)); // Dispatching email to Redux
  //   navigation.navigate('Home'); // Navigate to Home screen or any other screen
  //   console.log('Email:', paramemail);
  //   console.log('Password:', enteredPassword);
  // };
  const passBtnclick = useSelector(state => state?.root?.user?.token);
  console.log('🚀 ~ file: index.js:13 ~ Login ~ EmailBtnclick:', passBtnclick);

  const handlePasswordSubmit = async (data, enteredPassword, paramemail, resetForm) => {
    setLoader(true);
  
    try {
      const response = await RegisterUser({ email: paramemail, password: enteredPassword, name: 'example', token: 'example_token' });
      
      if (response.status) {
        dispatch(setpassword(data));
        dispatch(setUser(response.value));
        resetForm(); // Reset the form
        setLoader(false);
        navigation.navigate('Home');
      } else {
        setLoader(false);
        Alert.alert(response.value); // Display the error message
      }
    } catch (error) {
      setLoader(false);
      console.error('Error in handlePasswordSubmit:', error);
      // Handle any unexpected errors here
    }
  };
  
  





  // const handlePasswordSubmit = async (data) => {
  //   handlePassPress(data.password);
  // };

  return (
    <Formik
      initialValues={{ password: '' }}
      validationSchema={signUpValidationSchema}
      onSubmit={(values, { resetForm }) => handlePasswordSubmit(values, values.password, route.params.paramemail, resetForm)}
    >
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
          <View style={{ padding: 20 }}>
            <TouchableOpacity onPress={() => navigation.navigate('Emailscreen')}>
              <Image style={styles.arrimg} source={require('../../../../assets/Images/leftarr.png')} />
            </TouchableOpacity>
          </View>

          <Image style={{ height: heightPercentageToDP(10), width: widthPercentageToDP(20), marginLeft: 20 }} source={require('../../../../assets/Images/emailicon.png')} />
          <View style={{ padding: 12 }}>
            <Text style={styles.DealText}>Log in with your email</Text>
   <Text style={styles.Text}>Log in with your password to{"\n"}<Text style={styles.paramemail}>{route.params.paramemail} </Text> Or get a login link via email.</Text>


            <TextInput
              placeholder="Password"
              placeholderTextColor="black"
           //   secureTextEntry={!showPassword}
              style={styles.loginButton}
              secureTextEntry
              onChangeText={handleChange('password')}
              value={values.password}
              onBlur={() => setFieldTouched('password')}
            />
            {/* <MaterialCommunityIcons
                    name={showPassword ? 'eye-off' : 'eye'} 
                    size={24} 
                    color="black"
                    style={{marginLeft:10}} 
                    onPress={toggleShowPassword} 
                />  */}
              {/* <TouchableOpacity
                  onPress={() => setShowEye(!showEye)}
                  style={{position: 'absolute', right: 10, bottom: 10}}>
                  <Feather
                    name={showEye ? 'eye' : 'eye-off'}
                    size={20}
                    color='#262E2B'
                  />
                </TouchableOpacity> */}
            {errors.password && touched.password && (
              <Text style={{ color: 'red' }}>{errors.password}</Text>
            )}
            <View style={{padding:5,
              // backgroundColor:'red',
                }}><Text style={styles.paramemail}>I forgot my password</Text></View>
            
          </View>

          <View style={styles.BottomView}>
            <Button
              disabled={!isValid || !dirty}
              disableStyle={{
                borderWidth: 1,
                borderColor: 'rgba(0,0,0,.25)',
                backgroundColor: '#C4C4C4',
              }}
              disableTextColor={'rgba(0,0,0,.25)'}
              textStyle={styles.Buttontext}
              style={styles.continueButton}
              text={'Log in with password'}
              onPress={handleSubmit}
            />
             <TouchableOpacity
            style={styles.linkButton}
             onPress={() => navigation.navigate('Login')}
         >
           <Text style={[styles.returnToLogic, {color:'#D60665'}]}>Send me a login link</Text>
          </TouchableOpacity>
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
  arrimg: {
    height: heightPercentageToDP(2),
    width: widthPercentageToDP(6),
    marginLeft: 5,
  },
  DealText: {
    fontSize: 25,
    fontWeight: '600',
    color: 'black',
    padding: 5,
  },
  Text: {
    fontSize: fontSize.avgSmall,
    fontWeight: '400',
    color: 'black',
    padding: 8,
  },
  loginButton: {
    justifyContent: 'center',
    width: widthPercentageToDP(90),
    marginTop: 15,
    borderRadius: 9,
    borderColor: '#C4C4C4',
    borderWidth: 1,
    paddingHorizontal: 10,
    color:'black'
  },
  BottomView: {
    position: 'absolute',
    bottom: 0,
    backgroundColor: 'white',
    paddingVertical: 15,
    justifyContent: 'center',
    width: '100%',
    paddingHorizontal: 15,
    borderWidth: 1,
    borderColor: '#EDEDED',
    shadowOpacity: 10,
    shadowRadius: 20,
    shadowOffset: {
      width: 0,
      height: 0,
    },
    elevation: 50,
  },
  continueButton: {
    justifyContent: 'center',
    width: widthPercentageToDP(90),
    borderRadius: 9,
    paddingVertical: 15,
  },
  Buttontext: {
    color: 'white',
  },
  paramemail:{
    color:'#D60665',
   fontSize:fontSize.small,
   // textDecorationLine:'underline',
    fontWeight:'600'
    
  },
   linkButton: {
    justifyContent: 'center',
    width: widthPercentageToDP(90),
    backgroundColor: 'white',
   marginTop: 10,
    borderRadius: 9,
    // borderWidth: scale(1),
borderColor: '#D60665',
    paddingVertical: 15,
    flexDirection: 'row',
    borderWidth:1
    // left: normalized.width(1.8),
  },
   returnToLogic: {
   color: 'white',
   fontWeight: '600',
   fontSize: fontSize.avgSmall
 },
});

export default PasswordScreen;

