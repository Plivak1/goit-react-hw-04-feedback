import { useState } from 'react';
import { Section } from './Section/Section';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptins';
import { Statistics } from './Statistics/Statistics';
import PropTypes from 'prop-types';

export function Widget() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const handleIncrement = e => {
    if (e.target.nodeName !== 'BUTTON') {
      return;
    }

    const { action } = e.target.dataset;

    switch (action) {
      case 'good':
        setGood(state => state + 1);
        return;
      case 'bad':
        setBad(state => state + 1);
        return;
      case 'neutral':
        setNeutral(state => state + 1);
        return;
      default:
        return;
    }
  };

  const countTotalFeedback = () => {
    return good + neutral + bad;
  };

  const countPositiveFeedbackPercentage = () => {
    return Math.round((100 / countTotalFeedback()) * good);
  };

  return (
    <Section title="Please leave feedback">
      <FeedbackOptions onClick={handleIncrement} />
      <Statistics
        good={good}
        neutral={neutral}
        bad={bad}
        total={countTotalFeedback()}
        positivePercentage={countPositiveFeedbackPercentage()}
      />
    </Section>
  );
}

Section.propTypes = {
  title: PropTypes.string.isRequired,
};

FeedbackOptions.propTypes = {
  onClick: PropTypes.func.isRequired,
};

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};
