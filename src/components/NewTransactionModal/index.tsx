import * as Dialog from "@radix-ui/react-dialog";
import { CloseButton, Content, Overlay, TransactionTypeButton, TransactionType } from "./styles";
import { X, ArrowCircleUp, ArrowCircleDown } from "@phosphor-icons/react";
import * as z from "zod";
import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { TransactionContext } from "../../contexts/TransactionsContext";
import { useContextSelector } from "use-context-selector";


const NewTransactionFormSchema = z.object({
    description: z.string(),
    price: z.number(),
    category: z.string(),
    type: z.enum(["income", "outcome"])
});

type NewTransactionFormInputs = z.infer<typeof NewTransactionFormSchema>


export default function NewTransactionModal() {

    const createTransactions = useContextSelector(
        TransactionContext,
        (context) => context.createTransactions
    );

    const {
        control,
        register,
        handleSubmit,
        formState: {
            isSubmitting,
        },
        reset
    } = useForm<NewTransactionFormInputs>({
        resolver: zodResolver(NewTransactionFormSchema),
        defaultValues: {
            type: "income",
        }
    })

    async function handleCreateNewTransaction(data: NewTransactionFormInputs) {
        const { description, price, category, type } = data

        await createTransactions({
            description,
            price,
            category,
            type
        })

        reset()
    }

    return (
        <Dialog.Portal>
            <Overlay />
            <Content>
                <Dialog.Title>Nova Transação</Dialog.Title>
                <CloseButton><X size={24} /></CloseButton>
                <form
                    onSubmit={handleSubmit(handleCreateNewTransaction)}
                >
                    <input
                        type="text"
                        placeholder="Descrição"
                        required
                        id="description"
                        {...register("description")}
                    />
                    <input
                        type="number"
                        id="price"
                        placeholder="Preço"
                        required
                        {...register("price", { valueAsNumber: true })}
                    />
                    <input
                        type="text"
                        placeholder="Categoria"
                        required
                        id="category"
                        {...register("category")}
                    />


                    <Controller
                        control={control}
                        name="type"
                        render={({ field }) => {
                            return (
                                <TransactionType onValueChange={field.onChange} value={field.value}>
                                    <TransactionTypeButton variant="income" value="income">
                                        <ArrowCircleUp size={24} />
                                        Entrada
                                    </TransactionTypeButton>
                                    <TransactionTypeButton variant="outcome" value="outcome">
                                        <ArrowCircleDown size={24} />
                                        Saída
                                    </TransactionTypeButton>
                                </TransactionType>
                            )
                        }}
                    />

                    <button type="submit" disabled={isSubmitting}>Cadastrar</button>
                </form>

            </Content>
        </Dialog.Portal>
    )
}