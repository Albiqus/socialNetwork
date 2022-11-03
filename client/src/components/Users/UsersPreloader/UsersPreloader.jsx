import { Preloader } from '../../Common/Preloader/Preloader';
import classes from './UsersPreloader.module.css';

export const UsersPreloader = () => {
    return (
        <div className={classes.usersBox}>
            <div className={classes.preloaderBox}>
                <Preloader />
            </div>
        </div>
    )
}