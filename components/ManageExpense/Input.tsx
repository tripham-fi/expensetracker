import {
  StyleProp,
  StyleSheet,
  Text,
  TextInput,
  TextInputProps,
  View,
  ViewStyle,
} from "react-native";
import { GlobalStyles } from "../../constants/styles";

interface InputProp extends TextInputProps {
  label: string;
  propStyle?: StyleProp<ViewStyle>;
}

export default function Input({
  label,
  multiline,
  style,
  propStyle,
  ...textInputConfigs
}: InputProp) {
  return (
    <View style={[styles.inputContainer, propStyle]}>
      <Text style={styles.label}>{label}</Text>
      <TextInput
        {...textInputConfigs}
        multiline={multiline}
        style={[styles.input, multiline && styles.inputMultiline, style]}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  inputContainer: {
    marginHorizontal: 4,
    marginVertical: 8,
  },
  label: {
    fontSize: 12,
    color: GlobalStyles.colors.primary100,
    marginBottom: 4,
  },
  input: {
    backgroundColor: GlobalStyles.colors.primary100,
    color: GlobalStyles.colors.primary700,
    padding: 6,
    borderRadius: 6,
    fontSize: 18,
  },
  inputMultiline: {
    minHeight: 100,
    textAlignVertical: "top",
  },
});
