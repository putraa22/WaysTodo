import { StyleSheet, TouchableOpacity, View, Pressable } from "react-native";
import { ScrollView, FlatList, VStack, Text, Box, HStack, Avatar, Input, Icon, Select, CheckIcon } from "native-base";
import { useState, useEffect } from "react";
import { ListItem } from "react-native-elements";

import axios from "axios";

import { AntDesign } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import dateFormat from "dateformat";
// import CardTodo from "../Commponent/CardTodo";

export default function TodoList({ navigation }) {
  const [todos, setTodo] = useState([]);
  const [service, setService] = useState("");
  const [date, setDate] = useState(new Date());
  console.log(date);
  const convertDate = dateFormat(date, "yyyy-mm-dd");
  console.log(convertDate);
  console.log(typeof convertDate);

  const getTodos = async () => {
    try {
      const response = await axios.get("https://api.kontenbase.com/query/api/v1/c6c372e8-7fac-48ee-8da4-7dc97dfab45b/todos?$lookup=*");
      setTodo(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getTodos();
  }, []);

  //   Create Component List
  const _renderItem = ({ item }) => {
    console.log(item);
    return (
      <>
        <Pressable key={item._id} onPress={() => navigation.navigate("DetailTodo", item)}>
          <Box backgroundColor="blue.200" style={{ overflow: "hidden", marginBottom: "1rem" }}>
            <HStack justifyContent="space-between" space={2} px="3">
              <VStack>
                <Box pt="4">
                  <Text fontWeight="bold" fontSize="md">
                    {item.name}
                  </Text>
                </Box>
                <Box pt="2">
                  <Text isTruncated maxW="48" w="95%" textAlign="justify">
                    {item.desc}
                  </Text>
                </Box>
                <Box py={4}>
                  <HStack space={1}>
                    <MaterialIcons name="date-range" size={20} color="black" />
                    <Text>{dateFormat(item.date, "dd mmm yyyy")}</Text>
                  </HStack>
                </Box>
              </VStack>
              <VStack space={1} py="3">
                <Box py="2" borderRadius={9} backgroundColor="blue.300">
                  <Text px={2} color="white" bold>
                    Todo
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
  return (
    <>
      <VStack space={1} justifyContent="center" mx="6" mb={3}>
        <HStack justifyContent="space-between" space={5}>
          <Box alignItems="start">
            <Text fontSize="2xl" bold>
              Hi, User
            </Text>
            <Text fontSize="sm" color="red.400">
              200 List
            </Text>
          </Box>
          <Box mt="2">
            <Avatar
              bg="green.500"
              source={{
                uri: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
              }}
              borderWidth="2"
              borderColor="red.400"
            ></Avatar>
            <TouchableOpacity onPress={() => navigation.navigate("MainPage")} style={{ marginTop: 5 }}>
              <Text>Logout</Text>
              <AntDesign name="logout" size={20} color="black" />
            </TouchableOpacity>
          </Box>
        </HStack>
        <Input
          mt="5"
          placeholder="Search List..."
          backgroundColor="gray.200"
          width="100%"
          borderRadius="4"
          py="1"
          px="1"
          fontSize="14"
          fontWeight="medium"
          InputLeftElement={<Icon m="2" ml="2" size="5" color="gray.400" as={<AntDesign name="search1" size={24} color="black" />} />}
        />
        <HStack space={2} justifyContent="space-between">
          <Select
            selectedValue={service}
            maxWidth="24"
            accessibilityLabel="Pick Date"
            placeholder="Pick Date"
            backgroundColor="gray.200"
            _selectedItem={{
              bg: "gray.100",
              endIcon: <MaterialIcons name="date-range" size={5} color="black" />,
            }}
            mt={1}
            onValueChange={(itemValue) => setService(itemValue)}
          >
            <Select.Item label="Date Time Picker" value="ux" />
          </Select>
          <Select
            selectedValue={service}
            maxWidth="24"
            accessibilityLabel="Category"
            placeholder="Category"
            backgroundColor="gray.200"
            _selectedItem={{
              bg: "teal.600",
              endIcon: <CheckIcon size="5" />,
            }}
            mt={1}
            onValueChange={(itemValue) => setService(itemValue)}
          >
            <Select.Item label="Study" value="study" />
            <Select.Item label="Homework" value="homework" />
            <Select.Item label="Workout" value="workout" />
          </Select>
          <Select
            selectedValue={service}
            maxWidth="24"
            accessibilityLabel="Status"
            placeholder="Status"
            backgroundColor="gray.200"
            _selectedItem={{
              bg: "teal.600",
              endIcon: <CheckIcon size="5" />,
            }}
            mt={1}
            onValueChange={(itemValue) => setService(itemValue)}
          >
            <Select.Item label="Finished" value="done" />
            <Select.Item label="Not Finished" value="notDone" />
          </Select>
        </HStack>
      </VStack>
      <ScrollView flex="1">
        <VStack space={1} justifyContent="center" mx="6">
          <View>
            <FlatList navigation={navigation} data={todos} renderItem={_renderItem} keyExtractor={(item) => item._id} />
          </View>
        </VStack>
      </ScrollView>
    </>
  );
}
