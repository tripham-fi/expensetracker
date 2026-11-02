import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer, NavigationProp } from "@react-navigation/native";
import {
  createNativeStackNavigator,
  NativeStackNavigationProp,
} from "@react-navigation/native-stack";
import { StatusBar } from "expo-status-bar";
import AllExpensesScreen from "./screens/AllExpensesScreen";
import { RootBottomTabsParamList, RootStackParamList } from "./constants/types";
import RecentExpensesScreen from "./screens/RecentExpensesScreen";
import ManageExpensesScreen from "./screens/ManageExpensesScreen";
import { GlobalStyles } from "./constants/styles";
import { Ionicons } from "@expo/vector-icons";
import IconButton from "./components/UI/IconButton";

const Stack = createNativeStackNavigator<RootStackParamList>();
const BottomTabs = createBottomTabNavigator<RootBottomTabsParamList>();

const ExpensesOverview = () => {
  return (
    <BottomTabs.Navigator
      screenOptions={({ navigation }) => ({
        headerStyle: { backgroundColor: GlobalStyles.colors.primary500 },
        headerTintColor: "white",
        tabBarStyle: {
          backgroundColor: GlobalStyles.colors.primary500,
        },
        tabBarActiveTintColor: GlobalStyles.colors.accent500,
        tabBarInactiveTintColor: GlobalStyles.colors.text,
        headerRight: ({ tintColor }) => {
          return (
            <IconButton
              icon="add"
              size={24}
              color={tintColor}
              onPress={() => {
                navigation
                  .getParent<NativeStackNavigationProp<RootStackParamList>>()
                  ?.navigate("ManageExpenses");
              }}
            />
          );
        },
      })}
    >
      <BottomTabs.Screen
        name="RecentExpenses"
        component={RecentExpensesScreen}
        options={{
          title: "Recent Expenses",
          tabBarLabel: "Recent",
          tabBarIcon: ({ color, size }) => {
            return <Ionicons name="hourglass" size={size} color={color} />;
          },
        }}
      />
      <BottomTabs.Screen
        name="AllExpenses"
        component={AllExpensesScreen}
        options={{
          title: "All Expenses",
          tabBarLabel: "All Expenses",
          tabBarIcon: ({ color, size }) => {
            return <Ionicons name="receipt" size={size} color={color} />;
          },
        }}
      />
    </BottomTabs.Navigator>
  );
};

export type StackNavigation = NavigationProp<RootStackParamList>;

export default function App() {
  return (
    <>
      <StatusBar style="light" />
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="ExpensesOverview"
            component={ExpensesOverview}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="ManageExpenses"
            component={ManageExpensesScreen}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}
