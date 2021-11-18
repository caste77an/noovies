import React, { useState } from "react";
import AppLoading from "expo-app-loading";
import { Image, Text } from "react-native";
import * as Font from "expo-font";
import { Ionicons } from "@expo/vector-icons";
import { Asset } from "expo-asset";

export default function App() {
  const [ready, setRedady] = useState(false);

  const onFinish = () => setRedady(true);
  const startLoading = async () => {
    await Font.loadAsync(Ionicons.font);
    await Asset.loadAsync(require("./my-face.jpeg"));
    await Image.prefetch("https://reactnative.dev/img/oss_logo.png");
  };

  if (!ready) {
    return (
      <AppLoading
        startAsync={startLoading}
        onFinish={onFinish}
        onError={console.error}
      />
    );
  }
  return <Text>We are done loading!</Text>;
}
