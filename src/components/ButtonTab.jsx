import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import HomePage from "../screen/HomePage";
import AddList from "../screen/AddList";
import Category from "../screen/Category";
// import DetailTodo from "../screen/DetailTodo";
// import AddCategoryScreen from "../screen/AddCategoryScreen";

const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator
      initialRouteName="HomePage"
      screenOptions={{
        tabBarActiveTintColor: "red",
        header: () => null,
      }}
    >
      <Tab.Screen
        name="HomePage"
        options={{
          tabBarLabel: "Home",
          tabBarIcon: ({ color, size }) => <MaterialCommunityIcons name="clipboard-text-multiple" color={color} size={size} />,
        }}
        component={HomePage}
      />
      <Tab.Screen
        name="Category"
        options={{
          tabBarLabel: "Add Category",
          tabBarIcon: ({ color, size }) => <Ionicons name="add-circle-sharp" color={color} size={size} />,
        }}
        component={Category}
      />
      <Tab.Screen
        name="AddList"
        options={{
          tabBarLabel: "Add List",
          tabBarIcon: ({ color, size }) => <Ionicons name="duplicate" color={color} size={size} />,
        }}
        component={AddList}
      />
    </Tab.Navigator>
  );
}

export default MyTabs;
