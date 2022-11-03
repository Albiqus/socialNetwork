import classes from '../../../components/Users/PagesNavigation/PagesNavigation.module.css';

export const getFirstPointsClassName = (gap, pagesCount) => {
    let firstPointsClassName = classes.gap;
    if (gap === 2 || pagesCount < 7) {
        firstPointsClassName += ` ${classes.hidden}`
    }
    return firstPointsClassName
}