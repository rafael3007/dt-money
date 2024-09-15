import { useState } from "react";
import { PageButton, PageButtonContainer } from "./styles";

interface PaginationProps {
    pagesLength: number;
}


export default function Pagination({ pagesLength }: PaginationProps) {
    const pageNumbers = Array.from({ length: pagesLength }, (_, index) => index);
    const [activePage, setAcitvePage] = useState(0);

    function handleSetActivePage(index: number) {
        setAcitvePage(index)
    }

    return (
        <PageButtonContainer>

            {
                pageNumbers.map(i => <PageButton key={"button-" + i.toString()} onClick={() => handleSetActivePage(i)} active={i === activePage}>{i + 1}</PageButton>)
            }
        </PageButtonContainer>
    )
}
