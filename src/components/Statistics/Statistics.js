import React, { Component } from 'react';
import css from './Statistics.module.css'
import  Notification  from './Notification';

class Statistics extends Component {
    
    state = {
    total: 0,
    positisveFeedback: 0
    };
    
    render() {
        const { good, neutral, bad } = this.props;
        const total = good + neutral + bad;
        const positisveFeedback = Math.round(good / total * 100);
        return (
            <div>
                {total > 0 ? (
                    <ul className={css['feedback-list']}>
                        <li className={css['list-text']}>Good: {good}</li>
                        <li className={css['list-text']}>Neutral: {neutral}</li>
                        <li className={css['list-text']}>Bad: {bad}</li>
                        <li className={css['list-text']}>Total: {total}</li>
                        <li className={css['list-text']}>
                            Positive feedback: {positisveFeedback}%
                        </li>
                    </ul>
                ) : (
                    <Notification message="There is no feedback" />
                )}
            </div>
        );
    }
}


export default Statistics;


    // countTotalFeedback = () => {
    //     this.setState((prevState) => {
    //         return {
    //             total: prevState.good + prevState.neutral + prevState.bad,
    //         };
    //     }, this.countPositiveFeedbackPercentage);
    // };

    // countPositiveFeedbackPercentage = () => {
    //     this.setState((prevState) => {
    //         return {
    //             positiveFeedback: Math.round((prevState.good / prevState.total) * 100)
    //         };
    //     });
    // }