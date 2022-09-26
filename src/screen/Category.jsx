import { StyleSheet } from "react-native";
import React from "react";
import { VStack, Text, View, Button, FormControl, Input, HStack, Box, Flex, ScrollView } from "native-base";
import { useState } from "react";
import axios from "axios";
import { useEffect } from "react";
// import Footer from "../components/Footer";

const AddCategoryScreen = () => {
  const [name, setName] = useState("");
  const [categories, setCategories] = useState([]);

  const postCategory = async () => {
    try {
      const data = JSON.stringify({
        name: name,
      });

      const response = await axios.post("https://api.kontenbase.com/query/api/v1/c6c372e8-7fac-48ee-8da4-7dc97dfab45b/category", data);
      console.log(response);
      window.location.reload();
    } catch (error) {
      console.log(error);
    }
  };

  const getCategory = async () => {
    try {
      const response = await axios.get("https://api.kontenbase.com/query/api/v1/c6c372e8-7fac-48ee-8da4-7dc97dfab45b/category");
      setCategories(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getCategory();
  }, []);

  return (
    <>
      <VStack space={1} mx="5" my="2">
        <Text fontSize="24" fontWeight="bold">
          Add Category
        </Text>
        <FormControl my="5">
          <Input placeholder="Category" backgroundColor="gray.200" placeholderTextColor="black" value={name} onChangeText={(text) => setName(text)} size="md" />
        </FormControl>
        <Button
          colorScheme="pink"
          onPress={() => {
            postCategory();
          }}
        >
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
            {categories.map((item) => (
              <Box backgroundColor="blue.300" borderRadius={4} my="3">
                <Text mx="3" my="2" bold color="white">
                  {item.name}
                </Text>
              </Box>
            ))}
          </HStack>
        </VStack>
      </ScrollView>
    </>
  );
};

export default AddCategoryScreen;

const styles = StyleSheet.create({});
