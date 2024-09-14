import { MagnifyingGlass } from "@phosphor-icons/react";
import { SearchFormContainer } from "./styles";

export default function SearchForm() {



    return (
        <SearchFormContainer>

            <input type="text" placeholder="Busque pro transações" />

            <button type="submit">
                <MagnifyingGlass size={20} />
                Buscar
            </button>
        </SearchFormContainer>
    )
};
