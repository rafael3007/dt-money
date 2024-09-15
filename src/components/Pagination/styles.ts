import styled from "styled-components";

export const PageButtonContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  width: 100%;
`;

interface PageButtonProps {
  active?: boolean;
}

export const PageButton = styled.button<PageButtonProps>`
  border-radius: 6px;
  cursor: ${(props) => (!props.active ? "pointer" : "not-allowed")};
  color: ${(props) =>
    props.active ? props.theme.white : props.theme["green-500"]};
  background: ${(props) =>
    props.active ? props.theme["green-300"] : "transparent"};
  border: ${(props) => props.theme["green-500"]};
  padding: 1.25rem;
  text-align: center;
  display: flex;

`;
