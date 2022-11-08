import {
    MONTHS
} from "../../data/profile-data"

export const getDateFormat = (date) => {
    const periods = date.split(' ')

    const day = periods[0]
    const month = MONTHS[periods[1]]
    const year = periods[2]
    const hours = periods[3]
    const minutes = periods[4]

    return `${day} ${month} ${year} в ${hours}:${minutes}`
}