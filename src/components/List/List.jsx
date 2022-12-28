import PropTypes from 'prop-types';

export default function List(props) {
    const { children } = props;

    return <ul className="list">
                {children}
            </ul>;
}

List.propTypes = {
    children: PropTypes.node,
}