import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const NativeStack = createNativeStackNavigator();

const Stack = () => (
  <NativeStack.Navigator>
    <NativeStack.Screen />
  </NativeStack.Navigator>
);

export default Stack;
