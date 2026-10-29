import { FlatList, ListRenderItemInfo, Text } from "react-native";
import { expense } from "../../constants/types";

interface ExpensesListProp {
  expenses: expense[];
}

function renderExpenseItem(itemData: ListRenderItemInfo<expense>) {
  return <Text key={itemData.index}>{itemData.item.description}</Text>;
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
