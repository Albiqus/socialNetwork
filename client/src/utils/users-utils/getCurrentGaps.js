export const getCurrentGaps = (currentPage, pagesCount) => {
    if (currentPage < 6) {
        return [2, 3, 4, 5]
    }
    if (currentPage > pagesCount - 5) {
        return [pagesCount - 4 , pagesCount - 3, pagesCount - 2, pagesCount - 1]
    }
    return [currentPage, currentPage + 1, currentPage + 2, currentPage + 3]
}
