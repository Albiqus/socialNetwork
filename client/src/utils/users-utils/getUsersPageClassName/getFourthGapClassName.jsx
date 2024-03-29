import classes from '../../../components/Users/UsersNavigation/UsersNavigation.module.css';

export const getFourthGapClassName = (currentPage, gap, pagesCount) => {

    let fourthGapClassName = classes.page;

    if (currentPage === gap) fourthGapClassName += ` ${classes.currentPage}`
    
    if (pagesCount < 5) fourthGapClassName += ` ${classes.hidden}`
    
    return fourthGapClassName
}