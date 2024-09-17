export interface TransactionsProps {
  id: number;
  description: string;
  type: "outcome" | "income";
  category: string;
  price: number;
  createdAt: string;
}
