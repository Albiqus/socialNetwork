
export const REGISTRATION_ERRORS = {
    firstName: {
        empty: 'Обязательное поле',
        invalidSymbolsAmount: 'Имя должно содержать минимум 2 символа'
    },
    lastName: {
        empty: 'Обязательное поле',
        invalidSymbolsAmount: 'Фамилия должна содержать минимум 2 символа'
    },
    email: {
        empty: 'Обязательное поле',
        invalidFormat: 'Введён неверный формат почты',
    },
    password: {
        empty: 'Обязательное поле',
        differencePasswords: 'Пароли не совпадают',
        invalidSymbolsAmount: 'Пароль должен содержать минимум 6 и максимум 30 символов',
        lackOfNumbers: 'Пароль должен содержать минимум одну цифру',
        lackOfLetters: 'Пароль должен содержать минимум одну букву'
    },
    country: {
        invalidSymbolsAmount: 'Страна должна содержать минимум 2 символа'
    },
    city: {
        invalidSymbolsAmount: 'Город должен содержать минимум 2 символа'
    },
    phone: {
        invalidSymbolsAmount: 'Телефон должен содержать 12 символов'
    },
    gender: {
        empty: 'Обязательное поле',
    },
    maritalStatus: {
        empty: 'Обязательное поле',
    },
    secretKey: {
        invalidSymbolsAmount: 'Секретный код должен содержать минимум 4 символа',
    }
}

export const LOGIN_ERRORS = {
    login: {
        empty: 'Обязательное поле',
    },
    password: {
        empty: 'Обязательное поле',
    }
}