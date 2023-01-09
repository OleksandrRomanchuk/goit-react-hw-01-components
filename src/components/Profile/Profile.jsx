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

export default function Profile(props) {
    const {userName, tag, location, avatar, stats} = props;

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
                                <StatQuantity>{stats.followers}</StatQuantity>
                        </StatsItem>
                        <StatsItem>
                                <StatLabel>Views</StatLabel>
                                <StatQuantity>{stats.views}</StatQuantity>
                        </StatsItem>
                        <StatsItem>
                                <StatLabel>Likes</StatLabel>
                                <StatQuantity>{stats.likes}</StatQuantity>
                        </StatsItem>
                    </ProfileStats>
                </ProfileCard>;
}

Profile.propTypes = {
    userName: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    stats: PropTypes.shape({
        followers: PropTypes.number.isRequired,
        views: PropTypes.number.isRequired,
        likes: PropTypes.number.isRequired
    })
}
