import styled from "styled-components";

export const SliderContainer = styled.div`
    position: relative;
    display: flex;
    justify-content: space-between;
`;

export const SwipeButton = styled.button`
    display: inline-block;
    margin: auto;
    padding: ${props => props.theme.spacing[4]}px;

    font-size: ${props => props.theme.fontSizes.xl}px;
    
    z-index: 1;
    opacity: 0.3;

    transition: opacity 300ms ease;

    :hover, :focus {
        opacity: 1;
    }
`;

export const Window = styled.div`
    position: relative;

    width: 300px;
    height: 450px;

    overflow: hidden;
`;

export const TasksWrapper = styled.div`
    position: absolute;
    top: 50%;
    left: 0;

    transform: translateX(${props => props.position}px) translateY(-50%);

    display: grid;
    grid-template-columns: repeat(4, 300px);

    justify-content: center;
    align-items: center;

    transition: transform 300ms ease;
`;

