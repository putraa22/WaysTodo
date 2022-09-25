import * as React from "react";
import { Input, Stack, View, Text, Image, Button, HStack, VStack, Center } from "native-base";
import { TouchableOpacity } from "react-native";
import LoginImage from "../../assets/loginImage.png";

function Login({ navigation }) {
  return (
    <Center alignItems="center" w="100%">
      <VStack>
        <View alignItems="center" marginTop="3rem" marginBottom="2rem">
          <Image source={LoginImage} w="250" h="230" />
        </View>
        <Text fontSize="25" fontWeight="800" marginBottom="2rem">
          Login
        </Text>

        <Stack space={4} w="100%" marginBottom="3rem">
          <Input size="lg" variant="filled" backgroundColor="whitesmoke" p={2} mt={2} placeholder="Email" />

          <Input type="password" size="lg" variant="filled" backgroundColor="whitesmoke" p={2} placeholder="Password" />
        </Stack>

        <View marginBottom="1rem">
          <Button backgroundColor="danger.500" marginTop="4" onPress={() => navigation.navigate("HomePage")}>
            <Text color="muted.50" fontSize="17" fontWeight="bold">
              Login
            </Text>
          </Button>
        </View>

        <HStack justifyContent="center" marginTop="2" fontSize="16">
          <Text marginRight="1">New user ?</Text>
          <TouchableOpacity fontWeight="800" onPress={() => navigation.navigate("Register")}>
            <Text color="red.500" marginleft="1" fontWeight="500">
              Register
            </Text>
          </TouchableOpacity>
        </HStack>
      </VStack>
    </Center>
  );
}

export default Login;
