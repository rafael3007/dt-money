import { MagnifyingGlass } from "@phosphor-icons/react";
import { SearchFormContainer } from "./styles";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { TransactionContext } from "../../../../contexts/TransactionsContext";
import { useContextSelector } from "use-context-selector";

const SearchFormSchema = z.object({
    query: z.string(),
});

type SearchFormInputs = z.infer<typeof SearchFormSchema>

export default function SearchForm() {

    const fetchTransactions = useContextSelector(TransactionContext, (context) => context.fetchTransactions)

    const {
        register,
        handleSubmit,
        formState: {
            isSubmitting,
        }
    } = useForm<SearchFormInputs>({
        resolver: zodResolver(SearchFormSchema),
    });

    async function handleSearchTransactions(data: SearchFormInputs) {
        await fetchTransactions(data.query)
    }

    return (
        <SearchFormContainer onSubmit={handleSubmit(handleSearchTransactions)}>

            <input
                type="text"
                placeholder="Busque pro transações"
                {...register("query")}
            />

            <button
                type="submit"
                disabled={isSubmitting}
            >
                <MagnifyingGlass size={20} />
                Buscar
            </button>
        </SearchFormContainer>
    )
};
