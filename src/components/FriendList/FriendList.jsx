import PropTypes from 'prop-types';
import FriendListItem from 'components/FriendListItem/FriendListItem';

export default function List(props) {
    const { friends } = props;

    return <ul className="friend-list">
                {friends.map(({id, avatar, name, isOnline}) => (
                    <FriendListItem
                        key={id}
                        avatar={avatar}
                        name={name}
                        isOnline={isOnline} />
                        ))}
            </ul>;
}

List.propTypes = {
    friends: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number.isRequired,
    })),
}