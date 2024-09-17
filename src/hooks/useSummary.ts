import { useContext } from "react";
import { TransactionContext } from "../contexts/TransactionsContext";

export function useSummary() {
  const { transactions } = useContext(TransactionContext);

  const summary = transactions.reduce(
    (acc, transaction) => {
      acc.incomes += transaction.type === "income" ? transaction.price : 0;
      acc.outcomes += transaction.type === "outcome" ? transaction.price : 0;
      acc.total = acc.incomes + acc.outcomes;
      return acc;
    },
    {
      incomes: 0,
      outcomes: 0,
      total: 0,
    }
  );

  // const incomesValues = transactions
  //     .filter(transaction => transaction.type === "income")
  //     .reduce((a, b) => a + b.price, 0)

  // const outcomesValues = transactions
  //     .filter(transaction => transaction.type === "outcome")
  //     .reduce((a, b) => a + b.price, 0)

  // const total = incomesValues - outcomesValues;

  return summary;
}
