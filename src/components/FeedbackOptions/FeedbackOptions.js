import React from 'react';
import css from './FeedbackOptions.module.css'

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
    return (
        <div>
            {options.map((option, index) => {
            return <button key={index} type="button" className={css.btn} onClick={onLeaveFeedback}>
                {option}
            </button>
            }) 
            }
        </div> 
    )
}

export default FeedbackOptions
