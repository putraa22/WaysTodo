import { StyleSheet, View } from "react-native";
import React from "react";
import { Box, HStack, VStack, Text, Pressable } from "native-base";
import { MaterialIcons } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";

const CardDashboard = ({ navigation }) => {
  return (
    <>
      <Pressable onPress={() => navigation.navigate("DetailTodo")}>
        <Box backgroundColor="blue.200" my="2" style={{ overflow: "hidden" }}>
          <HStack justifyContent="space-between" space={2} px="3">
            <VStack>
              <Box pt="4">
                <Text fontWeight="bold" fontSize="md">
                  Title
                </Text>
              </Box>
              <Box pt="2">
                <Text isTruncated maxW="48" w="95%" textAlign="justify">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eos enim eum est quasi consequatur! Quo commodi quidem eum. Cumque repudiandae maiores voluptas illo nisi minus magnam molestias iure debitis consequatur.
                </Text>
              </Box>
              <Box py={4}>
                <HStack space={1}>
                  <MaterialIcons name="date-range" size={20} color="black" />
                  <Text>Date</Text>
                </HStack>
              </Box>
            </VStack>
            <VStack space={1} py="3">
              <Box py="2" borderRadius={9} backgroundColor="blue.300">
                <Text px={2} color="white" bold>
                  Home Work
                </Text>
              </Box>
              <Text textAlign="center" mt={3}>
                <Ionicons name="md-checkmark-circle" size={44} color="lime" />
              </Text>
            </VStack>
          </HStack>
        </Box>
      </Pressable>
    </>
  );
};

export default CardDashboard;

const styles = StyleSheet.create({});
