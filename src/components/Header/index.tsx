import NewTransactionModal from "../NewTransactionModal";
import { HeaderContainer, HeaderContent, NewTransactionButton } from "./styles";

import * as Dialog from '@radix-ui/react-dialog';

export default function Header() {
    return (
        <HeaderContainer>
            <HeaderContent>
                <img src="/logo.svg" alt="" />
                <Dialog.Root>
                    <Dialog.Trigger asChild>
                        <NewTransactionButton>Nova transação</NewTransactionButton>
                    </Dialog.Trigger>

                    <NewTransactionModal />

                </Dialog.Root>

            </HeaderContent>

        </HeaderContainer>
    )
}