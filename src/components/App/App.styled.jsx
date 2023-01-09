import styled from "styled-components";

export const Container = styled.div`
    display: grid;
    justify-content: center;
    align-items: center;
    width: 100vw;
    height: 100vh;
    
    font-weight: ${props => props.theme.fontWeights.semiBold};
`;