import { Text, Button, Image, Center, Container, Box } from "native-base";

//! COMPONENTS VARIABLE
import TodoImg from "../../assets/WaysTodo.png";
const FrontPageImg = require("../../assets/frontImage.png");

//! FRONTPAGE FUNCTION
function Home({ navigation }) {
  return (
    <Center width="100%">
      <Container alignItems="center">
        <Box marginTop="3rem">
          <Image source={FrontPageImg} w="228" h="258" />
          <Image source={TodoImg} w="230px" h="40px" />
        </Box>

        <Text font="avenir" fontSize="12" fontWeight="400" textAlign="center" mt="2rem" mb="3rem">
          Write your activity and finish your activity. Fast, Simple and Easy to Use
        </Text>
      </Container>
      <Container mt="3rem" alignItems="center">
        <Button width={80} marginBottom="1rem" alignItems="center" bg="danger.500" rounded="md" shadow={3} onPress={() => navigation.navigate("Register")}>
          <Text color="white" fontWeight="bold" fontSize="20">
            Register
          </Text>
        </Button>
        <Button width={80} bg="muted.400" rounded="md" shadow={3} onPress={() => navigation.navigate("Login")}>
          <Text color="white" fontWeight="bold" fontSize="20">
            Login
          </Text>
        </Button>
      </Container>
    </Center>
  );
}

export default Home;
