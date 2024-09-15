import Header from "../../components/Header";
import Pagination from "../../components/Pagination";
import Summary from "../../components/Summary";
import SearchForm from "./components/SearchForm";
import { FooterTransition, PriceHighlight, TransactionsContainer, TransactionsTable } from "./styles";

export default function Transactions() {
    return (
        <div>
            <Header />
            <Summary />

            <TransactionsContainer>

                <SearchForm />

                <TransactionsTable>
                    <tbody>
                        <tr>
                            <td width="50%">Desenvolvimento de site</td>
                            <td ><PriceHighlight variant="income">R$ 12.000,00</PriceHighlight></td>
                            <td >Venda</td>
                            <td >13/19/2024</td>
                        </tr>
                        <tr>
                            <td width="50%">Desenvolvimento de site</td>
                            <td ><PriceHighlight variant="income">R$ 12.000,00</PriceHighlight> </td>
                            <td >Venda</td>
                            <td >13/19/2024</td>
                        </tr>
                        <tr>
                            <td width="50%">Desenvolvimento de site</td>
                            <td ><PriceHighlight variant="income">R$ 12.000,00</PriceHighlight></td>
                            <td >Venda</td>
                            <td >13/19/2024</td>
                        </tr>
                        <tr>
                            <td width="50%">Desenvolvimento de site</td>
                            <td ><PriceHighlight variant="income">R$ 12.000,00</PriceHighlight></td>
                            <td >Venda</td>
                            <td >13/19/2024</td>
                        </tr>
                        <tr>
                            <td width="50%">Desenvolvimento de site</td>
                            <td ><PriceHighlight variant="income">R$ 12.000,00</PriceHighlight></td>
                            <td >Venda</td>
                            <td >13/19/2024</td>
                        </tr>
                        <tr>
                            <td width="50%">Desenvolvimento de site</td>
                            <td ><PriceHighlight variant="outcome">- R$ 12.000,00</PriceHighlight></td>
                            <td >Venda</td>
                            <td >13/19/2024</td>
                        </tr>
                        <tr>
                            <td width="50%">Desenvolvimento de site</td>
                            <td ><PriceHighlight variant="outcome">- R$ 2.000,00</PriceHighlight></td>
                            <td >Venda</td>
                            <td >13/19/2024</td>
                        </tr>
                    </tbody>
                </TransactionsTable>

            </TransactionsContainer>

            <FooterTransition>
                <Pagination pagesLength={3} />
            </FooterTransition>
        </div>
    )
}