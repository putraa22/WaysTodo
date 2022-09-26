import { StyleSheet } from "react-native";
import React, { useState } from "react";
import { Box, HStack, VStack, Text, View, ScrollView } from "native-base";
import { Ionicons } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import Footer from "../components/Footer";
import axios from "axios";
import dateFormat from "dateformat";
import { useEffect } from "react";

const DetailTodo = ({ navigation, route }) => {
  const [date, setDate] = useState(new Date());
  const [todo, setTodo] = useState();

  const { _id } = route.params;
  console.log(_id);

  const getTodo = async () => {
    try {
      const response = await axios.get(`https://api.kontenbase.com/query/api/v1/c6c372e8-7fac-48ee-8da4-7dc97dfab45b/todos/${_id}`);
      console.log(response);
      setTodo(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getTodo();
  }, []);

  return (
    <>
      <ScrollView p="3">
        <Box backgroundColor="blue.200" my="2" style={{ overflow: "hidden" }} p="4">
          <HStack justifyContent="space-between" space={2} px="3">
            <Box pt="4">
              <Text fontWeight="bold" fontSize="24">
                {route.params.name}
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
              <Text textAlign="justify">{route.params.desc}</Text>
            </Box>
            <Box py={4}>
              <HStack space={1}>
                <MaterialIcons name="date-range" size={20} color="black" />
                <Text>{dateFormat(route.params.date, "dd mmm yyyy")}</Text>
              </HStack>
            </Box>
          </VStack>
          <VStack space={1} py="3"></VStack>
        </Box>
      </ScrollView>
      {/* <Footer navigation={navigation} /> */}
    </>
  );
};

export default DetailTodo;

const styles = StyleSheet.create({});
