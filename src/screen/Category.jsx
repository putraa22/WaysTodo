import { StyleSheet } from "react-native";
import React from "react";
import { VStack, Text, View, Button, FormControl, Input, HStack, Box, Flex, ScrollView } from "native-base";
import Footer from "../components/Footer";

const AddCategoryScreen = () => {
  return (
    <>
      <VStack space={1} mx="5" my="2">
        <Text fontSize="24" fontWeight="bold">
          Add Category
        </Text>
        <FormControl my="5">
          <Input placeholder="Category" backgroundColor="gray.200" placeholderTextColor="black" size="md" />
        </FormControl>
        <Button colorScheme="pink">
          <Text fontSize="20" fontWeight="bold" color="white">
            {" "}
            Add Category{" "}
          </Text>
        </Button>
      </VStack>
      <Text fontSize="24" fontWeight="bold" mx="5" my="2">
        List Category
      </Text>
      <ScrollView>
        <VStack space={1} mx="5" my="1" maxW="xs">
          <HStack space={2} my="2" maxWidth="xs" flexWrap="wrap">
            {/* <Flex > */}
            <Box backgroundColor="blue.300" borderRadius={4} my="3">
              <Text mx="3" my="2" bold color="white">
                Study
              </Text>
            </Box>
            <Box backgroundColor="red.300" borderRadius={4} my="3">
              <Text mx="3" my="2" bold color="white">
                Home Work
              </Text>
            </Box>
            {/* </Flex> */}
          </HStack>
        </VStack>
      </ScrollView>
      <Footer />
    </>
  );
};

export default AddCategoryScreen;

const styles = StyleSheet.create({});
