export const getAge = (dateOfBirth) => {

    let yearOfBirth = Number(dateOfBirth[0] + dateOfBirth[1] + dateOfBirth[2] + dateOfBirth[3])
    let monthOfBirth = Number(dateOfBirth[5] + dateOfBirth[6])
    let dayOfBirth = Number(dateOfBirth[8] + dateOfBirth[9])


    let currentYear = Number(new Date().getFullYear());
    let currentMonth = Number(String(new Date().getMonth() + 1).padStart(2, '0'));
    let currentDay = Number(String(new Date().getDate()).padStart(2, '0'));

    let age = currentYear - yearOfBirth
    if (currentMonth < monthOfBirth) age--
    if (currentMonth === monthOfBirth) currentDay < dayOfBirth && age--
    if (age < 0) return '0 лет'
    
    let string = ''
    string += age
    if (string[string.length - 1] < 5 && string[string.length - 1] !== '0' && string[string.length - 1] !== '1' && string !== '12' && string !== '13' && string !== '14') {
        string += ' года'
    }
    if (string[string.length - 1] > 4 || string[string.length - 1] === '0' || string === '11' || string === '12' || string === '13' || string === '14') {
        string += ' лет'
    }
    if (string[string.length - 1] === '1' && string !== '11') {
        string += ' год'
    }
    return string
}