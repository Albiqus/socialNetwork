import classes from '../../../components/Users/UsersNavigation/UsersNavigation.module.css';

export const getLastPointsClassName = (gap, pagesCount) => {
    let lastPointsClassName = classes.gap
    if (gap === pagesCount - 1 || pagesCount < 7) {
        lastPointsClassName += ` ${classes.hidden}`
    }
    return lastPointsClassName
}