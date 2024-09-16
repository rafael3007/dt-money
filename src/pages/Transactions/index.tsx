import { useEffect, useState } from "react";
import Header from "../../components/Header";
import Pagination from "../../components/Pagination";
import Summary from "../../components/Summary";
import SearchForm from "./components/SearchForm";
import { FooterTransition, PriceHighlight, TransactionsContainer, TransactionsTable } from "./styles";

interface TransactionsProps {
    id: number,
    description: string,
    type: "outcome" | "income",
    category: string,
    price: number,
    createdAt: string
}


export default function Transactions() {
    const [transactions, setTransactions] = useState<Array<TransactionsProps>>([]);
    const [transactionsVisibility, setTransactionsVisibility] = useState<Array<TransactionsProps>>([]);

    const [pageIndex, setPageIndex] = useState<number>(0);
    const INDEX_INIT = pageIndex * 5
    const INDEX_FINAL = INDEX_INIT + 5


    async function loadTransaction() {
        const response = await fetch("http://localhost:3000/transactions")

        const data: Array<TransactionsProps> = await response.json()



        const dataShow = data.slice(INDEX_INIT, INDEX_FINAL)

        setTransactions(data)
        setTransactionsVisibility(dataShow)
    }

    function handleSetPageIndex(indexPage: number) {
        setPageIndex(indexPage)
    }

    useEffect(() => {

        loadTransaction()

    }, [])

    useEffect(() => {

        const dataShow = transactions.slice(INDEX_INIT, INDEX_FINAL)

        setTransactionsVisibility(dataShow)

    }, [pageIndex])

    return (
        <div>
            <Header />
            <Summary />

            <TransactionsContainer>

                <SearchForm />

                <TransactionsTable>
                    <tbody>
                        {
                            transactionsVisibility.map((transaction: TransactionsProps) => (
                                <tr key={transaction.id}>
                                    <td width="50%">{transaction.description}</td>
                                    <td ><PriceHighlight variant={transaction.type}>{transaction.price.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</PriceHighlight></td>
                                    <td >{transaction.type}</td>
                                    <td >{new Date(transaction.createdAt).toLocaleDateString('pt-BR')}</td>
                                </tr>
                            ))

                        }
                    </tbody>
                </TransactionsTable>

            </TransactionsContainer>

            <FooterTransition>
                {transactions.length > 0 ? <Pagination activePage={pageIndex} click={handleSetPageIndex} pagesLength={Math.floor(transactions.length / 5 + 1)} /> : ''}
            </FooterTransition>
        </div>
    )
}