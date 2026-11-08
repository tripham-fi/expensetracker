import { createContext, ReactNode, useReducer } from "react";
import { expense } from "../constants/types";

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
    date: new Date("2026-11-01"),
  },
  {
    id: "e7",
    description: "Coffee",
    amount: 3.5,
    date: new Date("2026-11-02"),
  },
  {
    id: "e8",
    description: "Monthly bus pass",
    amount: 62.0,
    date: new Date("2026-11-02"),
  },
  {
    id: "e9",
    description: "Dinner with friends",
    amount: 38.75,
    date: new Date("2026-11-03"),
  },
  {
    id: "e10",
    description: "Phone case",
    amount: 12.99,
    date: new Date("2026-11-03"),
  },
];

type ExpenseData = {
  description: string;
  amount: number;
  date: Date;
};

type ExpensesContextType = {
  expenses: expense[];
  addExpense: (expenseData: ExpenseData) => void;
  deleteExpense: (id: string) => void;
  updateExpense: (id: string, expenseData: ExpenseData) => void;
};

export const ExpensesContext = createContext<ExpensesContextType | null>({
  expenses: [],
  addExpense: ({ amount, date, description }) => {},
  deleteExpense: (id) => {},
  updateExpense: (id, { amount, date, description }) => {},
});

type ProviderProps = {
  children: ReactNode;
};

type Action =
  | { type: "ADD"; payload: ExpenseData }
  | { type: "DELETE"; payload: string }
  | { type: "UPDATE"; payload: { id: string; data: ExpenseData } };

function expenseReducer(state: expense[], action: Action) {
  switch (action.type) {
    case "ADD":
      const id = new Date().toString() + Math.random().toString();
      return [{ ...action.payload, id: id }, ...state];
    case "UPDATE":
      const updateableExpenseIndex = state.findIndex(
        (e) => e.id === action.payload.id,
      );
      const updateableExpense = state[updateableExpenseIndex];
      const updatedItem = { ...updateableExpense, ...action.payload.data };
      const updatedExpenses = [...state];
      updatedExpenses[updateableExpenseIndex] = updatedItem;
      return updatedExpenses;
    case "DELETE":
      return [...state.filter((e) => e.id !== action.payload)];
    default:
      return state;
  }
}

function ExpensesContextProvider({ children }: ProviderProps) {
  const [expenses, dispatch] = useReducer(expenseReducer, DUMMY_EXPENSES);

  function addExpense(data: ExpenseData) {
    dispatch({ type: "ADD", payload: data });
  }

  function deleteExpense(id: string) {
    dispatch({ type: "DELETE", payload: id });
  }

  function updateExpense(id: string, data: ExpenseData) {
    dispatch({ type: "UPDATE", payload: { id: id, data: data } });
  }

  const value: ExpensesContextType = {
    expenses,
    addExpense,
    deleteExpense,
    updateExpense,
  };

  return (
    <ExpensesContext.Provider value={value}>
      {children}
    </ExpensesContext.Provider>
  );
}

export default ExpensesContextProvider;
