import css from './Statistics.module.css';
import PropTypes from 'prop-types';
import { StatisticsItem } from './StatisticsItem';

export const Statistics = ({ title, stats}) => {
    return (
        <section className={css.statistics}>
            {title && (<h2 className={css.title}>{title}</h2>)}
            <ul className={css['stat-list']}>
                {stats.map(StatisticsItem)}
            </ul>
        </section>
    )
}

Statistics.prototypes = {
    title: PropTypes.string,
    stats: PropTypes.array,
}