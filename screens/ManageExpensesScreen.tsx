import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { StyleSheet, Text, View } from "react-native";
import { expense, ExpenseData, RootStackParamList } from "../constants/types";
import { useContext, useLayoutEffect } from "react";
import IconButton from "../components/UI/IconButton";
import { GlobalStyles } from "../constants/styles";
import Button from "../components/UI/Button";
import { ExpensesContext } from "../store/expenses-context";
import ExpenseForm from "../components/ManageExpense/ExpenseForm";

type props = NativeStackScreenProps<RootStackParamList, "ManageExpenses">;

export default function ManageExpensesScreen({ route, navigation }: props) {
  const expenseCtx = useContext(ExpensesContext);
  const { expenseId } = route.params;
  const isEditing = !!expenseId;

  useLayoutEffect(() => {
    navigation.setOptions({
      title: isEditing ? "Editing Expense" : "Adding Expense",
    });
  }, [navigation, isEditing]);

  function deleteExpenseHandler() {
    if (expenseId) {
      expenseCtx?.deleteExpense(expenseId);
    }
    navigation.goBack();
  }

  function cancelHandler() {
    navigation.goBack();
  }

  function confirmHandler(data: ExpenseData) {
    if (isEditing) {
      expenseCtx?.updateExpense(expenseId, data);
    } else {
      expenseCtx?.addExpense(data);
    }
    navigation.goBack();
  }
  return (
    <View style={styles.container}>
      <ExpenseForm
        submitLabel={isEditing ? "Update" : "Add"}
        onCancel={cancelHandler}
        onConfirm={confirmHandler}
      />
      {isEditing && (
        <View style={styles.deleteContainer}>
          <IconButton
            icon="trash"
            color={GlobalStyles.colors.error500}
            size={36}
            onPress={deleteExpenseHandler}
          />
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: GlobalStyles.colors.primary800,
  },
  deleteContainer: {
    marginTop: 16,
    paddingTop: 8,
    borderTopWidth: 2,
    borderTopColor: GlobalStyles.colors.primary200,
    alignItems: "center",
  },
});
