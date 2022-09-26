import { StyleSheet } from "react-native";
import React from "react";
import { VStack, Text, FormControl, Input, Button, CheckIcon, Select, TextArea, ScrollView } from "native-base";
// import Footer from "../components/Footer";
import dateFormat from "dateformat";
import axios from "axios";
import { useState } from "react";

const AddList = () => {
  const [service, setService] = useState("");
  const [name, setName] = useState("");
  const [desc, setDesc] = useState("");
  const [category, setCategory] = useState();
  const [date, setDate] = useState(new Date());
  const [convertDate, setConvertDate] = useState(dateFormat(date, "yyyy-mm-dd"));

  console.log(date);
  console.log(convertDate);

  const sendTodo = async () => {
    try {
      const data = JSON.stringify({
        name: name,
        desc: desc,
        category: category,
        date: convertDate,
      });
      console.log("ini :", data);
      const response = await axios.post("https://api.kontenbase.com/query/api/v1/c6c372e8-7fac-48ee-8da4-7dc97dfab45b/todos", data);
      console.log("success", data);
      console.log("ini respon", response);
      window.location.reload();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <ScrollView>
        <VStack space={1} mx="5" my="2">
          <Text fontSize="24" fontWeight="bold">
            Add Todo
          </Text>
          <FormControl my="5">
            <Input
              placeholder="Todo Name"
              backgroundColor="gray.200"
              placeholderTextColor="black"
              size="md"
              my="3"
              value={name}
              onChangeText={(text) => {
                setName(text);
              }}
            />
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
              onValueChange={(value) => setCategory(value)}
            >
              <Select.Item label="Study" value="" />
              <Select.Item label="Home Work" value="" />
              <Select.Item label="Work Out" value="" />
            </Select>

            <Input placeholder={dateFormat(date, "dd mmm yyyy")} backgroundColor="gray.200" size="md" mb="3" editable={false} value={convertDate} onChangeText={(text) => setConvertDate(text)} />

            {/* <Select
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
            </Select> */}
            <TextArea h={24} backgroundColor="gray.200" placeholder="Description" placeholderTextColor="black" minWidth="200" size="lg" my="3" value={desc} onChangeText={(text) => setDesc(text)} />
          </FormControl>
          <Button
            colorScheme="pink"
            onPress={() => {
              sendTodo();
            }}
          >
            <Text fontSize="20" fontWeight="bold" color="white">
              Add New Todo
            </Text>
          </Button>
        </VStack>
      </ScrollView>
      {/* <Footer /> */}
    </>
  );
};

export default AddList;

const styles = StyleSheet.create({});
