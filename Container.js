import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Login from "./src/screen/LoginPage";
import Register from "./src/screen/RegisterPage";
import Home from "./src/screen/FrontPage";
// import HomePage from "./screen/HomePage"

const Stack = createNativeStackNavigator();

function Container() {
  return (
    <Stack.Navigator alignItems="center">
      <Stack.Screen
        name="Home"
        component={Home}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen name="Register" component={Register} />
      <Stack.Screen name="Login" component={Login} />
      {/* <Stack.Screen name="TodoApp" component={HomePage} /> */}
    </Stack.Navigator>
  );
}

export default Container;
