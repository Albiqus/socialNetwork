import { useState } from 'react';
import { connect } from 'react-redux';
import { setIsNoUsers } from '../../../store/users-reducer';
import { getDefiniteUsers } from '../../../thunks/users-thunks/getDefiniteUsers';
import { formatSearchValue } from '../../../utils/users-utils/formatSearchValue';

import classes from './UsersForm.module.css';

const UsersForm = ({ getDefiniteUsers, setIsNoUsers }) => {

    const [searchValue, setSearchValue] = useState('')

    const onInputChange = (e) => {
        setSearchValue(e.target.value)
    }
    
    const onFormSubmit = (e) => {
        setIsNoUsers(false)
        e.preventDefault()
        localStorage.setItem('currentUsersPage', 1)
        
        const formattedSearchValue = formatSearchValue(searchValue)
        if (formattedSearchValue) getDefiniteUsers(formattedSearchValue)
    }

    return (
        <form onSubmit={onFormSubmit} className={classes.searchBox}>
            <input onChange={onInputChange} className={classes.search} value={searchValue} autoFocus placeholder='поиск..'></input>
            <button></button>
        </form>
    )
}

const mapStateToProps = (state) => {
    return {

    }
}

export default connect(mapStateToProps, { getDefiniteUsers, setIsNoUsers })(UsersForm)

