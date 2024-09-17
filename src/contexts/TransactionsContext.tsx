import { createContext, useEffect, useState } from "react";
import { TransactionsProps } from "../@types/Transactions";
import { api } from "../lib/axios";



interface TransactionContextType {
    transactions: TransactionsProps[],
    loading: boolean,
    fetchTransactions: (query?: string) => Promise<void>
}

interface TrasactionsProviderProps {
    children: React.ReactNode
}

export const TransactionContext = createContext<TransactionContextType>({} as TransactionContextType);

export function TransactionProvider({ children }: TrasactionsProviderProps) {
    const [transactions, setTransactions] = useState<Array<TransactionsProps>>([]);
    const [loading, setLoading] = useState<boolean>(true)



    async function fetchTransactions(query?: string) {
        
        setLoading(true)

        const response = await api.get(`transactions`, {
            params: {
                description: query
            }
        })

        setTransactions(response.data)
        setLoading(false)
    }



    useEffect(() => {
        setLoading(true)
        fetchTransactions()

    }, [])




    return (
        <TransactionContext.Provider value={{
            transactions,
            loading,
            fetchTransactions
        }}>
            {children}
        </TransactionContext.Provider>
    )
}