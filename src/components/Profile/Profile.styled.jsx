import styled from "styled-components";

export const ProfileCard = styled.div`
    display: grid;

    margin: ${props => props.theme.spacing[0]} auto;

    border: ${props => props.theme.borders.main};
    border-radius: ${props => props.theme.radii.main}px;
`;

export const ProfileDescription = styled.div`
    padding-top: ${props => props.theme.spacing[5]}px;
    padding-bottom: ${props => props.theme.spacing[5]}px;

    text-align: center;
`;

export const AvatarWrapper = styled.div`
    display: inline-block;

    width: 155px;
    height: 155px;
    padding-top: ${props => props.theme.spacing[3]}px;

    border-radius: ${props => props.theme.radii.circle}%;

    background-color: ${props => props.theme.colors.green};

    overflow: hidden;
    `;

export const ProfileAvatar = styled.img`
    width: 150px;
    height: 150px;
    
    margin: auto;
`;

export const ProfileName = styled.p`
    margin-top: ${props => props.theme.spacing[3]}px;

    font-size: ${props => props.theme.fontSizes.xl}px;
    font-weight: ${props => props.theme.fontWeights.extraBold};
`;

export const ProfileTag = styled.p`
    margin-top: ${props => props.theme.spacing[3]}px;

    font-size: ${props => props.theme.fontSizes.s}px;
`;

export const ProfileLocation = styled.p`
    margin-top: ${props => props.theme.spacing[5]}px;

    font-size: ${props => props.theme.fontSizes.m}px;
    font-weight: ${props => props.theme.fontWeights.extraBold};
`;

export const ProfileStats = styled.ul`
    display: grid;
    grid-template-columns: repeat(3, 1fr);

    border-top: ${props => props.theme.borders.main};
`;

export const StatsItem = styled.li`
    position: relative;

    display: grid;
    grid-template-columns: 1fr;

    padding: ${props => props.theme.spacing[4]}px;
    
    text-align: center;

    :not(:first-child)::before {
        content: '';
        position: absolute;
        bottom: 0;
        left: 0;

        width: 1px;
        height: 100%;

        background-color: ${props => props.theme.colors.black};
    }
`;

export const StatLabel = styled.span`
    font-size: ${props => props.theme.fontSizes.s}px;
`;

export const StatQuantity = styled.span`
    margin-top: ${props => props.theme.spacing[3]}px;

    font-size: ${props => props.theme.fontSizes.s}px;
`;