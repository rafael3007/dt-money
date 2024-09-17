import { useEffect, useState } from "react";
import Header from "../../components/Header";
import Pagination from "../../components/Pagination";
import Summary from "../../components/Summary";
import SearchForm from "./components/SearchForm";
import { FooterTransition, PriceHighlight, TransactionsContainer, TransactionsTable } from "./styles";
import { TransactionsProps } from "../../@types/Transactions";
import { TransactionContext } from "../../contexts/TransactionsContext";
import { Spinner } from "@radix-ui/themes";
import { dateFormatter, priceFormatter } from "../../utils/formatValues";
import { useContextSelector } from "use-context-selector";



export default function Transactions() {
    
    const transactions = useContextSelector(TransactionContext, (context) => context.transactions);
    const loading = useContextSelector(TransactionContext, (context) => context.loading);

    const [pageIndex, setPageIndex] = useState<number>(0);

    const [transactionsVisibility, setTransactionsVisibility] = useState<Array<TransactionsProps>>([]);

    const INDEX_INIT = pageIndex * 5
    const INDEX_FINAL = INDEX_INIT + 5
    const pagesLength = Math.ceil(transactions.length / 5)


    function handleSetPageIndex(indexPage: number) {
        setPageIndex(indexPage)
    }

    useEffect(() => {
        const dataShow = transactions.slice(INDEX_INIT, INDEX_FINAL)
        setTransactionsVisibility(dataShow)
    }, [pageIndex])

    useEffect(() => {
        const dataShow = transactions.slice(INDEX_INIT, INDEX_FINAL)
        setTransactionsVisibility(dataShow)
    }, [loading])



    return (
        <div>
            <Header />
            <Summary />

            <TransactionsContainer>

                <SearchForm />

                {loading ? (<Spinner size="3" />) : (
                    <TransactionsTable>
                        <tbody>
                            {
                                transactionsVisibility.map((transaction: TransactionsProps) => {
                                    console.log(transaction)
                                    return (

                                        <tr key={transaction.id}>
                                            <td width="50%">{transaction.description}</td>
                                            <td ><PriceHighlight variant={transaction.type}>{priceFormatter.format(transaction.price)}</PriceHighlight></td>
                                            <td >{transaction.category}</td>
                                            <td >{dateFormatter.format(new Date(transaction.createdAt))}</td>
                                        </tr>

                                    )
                                })

                            }
                        </tbody>
                    </TransactionsTable>
                )}

            </TransactionsContainer>

            <FooterTransition>
                {transactions.length > 0 ? <Pagination activePage={pageIndex} click={handleSetPageIndex} pagesLength={pagesLength} /> : ''}
            </FooterTransition>
        </div>
    )
}