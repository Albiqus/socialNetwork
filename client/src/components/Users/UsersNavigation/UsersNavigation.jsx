import { getFirstGapClassName } from '../../../utils/users-utils/getUsersPageClassName/getFirstGapClassName';
import { getFirstPageClassName } from '../../../utils/users-utils/getUsersPageClassName/getFirstPageClassName';
import { getFirstPointsClassName } from '../../../utils/users-utils/getUsersPageClassName/getFirstPointsClassName';
import { getFourthGapClassName } from '../../../utils/users-utils/getUsersPageClassName/getFourthGapClassName';
import { getLastPageClassName } from '../../../utils/users-utils/getUsersPageClassName/getLastPageClassName';
import { getLastPointsClassName } from '../../../utils/users-utils/getUsersPageClassName/getLastPointsClassName';
import { getSecondGapClassName } from '../../../utils/users-utils/getUsersPageClassName/getSecondGapClassName';
import { getThirdGapClassName } from '../../../utils/users-utils/getUsersPageClassName/getThirdGapClassName';
import { getCurrentGaps } from '../../../utils/users-utils/getCurrentGaps';
import classes from './UsersNavigation.module.css';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { setGaps, setUsers } from '../../../store/users-reducer';
import { getAndSetTenUsers } from '../../../thunks/users-thunks/getAndSetTenUsers';

const UsersNavigation = ({ gaps, setGaps, getAndSetTenUsers, searchingStatus, setUsers, users, foundUsers }) => {

    const pagesCount = Number(localStorage.getItem('pagesCount'))
    let currentPage = Number(localStorage.getItem('currentUsersPage'))

    if (currentPage === 0) currentPage = 1

    let currentGaps;
    if (gaps) currentGaps = gaps
    else {
        currentGaps = getCurrentGaps(currentPage, pagesCount)
        setGaps(currentGaps)
    }

    const firstPageClassName = getFirstPageClassName(currentPage)
    const firstPointsClassName = getFirstPointsClassName(currentGaps[0], pagesCount)
    const firstGapClassName = getFirstGapClassName(currentPage, currentGaps[0], pagesCount)
    const secondGapClassName = getSecondGapClassName(currentPage, currentGaps[1], pagesCount)
    const thirdGapClassName = getThirdGapClassName(currentPage, currentGaps[2], pagesCount)
    const fourthGapClassName = getFourthGapClassName(currentPage, currentGaps[3], pagesCount)
    const lastPointsClassName = getLastPointsClassName(currentGaps[3], pagesCount)
    const lastPageClassName = getLastPageClassName(currentPage, pagesCount)

    const onPageClick = (e) => {

        const newCurrentPage = Number(e.target.outerText)
        localStorage.setItem('currentUsersPage', newCurrentPage)

        if (newCurrentPage === '1') setGaps([2, 3, 4, 5])
        if (newCurrentPage === String(pagesCount) && pagesCount > 6) setGaps([pagesCount - 4, pagesCount - 3, pagesCount - 2, pagesCount - 1])

        if (searchingStatus) {
            let newUsers = []
            for (let i = Number(`${newCurrentPage}0`) - 10; i <= Number(`${newCurrentPage}0`) - 1; i++) {
                if (!foundUsers[i]) break
                newUsers.push(foundUsers[i])
            }

            setUsers(newUsers)
            return
        }

        getAndSetTenUsers(newCurrentPage)

    }

    const onPreviousPageClick = () => {
        if (currentPage === 1) return

        const newCurrentPage = currentPage - 1
        localStorage.setItem('currentUsersPage', newCurrentPage)

        if (searchingStatus) {
            let newUsers = []
            for (let i = Number(`${currentPage - 1}0`) - 10; i <= Number(`${currentPage - 1}0`) - 1; i++) {
                if (!foundUsers[i]) break
                newUsers.push(foundUsers[i])
            }

            setUsers(newUsers)
            return
        } else getAndSetTenUsers(newCurrentPage)

        if (currentPage <= currentGaps[0] && currentGaps[0] !== 2) {
            let newGaps = currentGaps.map(gap => --gap)
            setGaps(newGaps)
        }
    }

    const onNextPageClick = () => {
        if (currentPage === pagesCount) return

        const newCurrentPage = currentPage + 1
        localStorage.setItem('currentUsersPage', newCurrentPage)

        if (searchingStatus) {
            let newUsers = []
            for (let i = Number(`${currentPage + 1}0`) - 10; i <= Number(`${currentPage + 1}0`) - 1; i++) {
                if (!foundUsers[i]) break
                newUsers.push(foundUsers[i])
            }

            setUsers(newUsers)
            return
        } else getAndSetTenUsers(newCurrentPage)

 
        if (currentPage >= currentGaps[3] && currentGaps[3] !== pagesCount - 1 && currentGaps[3] !== pagesCount) {
            let newGaps = currentGaps.map(gap => ++gap)
            setGaps(newGaps)
        }
    }

    return (
        <div className={classes.pagesNavBox}>
            <div onClick={onPreviousPageClick} className={classes.left}><p>{'<'}</p></div>
            <div className={classes.pagesBox}>
                <div onClick={onPageClick} className={firstPageClassName}><p>1</p></div>
                <div className={firstPointsClassName}><p>...</p></div>
                <div onClick={onPageClick} className={firstGapClassName}><p>{currentGaps[0]}</p></div>
                <div onClick={onPageClick} className={secondGapClassName}><p>{currentGaps[1]}</p></div>
                <div onClick={onPageClick} className={thirdGapClassName}><p>{currentGaps[2]}</p></div>
                <div onClick={onPageClick} className={fourthGapClassName}><p>{currentGaps[3]}</p></div>
                <div className={lastPointsClassName}><p>...</p></div>
                <div onClick={onPageClick} className={lastPageClassName}><p>{pagesCount}</p></div>
            </div>
            <div onClick={onNextPageClick} className={classes.right}><p>{'>'}</p></div>
        </div >
    )
}


const mapStateToProps = (state) => {
    return {
        gaps: state.usersPage.gaps,
        users: state.usersPage.users,
        searchingStatus: state.usersPage.searchingStatus,
        foundUsers: state.usersPage.foundUsers
    }
}

export default compose(connect(mapStateToProps, { setGaps, getAndSetTenUsers, setUsers }))(UsersNavigation)