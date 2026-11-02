import { Platform, Pressable, StyleSheet, Text, View } from "react-native";
import { expense } from "../../constants/types";
import { GlobalStyles } from "../../constants/styles";
import { getFormattedDate } from "../../util/date";
import { useNavigation } from "@react-navigation/native";
import { StackNavigation } from "../../App";

interface ExpenseItemProp extends expense {}

export default function ExpenseItem({
  description,
  amount,
  date,
  id,
}: ExpenseItemProp) {
  const navigation = useNavigation<StackNavigation>();
  function pressHandler() {
    navigation.navigate("ManageExpenses");
  }
  return (
    <View style={styles.expenseItem}>
      <Pressable
        onPress={pressHandler}
        style={({ pressed }) => pressed && styles.pressed}
        android_ripple={{ color: "#ccc" }}
      >
        <View style={styles.innerContainer}>
          <View>
            <Text style={[styles.textBase, styles.description]}>
              {description}
            </Text>
            <Text style={styles.textBase}>{getFormattedDate(date)}</Text>
          </View>
          <View style={styles.amountContainer}>
            <Text style={styles.amount}>{amount.toFixed(2)}</Text>
          </View>
        </View>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  expenseItem: {
    marginVertical: 8,
    backgroundColor: GlobalStyles.colors.primary500,
    overflow: Platform.OS === "android" ? "hidden" : "visible",
    elevation: 4,
    shadowColor: GlobalStyles.colors.gray500,
    shadowRadius: 4,
    shadowOffset: { width: 1, height: 1 },
    shadowOpacity: 0.4,
  },
  innerContainer: {
    padding: 12,
    flexDirection: "row",
    justifyContent: "space-between",
    borderRadius: 6,
  },
  textBase: {
    color: GlobalStyles.colors.primary50,
  },
  description: {
    fontSize: 16,
    marginBottom: 4,
    fontWeight: "bold",
  },
  amountContainer: {
    paddingHorizontal: 12,
    paddingVertical: 4,
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 4,
    minWidth: 90,
  },
  amount: {
    color: GlobalStyles.colors.primary500,
    fontWeight: "bold",
  },
  pressed: {
    opacity: 0.5,
  },
});
