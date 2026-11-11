import { StyleSheet, Text, View } from "react-native";
import Input from "./Input";
import { useState } from "react";
import Button from "../UI/Button";
import { ExpenseData } from "../../constants/types";

type Inputs = {
  amount: string;
  date: string;
  description: string;
};

type FormProp = {
  submitLabel: string;
  onCancel: () => void;
  onConfirm: (data: ExpenseData) => void;
};
type FormKey = keyof Inputs;

export default function ExpenseForm({
  submitLabel,
  onCancel,
  onConfirm,
}: FormProp) {
  const [inputValues, setInputValues] = useState<Inputs>({
    amount: "",
    date: "",
    description: "",
  });
  function inputChangeHandler(key: FormKey, value: string) {
    setInputValues((prev) => ({ ...prev, [key]: value }));
  }

  function submitHandler() {
    const expenseData: ExpenseData = {
      amount: +inputValues.amount,
      date: new Date(inputValues.date),
      description: inputValues.description,
    };

    onConfirm(expenseData);
  }
  return (
    <View style={styles.form}>
      <Text style={styles.title}>Your Expense</Text>
      <View style={styles.inputRow}>
        <Input
          propStyle={styles.rowInput}
          label="Amount"
          keyboardType="decimal-pad"
          onChangeText={(e) => inputChangeHandler("amount", e)}
          value={inputValues.amount}
        />
        <Input
          propStyle={styles.rowInput}
          label="Date"
          placeholder="YYYY-MM-DD"
          maxLength={10}
          onChangeText={(e) => inputChangeHandler("date", e)}
          value={inputValues.date}
        />
      </View>
      <Input
        label="Description"
        multiline={true}
        onChangeText={(e) => inputChangeHandler("description", e)}
        value={inputValues.description}
      />
      <View style={styles.buttons}>
        <Button mode="flat" onPress={onCancel} style={styles.button}>
          Cancel
        </Button>
        <Button onPress={submitHandler} style={styles.button}>
          {submitLabel}
        </Button>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  form: {
    marginTop: 40,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "white",
    marginVertical: 24,
    textAlign: "center",
  },
  inputRow: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  rowInput: {
    flex: 1,
  },
  buttons: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  button: {
    minWidth: 120,
    marginHorizontal: 8,
  },
});
