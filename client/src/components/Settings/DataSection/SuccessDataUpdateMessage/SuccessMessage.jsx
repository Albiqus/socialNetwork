import classes from './SuccessMessage.module.css';

export const SuccessMessage = () => {
    return (
        <div className={classes.successMessageBox}>
            <p className={classes.successMessage}>Данные успешно обновлены</p>
        </div>
    )
}