import classes from '../../../components/Users/PagesNavigation/PagesNavigation.module.css';

export const getLastPageClassName = (currentPage, pagesCount) => {
    let lastPageClassName = classes.page
    if (currentPage === pagesCount) {
        lastPageClassName += ` ${classes.currentPage}`
    }
    if (pagesCount < 6) {
        lastPageClassName += ` ${classes.hidden}`
    }
    return lastPageClassName
}