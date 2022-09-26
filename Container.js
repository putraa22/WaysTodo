import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Login from "./src/screen/LoginPage";
import Register from "./src/screen/RegisterPage";
import Home from "./src/screen/MainPage";
import HomePage from "./src/screen/HomePage";
import DetailTodo from "./src/screen/DetailTodo";
import Category from "./src/screen/Category";
import AddList from "./src/screen/AddList";
import { NavigationContainer } from "@react-navigation/native";
// import HomePage from "./screen/HomePage"
import ButtonTab from "./src/components/ButtonTab";

const Stack = createNativeStackNavigator();

function Container() {
  return (
    <NavigationContainer>
      <Stack.Navigator alignItems="center">
        <Stack.Screen
          name="Main"
          component={ButtonTab}
          options={{
            headerShown: false,
          }}
        />

        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Register" component={Register} />
        <Stack.Screen name="DetailTodo" component={DetailTodo} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Container;
