export interface RootStackParamList {
  ManageExpenses: undefined;
  ExpensesOverview: undefined;
};

export interface RootBottomTabsParamList {
  AllExpenses: undefined;
  RecentExpenses: undefined;
};

export interface expense {
  id: string;
  description: string;
  amount: number;
  date: Date
};
