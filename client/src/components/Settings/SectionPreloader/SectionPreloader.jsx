import { Preloader } from '../../Common/Preloader/Preloader';
import classes from './SectionPreloader.module.css';

export const SectionPreloader = () => {
    return (
        <div className={classes.sectionBox}>
            <div className={classes.preloader}>
                <Preloader />
            </div>
        </div>
    )
}