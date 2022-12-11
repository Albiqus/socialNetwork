import { Preloader } from '../../Common/Preloader/Preloader';
import classes from './FriendsPreloader.module.css';

export const FriendsPreloader = () => {
    return (
        <div className={classes.friendsBox}>
            <div className={classes.preloader}>
                <Preloader />
            </div>
        </div>
    )
}