const SET_SOMETHING = 'SET_SOMETHING'

const startState = {
    profile: {
        id: 1,
        name: 'Альберт Рахманкулов',
        status: 'Йоу',
        dateOfBirthday: '10.08.1998',
        maritalStatus: 'Не женат',
        city: 'Сертолово',
        phone: '89992354738',
        email: 'albiqus@bk.ru',
        password: 'mypassword'
    }
}


export const profileReducer = (state = startState, action) => {
    switch (action.type) {
        case SET_SOMETHING: {
            return {
                ...state,
            }
        }
        default:
            return state;
    }
}

export const setSomething = (something) => ({
    type: SET_SOMETHING,
    something
})