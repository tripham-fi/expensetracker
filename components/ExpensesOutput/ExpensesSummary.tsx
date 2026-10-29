import { Text, View } from "react-native";
import { expense } from "../../constants/types";

interface ExpensesSummaryProp {
  expenses: expense[];
  periodName: string;
};

function ExpensesSummary({ expenses, periodName }: ExpensesSummaryProp) {
  const expenseSum = expenses.reduce((sum, expense) => {
    return sum + expense.amount;
  }, 0);
  return (
    <View>
      <Text>{periodName}</Text>
      <Text>${expenseSum.toFixed(2)}</Text>
    </View>
  );
}

export default ExpensesSummary;
