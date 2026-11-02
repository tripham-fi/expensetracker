import { BottomTabNavigationProp } from "@react-navigation/bottom-tabs";
import { CompositeNavigationProp } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

export type RootStackParamList = {
  ManageExpenses: undefined;
  ExpensesOverview: undefined;
  ExpensesDetail: {
    expenseId: string;
  };
};

export type RootBottomTabsParamList = {
  AllExpenses: undefined;
  RecentExpenses: undefined;
};

export interface expense {
  id: string;
  description: string;
  amount: number;
  date: Date;
}