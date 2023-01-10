import styled from "styled-components";

export const Table = styled.table`
    font-size: ${props => props.theme.fontSizes.xs}px;
    text-align: center;

    border: ${props => props.theme.borders.main};
    border-collapse: collapse;
`;

export const THead = styled.thead`
    font-size: ${props => props.theme.fontSizes.m}px;

    border-bottom: ${props => props.theme.borders.main};

    tr th {
        width: calc(100% / 3);
        padding: ${props => props.theme.spacing[2]}px;
    }

    tr th:not(:first-child) {
        border-left: ${props => props.theme.borders.main};
    }
`;

export const TBody = styled.tbody`
    tr td {
        padding: ${props => props.theme.spacing[1]}px;

        border-bottom: ${props => props.theme.borders.main};
    }

    tr td:not(:first-child) {
        border-left: ${props => props.theme.borders.main};
    }

    tr:nth-child(odd) {
        background-color: #e1e1e1;
    }

    tr:nth-child(even) {
        background-color: white;
    }
`;

