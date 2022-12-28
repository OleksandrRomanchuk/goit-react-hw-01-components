import FriendListItem from 'components/FriendListItem/FriendListItem';

export default function FriendsList(props) {
    const { friends } = props;

    return <ul className="friend-list">
        {friends.map(friend => (
            <FriendListItem
                key = {friend.id}
                avatar = {friend.avatar}
                name = {friend.name}
                isOnline = {friend.isOnline} />
        ))}
        </ul>;
}