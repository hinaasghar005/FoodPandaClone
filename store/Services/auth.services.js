 import {ENDPOINTS, HTTP_CLIENT} from '../../exporter';
import {GoogleSignin} from '@react-native-google-signin/google-signin';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
import messaging from '@react-native-firebase/messaging';
import {userAccData} from './general.service';


//import { auth, firestore } from '@react-native-firebase/auth';





let HEADERS = {
  Accept: 'application/json',
};

 export const loginUser = (params) => {
  return HTTP_CLIENT.post(ENDPOINTS.LOGIN, params);
};

export const RegisterUser = async (values, token) => {
  let obj = null;
  await auth()
    .createUserWithEmailAndPassword(values.email, values.password)
    .then(async (val) => {
      let createUser = {
        uid: val.user.uid,
        email: values.email,
  
        password: values.password,
        photo: 'https://i.ytimg.com/vi/-PaEGleBEIk/maxresdefault.jpg',
        createdAt: val.user.metadata.creationTime,
        deviceId: token,
        
      };
      saveuser(val.user.uid, createUser);
      obj = { status: true, value: createUser };
      console.log('createus====',createUser)
    })
    .catch((err) => {
      let error = '';

      if (err.code === 'auth/email-already-in-use') {
        error = 'email address is already in use';
      }

      if (err.code === 'auth/invalid-email') {
        error = 'Invalid email address';
      }
      obj = { status: false, value: error };
    });

  return obj;
};

 export const ResetPassword = async (email) => {
  let r;
  await auth()
    .sendPasswordResetEmail(email)
    .then((eew) => {
      r = true;
    })
    .catch((e) => {
      console.log('err==>', e);
      r = false;
    });
  return r;
};

 export const LoginUser = async (values, token) => {
  let obj = null;
  await auth()
    .signInWithEmailAndPassword(values.email, values.password)
    .then(async (val) => {
      const userDetail = await userAccData(val.user.uid);
      let objValue = {
        ...userDetail,
        deviceId: token,
      };
      await firestore().collection('users').doc(val.user.uid).set(objValue);
      obj = { status: true, value: objValue };
    })
    .catch((err) => {
      let error = err;
      if (err.code === 'auth/wrong-password') {
        error = 'Wrong password';
      }

      if (err.code === 'auth/user-not-found') {
        error = 'User not found';
      }

      obj = { status: false, value: error };
    });

  return obj;
};

export const googleSign = async (token) => {
  try {
    await GoogleSignin.hasPlayServices({ showPlayServicesUpdateDialog: true });

    const { idToken } = await GoogleSignin.signIn();

    const googleCredential = auth.GoogleAuthProvider.credential(idToken);

    const userData = await auth().signInWithCredential(googleCredential);

    let User = {
      uid: userData.user.uid,
      email: userData.user.email,
      password: '',
      name: userData.user.displayName,
      photo: userData.user.photoURL,
      createdAt: userData.user.metadata.creationTime,
      deviceId: token,
    
    };

    // Create a new collection for the user in Firestore
    await firestore().collection('users').doc(userData.user.uid).set(User);

    const check = await userAccData(userData.user.uid);

    if (!check) {
      saveuser(userData.user.uid, User);
      return { status: true, value: User };
    } else {
      return { status: true, value: check };
    }
  } catch (err) {
    console.log('Google sign-in error: ', err);
    return { status: false, value: null };
  }
};


export const userData = async (id) => {
  const userData = await firestore().collection('users').doc(id).get();
  return userData.exists ? userData.data() : null;
};

//  export const saveuser = async (id, obj) => {
//   try {
//     const response = await firestore().collection('users').doc(id).set(obj);
//     console.log('saveruser====', response)
//    return response
//   } catch (error) {
//     console.log('-->>>>>--', error);
//   }
// };


export const saveuser = async (id, obj) => {
  try {
    await firestore().collection('users').doc(id).set(obj);
    
  } catch (error) {
    console.log('-->>>>>--', error);
   // console.log('suser===', saveuser)
    
  }
};
 export const getUserDataFromEmail = async (email) => {
  try {
    let data = await firestore().collection('users').where('email', '==', email).get();
    return data?.docs ? data?.docs[0].data() : '';
  } catch (error) {
    console.log('-->>>>>--', error);
  }
};
