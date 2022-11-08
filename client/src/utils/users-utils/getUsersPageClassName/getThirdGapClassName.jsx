import classes from '../../../components/Users/UsersNavigation/UsersNavigation.module.css';

export const getThirdGapClassName = (currentPage, gap, pagesCount) => {
    let thirdGapClassName = classes.page;
    if (currentPage === gap) {
        thirdGapClassName += ` ${classes.currentPage}`
    }
    if (pagesCount < 4) {
        thirdGapClassName += ` ${classes.hidden}`
    }
    return thirdGapClassName
}