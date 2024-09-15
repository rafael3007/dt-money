import * as Dialog from "@radix-ui/react-dialog";
import { CloseButton, Content, Overlay, TransactionTypeButton, TransactionType } from "./styles"
import { X, ArrowCircleUp, ArrowCircleDown } from "@phosphor-icons/react"


export default function NewTransactionModal() {
    return (
        <Dialog.Portal>
            <Overlay />
            <Content>
                <Dialog.Title>Nova Transação</Dialog.Title>
                <CloseButton><X size={24} /></CloseButton>
                <form>
                    <input type="text" name="description" placeholder="Descrição" required id="description" />
                    <input type="number" name="price" id="price" placeholder="Preço" required />
                    <input type="text" name="category" placeholder="Categoria" required id="category" />


                    <TransactionType>
                        <TransactionTypeButton variant="income" value="income">
                            <ArrowCircleUp size={24} />
                            Entrada
                        </TransactionTypeButton>
                        <TransactionTypeButton variant="outcome" value="outcome">
                            <ArrowCircleDown size={24} />
                            Saída
                        </TransactionTypeButton>
                    </TransactionType>

                    <button type="submit">Cadastrar</button>
                </form>

            </Content>
        </Dialog.Portal>
    )
}