import PropTypes from 'prop-types';

export default function FriendListItem(props) {
    const { avatar , name, isOnline} = props;
    
    return <li className="item">
                {isOnline
                    ? <span className="status--online"></span>
                    : <span className="status--offline"></span>}
                <img className="avatar" src={avatar} alt="User avatar" width="48" />
                <p className="name">{name}</p>
            </li>
}

FriendListItem.propTypes = {
        avatar: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        isOnline: PropTypes.bool.isRequired,
}
