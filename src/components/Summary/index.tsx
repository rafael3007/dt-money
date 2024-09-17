import { ArrowCircleUp, ArrowCircleDown, CurrencyDollar } from "@phosphor-icons/react";
import { SummaryCard, SummaryContainer } from "./styles";
import { getFormattedCurrency } from "../../utils/formatValues";
import { useSummary } from "../../hooks/useSummary";

export default function Summary() {

    const summary = useSummary()

    return (
        <SummaryContainer>
            <SummaryCard>
                <header>
                    <span>Entradas</span>
                    <ArrowCircleUp size={32} color="#00b37e" />
                </header>
                <strong>{getFormattedCurrency(summary.incomes)}</strong>

            </SummaryCard>
            <SummaryCard>
                <header>
                    <span>Saidas</span>
                    <ArrowCircleDown size={32} color="#f75a68" />
                </header>
                <strong>{getFormattedCurrency(summary.outcomes)}</strong>

            </SummaryCard>
            <SummaryCard variant="green">
                <header>
                    <span>Total</span>
                    <CurrencyDollar size={32} color="#FFF" />
                </header>
                <strong>{getFormattedCurrency(summary.total)}</strong>

            </SummaryCard>
        </SummaryContainer>
    )
}