import { useState } from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { withAuthRedirect } from '../../hocs/withAuthRedirect';
import { setCurrentPage } from '../../store/users-reducer';
import { getAndSetTenUsers } from '../../thunks/getAndSetTenUsers';
import { getAge } from '../../utils/common-utils/getAge';
import { getFirstGapClassName } from '../../utils/users-utils/getUsersPageClassName/getFirstGapClassName';
import { getFirstPageClassName } from '../../utils/users-utils/getUsersPageClassName/getFirstPageClassName';
import { getFirstPointsClassName } from '../../utils/users-utils/getUsersPageClassName/getFirstPointsClassName';
import { getFourthGapClassName } from '../../utils/users-utils/getUsersPageClassName/getFourthGapClassName';
import { getLastPageClassName } from '../../utils/users-utils/getUsersPageClassName/getLastPageClassName';
import { getLastPointsClassName } from '../../utils/users-utils/getUsersPageClassName/getLastPointsClassName';
import { getSecondGapClassName } from '../../utils/users-utils/getUsersPageClassName/getSecondGapClassName';
import { getThirdGapClassName } from '../../utils/users-utils/getUsersPageClassName/getThirdGapClassName';
import { getCurrentGaps } from '../../utils/users-utils/getCurrentGaps';
import { Preloader } from '../Common/Preloader/Preloader';
import classes from './Users.module.css';
import { NavLink } from 'react-router-dom';



