import PropTypes from 'prop-types';
import {
    ProfileCard,
    ProfileDescription,
    AvatarWrapper,
    ProfileAvatar,
    ProfileName,
    ProfileTag,
    ProfileLocation,
    ProfileStats,
    StatsItem,
    StatLabel,
    StatQuantity
} from './Profile.styled'

export default function Profile({userName, tag, location, avatar, stats: {followers, views, likes}}) {
    return <ProfileCard>
                <ProfileDescription>
                    <AvatarWrapper>
                        <ProfileAvatar
                            src={avatar}
                            alt="User avatar"
                        />  
                    </AvatarWrapper>
                    <ProfileName>{userName}</ProfileName>
                    <ProfileTag>{tag}</ProfileTag>
                    <ProfileLocation>{location}</ProfileLocation>
                </ProfileDescription>
                <ProfileStats>
                    <StatsItem>
                            <StatLabel>Followers</StatLabel>
                            <StatQuantity>{followers}</StatQuantity>
                    </StatsItem>
                    <StatsItem>
                            <StatLabel>Views</StatLabel>
                            <StatQuantity>{views}</StatQuantity>
                    </StatsItem>
                    <StatsItem>
                            <StatLabel>Likes</StatLabel>
                            <StatQuantity>{likes}</StatQuantity>
                    </StatsItem>
                </ProfileStats>
            </ProfileCard>;
}

Profile.propTypes = {
    userName: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
}
