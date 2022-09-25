import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Login from "./src/screen/LoginPage";
import Register from "./src/screen/RegisterPage";
import Home from "./src/screen/MainPage";
import HomePage from "./src/screen/HomePage";
import DetailTodo from "./src/screen/DetailTodo";
import Category from "./src/screen/Category";
import { NavigationContainer } from "@react-navigation/native";
// import HomePage from "./screen/HomePage"

const Stack = createNativeStackNavigator();

function Container() {
  return (
    <NavigationContainer>
      <Stack.Navigator alignItems="center">
        <Stack.Screen
          name="Home"
          component={Home}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen name="HomePage" component={HomePage} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Register" component={Register} />
        <Stack.Screen name="DetailTodo" component={DetailTodo} />
        <Stack.Screen name="Category" component={Category} />
        {/* <Stack.Screen name="TodoApp" component={HomePage} /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Container;
