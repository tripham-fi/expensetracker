import { StyleSheet, View } from "react-native";
import ExpensesSummary from "./ExpensesSummary";
import ExpensesList from "./ExpensesList";
import { expense } from "../../constants/types";
import { GlobalStyles } from "../../constants/styles";

interface ExpensesOutputProp {
  expenses?: expense[];
  expernsesPeriod: string;
}

const DUMMY_EXPENSES: expense[] = [
  {
    id: "e1",
    description: "A pair of shoes",
    amount: 59.99,
    date: new Date("2021-12-19"),
  },
  {
    id: "e2",
    description: "A pair of trousers",
    amount: 89.29,
    date: new Date("2022-01-05"),
  },
  {
    id: "e3",
    description: "Some bananas",
    amount: 5.99,
    date: new Date("2021-12-01"),
  },
  {
    id: "e4",
    description: "A book",
    amount: 14.99,
    date: new Date("2022-02-19"),
  },
  {
    id: "e5",
    description: "Another book",
    amount: 18.59,
    date: new Date("2022-02-18"),
  },
  {
    id: "e6",
    description: "Groceries",
    amount: 42.35,
    date: new Date("2026-03-08"),
  },
  {
    id: "e7",
    description: "Coffee",
    amount: 3.5,
    date: new Date("2026-03-10"),
  },
  {
    id: "e8",
    description: "Monthly bus pass",
    amount: 62.0,
    date: new Date("2026-03-01"),
  },
  {
    id: "e9",
    description: "Dinner with friends",
    amount: 38.75,
    date: new Date("2026-03-09"),
  },
  {
    id: "e10",
    description: "Phone case",
    amount: 12.99,
    date: new Date("2026-03-11"),
  },
];

export default function ExpensesOutput({
  expenses = DUMMY_EXPENSES,
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
