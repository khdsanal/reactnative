import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import Editprofile from "./screens/editprofile";

import Login from "./screens/login";
import Registration from "./screens/registration";


const stack=createStackNavigator()

function MyStack(){
  return(
    <stack.Navigator>
      <stack.Screen
        name='login'
        component={Login}
        options={{headerShown:false}}
      />
        <stack.Screen
        name='registration'
        component={Registration}
        options={{headerShown:false}}
      />
       <stack.Screen
        name='editprofile'
        component={Editprofile}
        options={{headerShown:false}}
      />
    </stack.Navigator>
  )
}
export default function App(){
  return(
    <NavigationContainer>
      <MyStack/>
    </NavigationContainer>
  )
}