export const Users = (props) => {

    const usersItems = props.users?.map((user) => {
        return (
            <NavLink to={`/profile/${user.id}`} className={classes.userItem} key={user.id} id={user.id}>
                <div className={classes.avatar}></div>
                <div className={classes.mainInfo}>
                    <p className={classes.fullname}><span>{user.first_name}</span> <span>{user.last_name}</span></p>
                    <p  className={classes.status}>{user.status}</p>
                </div>
                <div className={classes.moreInfo}>
                    <p className={classes.age}>
                        <span>{user.date_of_birth !== '' && getAge(user.date_of_birth)}</span></p>
                    <p className={classes.country}>{user.country}</p>
                </div>
            </NavLink>
        )
    })

    let currentPage = Number(localStorage.getItem('currentUsersPage'))
    if (currentPage === 0) {
        currentPage = 1
    }
    const pagesCount = Number(localStorage.getItem('pagesCount'))
    const currentGaps = getCurrentGaps(currentPage, pagesCount)
    let [gaps, setGaps] = useState(currentGaps)

    if (!props.pagesCount && !props.isNoUsers) {
        props.getAndSetTenUsers(currentPage)
        props.setCurrentPage(currentPage)
    }

    const firstPageClassName = getFirstPageClassName(props.currentPage)
    const firstPointsClassName = getFirstPointsClassName(gaps[0], props.pagesCount)
    const firstGapClassName = getFirstGapClassName(props.currentPage, gaps[0], props.pagesCount)
    const secondGapClassName = getSecondGapClassName(props.currentPage, gaps[1], props.pagesCount)
    const thirdGapClassName = getThirdGapClassName(props.currentPage, gaps[2], props.pagesCount)
    const fourthGapClassName = getFourthGapClassName(props.currentPage, gaps[3], props.pagesCount)
    const lastPointsClassName = getLastPointsClassName(gaps[3], props.pagesCount)
    const lastPageClassName = getLastPageClassName(props.currentPage, props.pagesCount)

    const onPageClick = (e) => {
        const newCurrentPage = Number(e.target.outerText)
        localStorage.setItem('currentUsersPage', newCurrentPage)
        props.setCurrentPage(newCurrentPage)
        props.getAndSetTenUsers(newCurrentPage)

        if (e.target.outerText === '1') {
            setGaps([2, 3, 4, 5])
        }
        if (e.target.outerText === String(props.pagesCount) && props.pagesCount > 6) {
            setGaps([props.pagesCount - 4, props.pagesCount - 3, props.pagesCount - 2, props.pagesCount - 1])
        }
    }

    const onPreviousPageClick = () => {
        if (props.currentPage !== 1) {
            const newCurrentPage = props.currentPage - 1
            localStorage.setItem('currentUsersPage', newCurrentPage)
            props.setCurrentPage(newCurrentPage)
            props.getAndSetTenUsers(newCurrentPage)
        }
        if (props.currentPage <= gaps[0] && gaps[0] !== 2) {
            let newGaps = gaps.map(gap => --gap)
            setGaps(newGaps)
        }
    }

    const onNextPageClick = () => {
        if (props.currentPage !== props.pagesCount) {
            const newCurrentPage = props.currentPage + 1
            localStorage.setItem('currentUsersPage', newCurrentPage)
            props.setCurrentPage(newCurrentPage)
            props.getAndSetTenUsers(newCurrentPage)
        }
        if (props.currentPage >= gaps[3] && gaps[3] !== props.pagesCount - 1 && gaps[3] !== props.pagesCount) {
            let newGaps = gaps.map(gap => ++gap)
            setGaps(newGaps)
        }
    }

    return (
        <div className={classes.users}>
            {props.usersPreloader &&
                <div className={classes.preloader}><Preloader />
                </div>}
            {!props.usersPreloader && !props.isNoUsers &&
                <div>
                    <div className={classes.upperNavigationBox}>
                        <form className={classes.searchBox}>
                            <input className={classes.search} autoFocus placeholder='поиск..'></input>
                            <button></button>
                        </form>
                        <div className={classes.pagesNavBox}>
                            <div onClick={onPreviousPageClick} className={classes.left}><p>{'<'}</p></div>
                            <div className={classes.pagesBox}>
                                <div onClick={onPageClick} className={firstPageClassName}><p>1</p></div>
                                <div className={firstPointsClassName}><p>...</p></div>
                                <div onClick={onPageClick} className={firstGapClassName}><p>{gaps[0]}</p></div>
                                <div onClick={onPageClick} className={secondGapClassName}><p>{gaps[1]}</p></div>
                                <div onClick={onPageClick} className={thirdGapClassName}><p>{gaps[2]}</p></div>
                                <div onClick={onPageClick} className={fourthGapClassName}><p>{gaps[3]}</p></div>
                                <div className={lastPointsClassName}><p>...</p></div>
                                <div onClick={onPageClick} className={lastPageClassName}><p>{props.pagesCount}</p></div>
                            </div>
                            <div onClick={onNextPageClick} className={classes.right}><p>{'>'}</p></div>
                        </div >
                    </div >
                    <div className={classes.userItemsBox}>
                        {usersItems}
                    </div>
                    <div className={classes.bottomNavigationBox}>
                        <div className={classes.pagesNavBox2}>
                            <div onClick={onPreviousPageClick} className={classes.left}><p>{'<'}</p></div>
                            <div className={classes.pagesBox2}>
                                <div onClick={onPageClick} className={firstPageClassName}><p>1</p></div>
                                <div className={firstPointsClassName}><p>...</p></div>
                                <div onClick={onPageClick} className={firstGapClassName}><p>{gaps[0]}</p></div>
                                <div onClick={onPageClick} className={secondGapClassName}><p>{gaps[1]}</p></div>
                                <div onClick={onPageClick} className={thirdGapClassName}><p>{gaps[2]}</p></div>
                                <div onClick={onPageClick} className={fourthGapClassName}><p>{gaps[3]}</p></div>
                                <div className={lastPointsClassName}><p>...</p></div>
                                <div onClick={onPageClick} className={lastPageClassName}><p>{props.pagesCount}</p></div>
                            </div>
                            <div onClick={onNextPageClick} className={classes.right}><p>{'>'}</p></div>
                        </div>
                    </div>
                </div >}
            {!props.usersPreloader && props.isNoUsers &&
                <p className={classes.noUsersText}>нет ни одного зарегистрированного пользователя</p>
            }
        </div >
    )
}

const mapStateToProps = (state) => {
    return {
        usersPreloader: state.usersPage.usersPreloader,
        pagesCount: state.usersPage.pagesCount,
        currentPage: state.usersPage.currentPage,
        users: state.usersPage.users,
        isNoUsers: state.usersPage.isNoUsers,
    }
}

export default compose(connect(mapStateToProps, { getAndSetTenUsers, setCurrentPage }), withAuthRedirect)(Users)