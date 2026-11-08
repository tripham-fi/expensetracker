import { Text } from "react-native";
import ExpensesOutput from "../components/ExpensesOutput/ExpensesOutput";
import { ExpensesContext } from "../store/expenses-context";
import { useContext } from "react";
import { getDateMinusDay } from "../util/date";

export default function RecentExpensesScreen() {
  const expensesCtx = useContext(ExpensesContext);
  const recentExpenses = expensesCtx?.expenses.filter((e) => {
    const today = new Date();
    const date7DaysAgo = getDateMinusDay(today, 7);
    return e.date >= date7DaysAgo && e.date <= today;
  });

  return (
    <ExpensesOutput
      expenses={recentExpenses}
      expernsesPeriod="Last 7 Days"
      fallbackText="No expenses registered for the last 7 days"
    />
  );
}
