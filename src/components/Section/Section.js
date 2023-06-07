import PropTypes from "prop-types";
import css from './Section.module.css'

const Section = ({ title, children }) => (
    <div>
        <h2 className={css.title}>{title}</h2>
        {children}
    </div>
);

Section.protoTypes = {
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    positisveFeedback: PropTypes.func.isRequired

}
export default Section