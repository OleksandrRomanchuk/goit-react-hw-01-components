import PropTypes from 'prop-types';

export default function Statistics(props) {
    const { stats } = props;
    
    return <>
                {stats.map(stat => (
                    <li className="item" key={stat.id}>
                        <span className="label">{stat.label}</span>
                        <span className="percentage">{stat.percentage}%</span>
                    </li>
                ))}
            </>;
}

Statistics.propTypes = {
    stats: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string.isRequired,
        label: PropTypes.string.isRequired,
        percentage: PropTypes.number.isRequired,
    })),
}