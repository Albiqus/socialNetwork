import classes from'./Description.module.css';


const Description = (props) => {
    return (
        <div className={classes.descriptionBlock}>
            <h1>{props.userData.name}</h1>
            <p>Дата рождения: <span>{props.userData.birthday}</span></p>
            <p>Город: <span>{props.userData.city}</span></p>
            <p>Семейное положение: <span className={classes.string}>{props.userData.maritalStatus}</span></p>
        </div>
    )
}

export { Description }