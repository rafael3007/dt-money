import { TransactionContext } from "../contexts/TransactionsContext";
import { useContextSelector } from "use-context-selector";
import { useMemo } from "react";

export function useSummary() {
  const transactions = useContextSelector(
    TransactionContext,
    (context) => context.transactions
  );

  const summary = useMemo(() => {
    return transactions.reduce(
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
  }, [transactions]);

  return summary;
}
