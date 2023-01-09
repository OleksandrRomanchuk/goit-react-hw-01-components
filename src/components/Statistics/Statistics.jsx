import PropTypes from 'prop-types';
import { getRandomHexColor } from 'utils/randomColorFunc';
import { Title , StatsList, StatItem} from './Statistics.styled';

export default function Statistics(props) {
    const {title,  stats } = props;
    
    return <section>
                {title && <Title>{title}</Title>}
                <StatsList>
                    {stats.map(stat => (
                        <StatItem
                            key={stat.id}
                            style={{backgroundColor: getRandomHexColor()}}>
                                <span>{stat.label}</span>
                                <span>{stat.percentage}%</span>
                        </StatItem>
                    ))}
                </StatsList>
            </section>;
}

Statistics.propTypes = {
    title: PropTypes.string,
    stats: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string.isRequired,
        label: PropTypes.string.isRequired,
        percentage: PropTypes.number.isRequired,
    })),
}
