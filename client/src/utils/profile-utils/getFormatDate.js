import { MONTHS } from "../../data/months"


export const getDateFormat = (date) => {
    const periods = date.split(' ')

    const day = periods[0]
    const month = MONTHS[periods[1]]
    const year = periods[2]
    const hours = periods[3]
    let minutes = periods[4]
    if (minutes.length === 1) {
        minutes = `0${minutes}`
    }
    return `${day} ${month} ${year} в ${hours}:${minutes}`
}