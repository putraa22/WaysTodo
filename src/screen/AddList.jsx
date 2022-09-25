import { StyleSheet } from "react-native";
import React from "react";
import { VStack, Text, View, FormControl, Input, Button, ScrollView, HStack, Box, CheckIcon, Select, TextArea } from "native-base";

const AddList = () => {
  const [service, setService] = React.useState("");
  return (
    <>
      <VStack space={1} mx="5" my="2">
        <Text fontSize="24" fontWeight="bold">
          Add Todo
        </Text>
        <FormControl my="5">
          <Input placeholder="Todo Name" backgroundColor="gray.200" placeholderTextColor="black" size="md" my="3" />
          <Select
            selectedValue={service}
            minWidth="200"
            accessibilityLabel="Category"
            placeholder="Category"
            backgroundColor="gray.200"
            placeholderTextColor="black"
            size="md"
            my="3"
            _selectedItem={{
              bg: "teal.600",
              endIcon: <CheckIcon size="5" />,
            }}
            mt={1}
            onValueChange={(itemValue) => setService(itemValue)}
          >
            <Select.Item label="Study" value="ux" />
            <Select.Item label="Home Work" value="web" />
          </Select>
          <Select
            selectedValue={service}
            minWidth="200"
            accessibilityLabel="Due Date"
            placeholder="Due Date"
            placeholderTextColor="black"
            backgroundColor="gray.200"
            size="md"
            my="3"
            _selectedItem={{
              bg: "teal.600",
              endIcon: <CheckIcon size="5" />,
            }}
            mt={1}
            onValueChange={(itemValue) => setService(itemValue)}
          >
            <Select.Item label="Today" value="ux" />
            <Select.Item label="Next Week" value="web" />
          </Select>
          <TextArea h={24} backgroundColor="gray.200" placeholder="Description" placeholderTextColor="black" minWidth="200" size="lg" my="3" />
        </FormControl>
        <Button colorScheme="pink">
          <Text fontSize="20" fontWeight="bold" color="white">
            {" "}
            Add New Todo{" "}
          </Text>
        </Button>
      </VStack>
    </>
  );
};

export default AddList;

const styles = StyleSheet.create({});
