import { NavLink } from 'react-router-dom';
import classes from './DialogItem.module.css';

const DialogItem = (props) => {
    return (
        <div>
            <NavLink className={classes.dialog} to={'/dialogs/' + props.id}>
            <img src={props.src} alt='фото пользователя'></img>
            <p>{props.name}</p>
            </NavLink>
        </div>
    )
}

export {DialogItem}