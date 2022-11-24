import classes from '../../../components/Users/UsersNavigation/UsersNavigation.module.css';

export const getSecondGapClassName = (currentPage, gap, pagesCount) => {
    let secondGapClassName = classes.page;

    if (currentPage === gap) secondGapClassName += ` ${classes.currentPage}`
    
    if (pagesCount < 3) secondGapClassName += ` ${classes.hidden}`
    
    return secondGapClassName
}