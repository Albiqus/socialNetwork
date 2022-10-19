const MAX_FIRST_NAME_LENGTH = 15;
const MIN_FIRST_NAME_LENGTH = 2;
const MAX_LAST_NAME_LENGTH = 25;
const MIN_LAST_NAME_LENGTH = 2;
const MAX_EMAIL_LENGTH = 30;
const MAX_PASSWORD_LENGTH = 30;
const MIN_PASSWORD_LENGTH = 6;
const MAX_COUNTRY_LENGTH = 20;
const MIN_COUNTRY_LENGTH = 2;
const MAX_CITY_LENGTH = 30;
const MIN_CITY_LENGTH = 2;
const PHONE_LENGTH = 12;
const MAX_SECRET_KEY_LENGTH = 20;
const MIN_SECRET_KEY_LENGTH = 4;


const REGISTRATION_ERRORS = {
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

export {
    MAX_FIRST_NAME_LENGTH,
    MIN_FIRST_NAME_LENGTH,
    MAX_LAST_NAME_LENGTH,
    MIN_LAST_NAME_LENGTH,
    PHONE_LENGTH,
    MAX_EMAIL_LENGTH,
    REGISTRATION_ERRORS,
    MAX_PASSWORD_LENGTH,
    MIN_PASSWORD_LENGTH,
    MAX_COUNTRY_LENGTH,
    MIN_COUNTRY_LENGTH,
    MAX_CITY_LENGTH,
    MIN_CITY_LENGTH,
    MAX_SECRET_KEY_LENGTH,
    MIN_SECRET_KEY_LENGTH
}