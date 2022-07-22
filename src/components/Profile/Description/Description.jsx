import classes from'./Description.module.css';
import { userData } from '../../MockData/MockData.js'
const Description = (props) => {
    return (
        <div className={classes.descriptionBlock}>
            <h1>{userData.name}</h1>
            <p>Дата рождения: <span>{userData.birthday}</span></p>
            <p>Город: <span>{userData.city}</span></p>
            <p>Семейное положение: <span className={classes.string}>{userData.maritalStatus}</span></p>
        </div>
    )
}

export { Description }