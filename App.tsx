


// app.tsx
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
// import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import DrawerContent from './src/Screens/Authflow/DrawerContent';
import Home from './src/Screens/Authflow/Home';
import orderScreen from './src/Screens/Authflow/orderscreen';
import NotificationsScreen from './src/Screens/Authflow/NotificationScreen';
import Splash from './src/Screens/Authflow/Splash';
import Invitefriend from './src/Screens/Authflow/Invitefriends';
import Login from './src/Screens/Authflow/Login';
import Emailscreen from './src/Screens/Authflow/LoginwithEmail';
import passwordscreen from './src/Screens/Authflow/Passwordscreen';
// import { Store, store } from './store/Store';
import {persistReducer} from 'redux-persist';
import persistStore from 'redux-persist/es/persistStore';
import { PersistGate } from 'redux-persist/integration/react';
import { persistor, store } from './store/Store';
import {Provider} from 'react-redux';
import CreateAccount from './src/Screens/Authflow/createAccount';
// let persistor = persistStore(Store);



const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();



const DrawerNavigator = () => (
  <Drawer.Navigator  initialRouteName="Splash"
  drawerContent={(props) => <CreateAccount{...props}/>}>
  

 
     <Drawer.Screen         options={{
            headerShown:false,
            swipeEnabled:false,
            
        }
        }
     name="Home" component={Home} />
     <Drawer.Screen           options={{
            headerShown:false,
            
        }
        }
    name="Login" component={Login} /> 
    <Drawer.Screen           options={{
            headerShown:false,
            
        }
        }
    name="Emailscreen" component={Emailscreen} /> 
    <Drawer.Screen name="passwordscreen"   options={{
            headerShown:false,
            
        }
        } component={passwordscreen}/>
         <Drawer.Screen name="Splash"   options={{
            headerShown:false,
            
        }
        } component={Splash}/>
        <Drawer.Screen      options={{
            headerShown:false,
            
        }
        }    
         name="orderScreen" component={orderScreen}/>
        <Drawer.Screen options={{
            headerShown:false,
            
        }
        }      
        name="NotificationsScreen" component={NotificationsScreen}/>
        <Drawer.Screen   options={{
            headerShown:false,
            
        }
        }       name="Invitefriend"  component={Invitefriend}/>
        {/* <Drawer.Screen  options={{
            headerShown:false,
            
        }
        }
    name="CreateAccount" component={CreateAccount} /> */}

  </Drawer.Navigator>
);

const App = () => {
// const isUserLoggedIn = true;
  return(
<Provider store={store}>
          <PersistGate persistor={persistor}>

  <NavigationContainer>
    <DrawerNavigator />
  </NavigationContainer>
  </PersistGate>
 </Provider>
  )
};

export default App;



