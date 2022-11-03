import classes from '../../../components/Users/PagesNavigation/PagesNavigation.module.css';

export const getFirstPageClassName = (currentPage) => {
    let firstPageClassName = classes.page;
    if (currentPage === 1) {
        firstPageClassName += ` ${classes.currentPage}`
    }
    return firstPageClassName
}