import { PageButton, PageButtonContainer } from "./styles";

interface PaginationProps {
    pagesLength: number;
    click: (index: number) => void;
    activePage: number;
}


export default function Pagination({ pagesLength, click, activePage }: PaginationProps) {
    const pageNumbers = Array.from({ length: pagesLength }, (_, index) => index);

    return (
        <PageButtonContainer>
            {
                pageNumbers.map(i => <PageButton key={"button-" + i.toString()} onClick={() => click(i)} active={i === activePage}>{i + 1}</PageButton>)
            }
        </PageButtonContainer>
    )
}
