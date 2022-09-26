import { StyleSheet } from "react-native";
import React from "react";
import { Box, HStack, VStack, Text, View, ScrollView } from "native-base";
import { Ionicons } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import Footer from "../components/Footer";

const DetailTodo = ({ navigation }) => {
  return (
    <>
      <ScrollView p="3">
        <Box backgroundColor="blue.200" my="2" style={{ overflow: "hidden" }} p="4">
          <HStack justifyContent="space-between" space={2} px="3">
            <Box pt="4">
              <Text fontWeight="bold" fontSize="24">
                Title
              </Text>
            </Box>
            <VStack space={1}>
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
          <VStack space={2} px="3" py="3">
            <Box pt="2">
              <Text textAlign="justify">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eos enim eum est quasi consequatur! Quo commodi quidem eum. Cumque repudiandae maiores voluptas illo nisi minus magnam molestias iure debitis consequatur. Lorem ipsum
                dolor sit amet consectetur adipisicing elit. Maxime cumque, blanditiis commodi error recusandae magnam possimus nostrum eaque iste mollitia architecto ut totam, molestiae repudiandae vitae esse similique? Minima,
                perspiciatis!
              </Text>
            </Box>
            <Box py={4}>
              <HStack space={1}>
                <MaterialIcons name="date-range" size={20} color="black" />
                <Text>Date</Text>
              </HStack>
            </Box>
          </VStack>
          <VStack space={1} py="3"></VStack>
        </Box>
      </ScrollView>
      <Footer navigation={navigation} />
    </>
  );
};

export default DetailTodo;

const styles = StyleSheet.create({});
