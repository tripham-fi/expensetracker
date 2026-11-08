import { StyleSheet, View } from "react-native";
import ExpensesSummary from "./ExpensesSummary";
import ExpensesList from "./ExpensesList";
import { expense } from "../../constants/types";
import { GlobalStyles } from "../../constants/styles";

interface ExpensesOutputProp {
  expenses?: expense[];
  expernsesPeriod: string;
}

export default function ExpensesOutput({
  expenses = [],
  expernsesPeriod,
}: ExpensesOutputProp) {
  return (
    <View style={styles.container}>
      <ExpensesSummary expenses={expenses} periodName={expernsesPeriod} />
      <ExpensesList expenses={expenses} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 24,
    paddingTop: 24,
    paddingBottom: 0,
    backgroundColor: GlobalStyles.colors.primary700,
  },
});
