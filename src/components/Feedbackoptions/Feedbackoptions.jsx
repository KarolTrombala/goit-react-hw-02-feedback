import PropTypes from 'prop-types';
import css from './Feedbackoptions.module.css';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => (
  <div className={css.buttons}>
    {options.map((name, index) => {
      return (
        <button
          type="button"
          onClick={onLeaveFeedback}
          name={name}
          key={index}
          className={css.btn}
        >
          {name.charAt(0).toUpperCase() + name.slice(1)}
        </button>
      );
    })}
  </div>
);

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};

export default FeedbackOptions;

