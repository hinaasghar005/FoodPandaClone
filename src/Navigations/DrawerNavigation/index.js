import * as React from 'react';
import { Button, View } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import Signup from '../../Screens/Authflow/Login';
import Login from '../../Screens/Authflow/Login';
import Home from '../../Screens/Authflow/Home';
import Invitefriend from '../../Screens/Authflow/Invitefriends';
import NotificationsScreen from '../../Screens/Authflow/NotificationScreen';
import Drawercontent from '../../Components/custom Drawer';
const DrawerNavigate =()=>{
    return <DrawerStack/>
}
const Drawer = createDrawerNavigator();

const DrawerStack =()=> {
  return (
    
      <Drawer.Navigator drawerContent={(props)=> <Drawercontent{...props}/>} initialRouteName="Home">
        <Drawer.Screen name="Home" component={Home} options={{}} />
        <Drawer.Screen name="Login" component={Login} />
        <Drawer.Screen name="Invitefriend" component={Invitefriend} />
        <Drawer.Screen name="NotificationsScreen" component={NotificationsScreen} />
       
      </Drawer.Navigator>

  );
}
export default DrawerNavigate;