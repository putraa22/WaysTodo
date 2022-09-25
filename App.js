import React from "react";
import Container from "./Container";
import { NativeBaseProvider } from "native-base";
import { SafeAreaProvider } from "react-native-safe-area-context";

//! EXPORT PLACE
export default function App() {
  return (
    <SafeAreaProvider>
      <NativeBaseProvider>
        <Container />
      </NativeBaseProvider>
    </SafeAreaProvider>
  );
}
