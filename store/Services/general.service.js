import { ENDPOINTS, HTTP_CLIENT } from '../exporter';
import firestore from '@react-native-firebase/firestore';



let HEADERS = {
  Accept: 'application/json',
};

// export const userData = async (id) => {
//   const userData = await firestore().collection("UserData").doc(id).get();
//   //console.log('set===', userData)
//   return userData.data;
// };

export const userData = async (id) => {
  const userData = await firestore().collection('users').doc(id).get();
  return userData.exists ? userData.data() : null;
};
 export const userAccData = async (id) => {
  const userData = await firestore().collection("users").doc(id).get();
  console.log('user Data=======', userData)
  return userData.data;
};

 export const setUserDate = async (id, obj) => {
  await firestore().collection("UserData").doc(id).set(obj);
};

// Usage example
// Note: The usage context of 'this' depends on where you're using it in your React Native code
// Make sure to call these functions appropriately in your React Native components or modules.
