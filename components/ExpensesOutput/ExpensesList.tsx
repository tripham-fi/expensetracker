import { FlatList, ListRenderItemInfo, Text } from "react-native";
import { expense } from "../../constants/types";
import ExpenseItem from "./ExpenseItem";

interface ExpensesListProp {
  expenses: expense[];
}

function renderExpenseItem(itemData: ListRenderItemInfo<expense>) {
  return <ExpenseItem {...itemData.item} />;
}

export default function ExpensesList({ expenses }: ExpensesListProp) {
  return (
    <FlatList
      data={expenses}
      renderItem={renderExpenseItem}
      keyExtractor={(item) => item.id}
    />
  );
}
