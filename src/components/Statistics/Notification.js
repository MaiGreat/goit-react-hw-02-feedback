import css from './Statistics.module.css'

const Notification = ({ message }) => {
    return (
        <p className={css.text}>{message}</p>
    )
}

export default Notification