import { createContext, useEffect, useState } from "react";
import { TransactionsProps } from "../@types/Transactions";



interface TransactionContextType {
    transactions: TransactionsProps[],
    loading: boolean
}

interface TrasactionsProviderProps {
    children: React.ReactNode
}

export const TransactionContext = createContext<TransactionContextType>({} as TransactionContextType);

export function TransactionProvider({ children }: TrasactionsProviderProps) {
    const [transactions, setTransactions] = useState<Array<TransactionsProps>>([]);
    const [loading, setLoading] = useState<boolean>(true)
    


    async function loadTransaction() {
        const response = await fetch("http://localhost:3000/transactions")

        const data: Array<TransactionsProps> = await response.json()

        setTransactions(data)
        setLoading(false)
    }

    

    useEffect(() => {
        setLoading(true)
        loadTransaction()

    }, [])

    


    return (
        <TransactionContext.Provider value={{
            transactions: transactions,
            loading,
        }}>
            {children}
        </TransactionContext.Provider>
    )
}