import classes from '../../../components/Users/Users.module.css';

export const getFirstGapClassName = (currentPage, gap, pagesCount) => {

    let firstGapClassName = classes.page;
    if (currentPage === gap) {
        firstGapClassName += ` ${classes.currentPage}`
    }
    if (pagesCount < 2) {
        firstGapClassName += ` ${classes.hidden}`
    }
    return firstGapClassName
}