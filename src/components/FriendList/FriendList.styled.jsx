import styled from "styled-components";

export const FriendList = styled.ul`
    display: grid;
    grid-template-columns: 1fr;
    gap: ${props => props.theme.spacing[3]}px;

    margin: ${props => props.theme.spacing[0]} auto;
`;