import * as Dialog from "@radix-ui/react-dialog"
import { CloseButton, Content, Overlay } from "./styles"
import { X } from "@phosphor-icons/react"


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

                    <button type="submit">Cadastrar</button>
                </form>

            </Content>
        </Dialog.Portal>
    )
}