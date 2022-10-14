const MAX_FIRST_NAME_LENGTH = 15;
const MIN_FIRST_NAME_LENGTH = 2
const MAX_LAST_NAME_LENGTH = 25;
const MIN_LAST_NAME_LENGTH = 2
const MAX_EMAIL_LENGTH = 30;
const PHONE_LENGTH = 12;
const MAX_PASSWORD_LENGTH = 30;
const MIN_PASSWORD_LENGTH = 6;

const REGISTRATION_ERRORS = {
    firstName: {
        empty: 'Обязательное поле',
        invalidSymbolsAmount: 'Имя должно содержать минимум 2 символа'
    },
    lastName: {
        empty: 'Обязательное поле',
        invalidSymbolsAmount: 'Фамилия должна содержать минимум 2 символа'
    },
    phone: {
        invalidSymbolsAmount: 'Телефон должен содержать 12 символов'
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
    MIN_PASSWORD_LENGTH
}