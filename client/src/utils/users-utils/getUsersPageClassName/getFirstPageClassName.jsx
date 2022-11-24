import classes from '../../../components/Users/UsersNavigation/UsersNavigation.module.css';

export const getFirstPageClassName = (currentPage) => {
    let firstPageClassName = classes.page;
    if (currentPage === 1) firstPageClassName += ` ${classes.currentPage}`
    
    return firstPageClassName
}