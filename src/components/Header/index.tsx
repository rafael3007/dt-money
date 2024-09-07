import { HeaderContainer, HeaderContent, NewTransactionButton } from "./styles";

export default function Header() {
    return (
        <HeaderContainer>
            <HeaderContent>
                <img src="/logo.svg" alt="" />

                <NewTransactionButton>Nova transação</NewTransactionButton>
            </HeaderContent>

        </HeaderContainer>
    )
}