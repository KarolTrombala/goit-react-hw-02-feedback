import PropTypes from 'prop-types';
import css from './Statistics.module.css';

export const Statistics = ({ good, neutral, bad}) => {
    return (
        <div>
            <h2>Statistics</h2>
            <div className={css.statistics}>
            <span>Good: {good}</span>
            <span>Neutral: {neutral}</span>
            <span>Bad: {bad}</span>
            </div>
        </div>
    );
};

Statistics.propTypes = {
    good: PropTypes.number,
    neutral: PropTypes.number,
    bad: PropTypes.number,
  };
  
  export default Statistics;