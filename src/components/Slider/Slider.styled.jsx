import styled from "styled-components";

export const SliderContainer = styled.div`
    position: relative;
    display: flex;
    justify-content: space-between;

    width: 300px;
    height: 450px;

    overflow: hidden;
`;

export const TasksWrapper = styled.div`
    position: absolute;
    top: 0;
    left: 0;

    transform: translateX(${props => props.position}px);

    display: grid;
    grid-template-columns: repeat(4, 300px);

    justify-content: center;
    align-items: center;

    transition: transform 300ms ease;
`;

export const SwipeButton = styled.button`
    font-size: ${props => props.theme.fontSizes.xl}px;
    font-weight: ${props => props.theme.fontWeights.extraBold};
    z-index: 1;
`;