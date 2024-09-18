import { useEffect, useState, useCallback } from "react";
import { TransactionsProps } from "../@types/Transactions";
import { api } from "../lib/axios";
import { createContext } from "use-context-selector";



interface TransactionContextType {
    transactions: TransactionsProps[],
    loading: boolean,
    fetchTransactions: (query?: string) => Promise<void>,
    createTransactions: (data: CreateTransactionsInput) => Promise<void>
}

interface TrasactionsProviderProps {
    children: React.ReactNode
}

interface CreateTransactionsInput {
    description: string,
    price: number,
    category: string,
    type: "outcome" | "income"
}

export const TransactionContext = createContext<TransactionContextType>({} as TransactionContextType);

export function TransactionProvider({ children }: TrasactionsProviderProps) {
    const [transactions, setTransactions] = useState<Array<TransactionsProps>>([]);
    const [loading, setLoading] = useState<boolean>(true)

    const createTransactions = useCallback(async ({ description, price, category, type }: CreateTransactionsInput) => {

        const response = await api.post("transactions", {
            description,
            price,
            category,
            type,
            createdAt: new Date().toISOString()
        });

        setTransactions(state => [response.data, ...state])
    },
        [],
    )

    const fetchTransactions = useCallback(async (query?: string) => {

        setLoading(true)

        const response = await api.get(`transactions`, {
            params: {
                description: query,
                _order: "desc",
                _sort: "created_at",
            }
        })

        setTransactions(response.data)
        setLoading(false)
    },
        []
    )

    useEffect(() => {
        setLoading(true)
        fetchTransactions()

    }, [fetchTransactions])


    return (
        <TransactionContext.Provider value={{
            transactions,
            loading,
            fetchTransactions,
            createTransactions
        }}>
            {children}
        </TransactionContext.Provider>
    )
}