import PropTypes from 'prop-types';

export default function Section(props) {
    const { title, children } = props;
    
    return <div className="section">
        {title && <h2 className="section__title">{title}</h2>}
        {children}
    </div>
}

Section.propTypes = {
    title: PropTypes.string,
    children: PropTypes.node,
}