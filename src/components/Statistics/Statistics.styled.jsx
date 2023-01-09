import styled from "styled-components";

export const Title = styled.h2`
    font-size: ${props => props.theme.fontSizes.l}px;
    font-weight: ${props => props.theme.fontWeights.extraBold};

    text-align: center;
`;

export const StatsList = styled.ul`
    display: grid;
    gap: ${props => props.theme.spacing[2]}px;

    margin: ${props => props.theme.spacing[0]} auto;
    margin-top: ${props => props.theme.spacing[4]}px;
`;

export const StatItem = styled.li`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: ${props => props.theme.spacing[3]}px;

    min-width: 120px;

    margin: ${props => props.theme.spacing[0]} auto;
    padding-top: ${props => props.theme.spacing[2] * 3}px;
    padding-bottom: ${props => props.theme.spacing[2] * 3}px;
    padding-left: ${props => props.theme.spacing[4]}px;
    padding-right: ${props => props.theme.spacing[4]}px;

    border: ${props => props.theme.borders.main};
    border-radius: ${props => props.theme.radii.main}px;

    text-align: center;
`;
