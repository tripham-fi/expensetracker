export type RootStackParamList = {
  ManageExpenses: undefined;
  ExpensesOverview: undefined;
};

export type RootBottomTabsParamList = {
  AllExpenses: undefined;
  RecentExpenses: undefined;
};

export interface expense {
  id: string;
  description: string;
  amount: number;
  date: Date
};
