import { StyleSheet, View } from "react-native";
import React from "react";
import { ScrollView, VStack, Text, Box, Flex, HStack, Avatar, Input, Icon, Select, CheckIcon, InfoIcon } from "native-base";
import { AntDesign } from "@expo/vector-icons";
import Footer from "../components/Footer";
import { MaterialIcons } from "@expo/vector-icons";
import CardDashboard from "../components/CardDashboard";

const Dashboard = ({ navigation }) => {
  const [service, setService] = React.useState("");
  return (
    <>
      <VStack space={1} justifyContent="center" mx="6" mb="3">
        <HStack justifyContent="space-between" space={5}>
          <Box alignItems="start">
            <Text fontSize="2xl" bold>
              Hi User
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
            >
              AJ
            </Avatar>
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
          <CardDashboard navigation={navigation} />
          <CardDashboard navigation={navigation} />
          <CardDashboard navigation={navigation} />
          <CardDashboard navigation={navigation} />
        </VStack>
      </ScrollView>
      <Footer />
    </>
  );
};

export default Dashboard;

const styles = StyleSheet.create({});
