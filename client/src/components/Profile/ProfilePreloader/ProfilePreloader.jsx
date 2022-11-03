import { Preloader } from '../../Common/Preloader/Preloader';
import classes from './ProfilePreloader.module.css';

export const ProfilePreloader = () => {
    return (
        <div className={classes.profileBox}>
            <div className={classes.preloader}>
                <Preloader />
            </div>
        </div>
    )
}