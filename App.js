import { StatusBar } from 'expo-status-bar';
import 'react-native-gesture-handler';
import React from 'react';
import { SafeAreaView, StyleSheet, Text, View, NativeModules } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Login from './components/Login.js';
import Signup from './components/Signup.js';
import Bookings from './components/Bookings.js';
import Home from './components/Home.js';
import Profile from './components/Profile.js';
import { AuthContext } from './context.js';

const { StatusBarManager } = NativeModules;

const AuthStack = createStackNavigator();
const HomeStack = createStackNavigator();
const BookingsStack = createStackNavigator();
const ProfileStack = createStackNavigator();
const Tabs = createBottomTabNavigator();


const HomeStackScreen = () => (
  <HomeStack.Navigator>
    <HomeStack.Screen name="Home" component={Home}/>
  </HomeStack.Navigator>
)
const BookingsStackScreen = () => (
  <BookingsStack.Navigator>
    <BookingsStack.Screen name="Bookings" component={Bookings}/>
  </BookingsStack.Navigator>
)
const ProfileStackScreen = () => (
  <ProfileStack.Navigator>
    <ProfileStack.Screen name="Profile" component={Profile}/>
  </ProfileStack.Navigator>
)
export default function App() {
  //set user token to something to bypass login page
  const [usertoken,setUserToken] = React.useState(null);

  const authContext = React.useMemo(() =>{
    return {
      signIn: (newUserToken)=>{
        setUserToken(newUserToken)
      },
      signUp: ()=>{},
      signOut: ()=>{
        setUserToken(null)
      }
    }
  },[])
  return (
    <AuthContext.Provider value={authContext}>
      <SafeAreaView style={[styles.container]}>
        <NavigationContainer>
          {usertoken ? (
            <Tabs.Navigator>
              <Tabs.Screen name="Home" component={HomeStackScreen}/>
              <Tabs.Screen name="Bookings" component={BookingsStackScreen}/>
              <Tabs.Screen name="Profile" component={ProfileStackScreen}/>
            </Tabs.Navigator>
            
          ):(
            <AuthStack.Navigator>
              <AuthStack.Screen name="Login" component={Login} options={{ headerShown: false }}></AuthStack.Screen>
              <AuthStack.Screen name="Signup" component={Signup} options={{ headerShown: false }}></AuthStack.Screen>
            </AuthStack.Navigator>   
          )}
        </NavigationContainer>
      </SafeAreaView>
    </AuthContext.Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex : 1,
    paddingTop : StatusBarManager.HEIGHT,
  },
});
