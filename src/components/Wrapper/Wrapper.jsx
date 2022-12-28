import PropTypes from 'prop-types';

export default function Wrapper(props) {
    const { title, children } = props;

    return <div className="wrapper">
                {title && <h3 className="task__title">{ title}</h3>}
                {children}
            </div>;
}

Wrapper.propTypes = {
    children: PropTypes.node,
}