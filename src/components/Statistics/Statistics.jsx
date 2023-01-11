import PropTypes from 'prop-types';
import { getRandomHexColor } from 'utils/randomColorFunc';
import { Title , StatsList, StatItem} from './Statistics.styled';

export default function Statistics({title,  stats}) {
    return <section>
                {title && <Title>{title}</Title>}
                <StatsList>
                    {stats.map(({id, label, percentage}) => (
                        <StatItem
                            key={id}
                            style={{backgroundColor: getRandomHexColor()}}>
                                <span>{label}</span>
                                <span>{percentage}%</span>
                        </StatItem>
                    ))}
                </StatsList>
            </section>;
}

Statistics.propTypes = {
    title: PropTypes.string,
    id: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    percentage: PropTypes.number.isRequired,
}
