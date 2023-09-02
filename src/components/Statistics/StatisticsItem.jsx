import css from './Statistics.module.css';
import PropTypes from 'prop-types';
import { getRandomHexColor } from './getRandomHexColor';

export const StatisticsItem = ({ id, label, percentage }) => {
    return (
        <li className={css.item} key={id} style = {{ backgroundColor: getRandomHexColor() }}>
            <span className={css.label}>{label}</span>
            <span className={css.percentage}>{percentage}%</span>
        </li>
    )
}

StatisticsItem.prototypes = {
    id: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    percentage: PropTypes.number.isRequired,
}