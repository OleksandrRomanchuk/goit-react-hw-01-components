import styled from "styled-components";

export const Item = styled.li`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: ${props => props.theme.spacing[3]}px;
    
    justify-content: center;
    align-items: center;

    padding-top: ${props => props.theme.spacing[3]}px;
    padding-bottom: ${props => props.theme.spacing[3]}px;
    padding-left: ${props => props.theme.spacing[2]}px;
    padding-right: ${props => props.theme.spacing[2]}px;

    text-align: center;

    border: ${props => props.theme.borders.main};
    border-radius: ${props => props.theme.radii.main}px;
`;

export const Status = styled.span`
    width: 16px;
    height: 16px;

    margin: ${props => props.theme.spacing[0]} auto;

    border: ${props => props.theme.borders.main};
    border-radius: ${props => props.theme.radii.circle}%;

    background-color: ${({ isOnline, theme }) => (isOnline
        ? theme.colors.green
        : theme.colors.red)};
`;