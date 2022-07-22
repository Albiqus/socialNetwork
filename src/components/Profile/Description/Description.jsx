import classes from'./Description.module.css';


const Description = (props) => {
    return (
        <div className={classes.descriptionBlock}>
            <h1>Андрей Постулчан</h1>
            <p>Дата рождения: <span className={classes.string}>10 февраля</span></p>
            <p>Город: <span className={classes.string}>Курган</span></p>
            <p>Семейное положение: <span className={classes.string}>Женат</span></p>
        </div>
    )
}

export { Description }