import PropTypes from 'prop-types';
import FriendListItem from 'components/FriendListItem/FriendListItem';
import { FriendList } from './FriendList.styled';

export default function List(props) {
    const { friends } = props;

    return <FriendList>
                {friends.map(({id, avatar, name, isOnline}) => (
                    <FriendListItem
                        key={id}
                        avatar={avatar}
                        name={name}
                        isOnline={isOnline} />
                        ))}
            </FriendList>;
}

List.propTypes = {
    friends: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number.isRequired,
    })),
}