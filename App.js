import React from "react";
import Container from "./Container";
import { NativeBaseProvider } from "native-base";
import { NavigationContainer } from "@react-navigation/native";

//! EXPORT PLACE
export default function App() {
  return (
    <NavigationContainer>
      <NativeBaseProvider>
        <Container />
      </NativeBaseProvider>
    </NavigationContainer>
  );
}
