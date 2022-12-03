import {
    MONTHS
} from "../../data/months"
import {
    getCurrentTime
} from "../common-utils/getCurrentTime"
import {
    declOfNum
} from "./declOfNum"

export const getActivityStatus = (lastActivityTime, gender) => {
    if (!lastActivityTime) return
    const currentTime = getCurrentTime()

    const [currentDay, currentMonth, currentYear, currentHour, currentMinutes] = currentTime.split(' ').map(period => Number(period))
    const [activityDay, activityMonth, activityYear, activityHour, activityMinutes] = lastActivityTime.split(' ').map(period => Number(period))

    const cameWord = gender === 'Женский' ? 'заходила' : 'заходил'
    const subtractionResult = currentMinutes - activityMinutes > 0 ? currentMinutes - activityMinutes : 60 - (activityMinutes - currentMinutes)


    if (currentYear > activityYear) {
        return `${cameWord} в ${activityYear} году ${activityDay} ${MONTHS[activityMonth]} в ${activityHour}:${activityMinutes}`
    }
    if (currentMonth > activityMonth) {
        return `${cameWord} ${activityDay} ${MONTHS[activityMonth]} в ${activityHour}:${activityMinutes}`
    }
    if (currentDay - activityDay > 1) {
        return `${cameWord} ${activityDay} ${MONTHS[activityMonth]} в ${activityHour}:${activityMinutes}`
    }
    if (currentDay - activityDay === 1) {
        return `${cameWord} вчера в ${activityHour}:${activityMinutes}`
    }
    if (currentDay === activityDay && currentHour - activityHour > 3) {
        return `${cameWord} сегодня в ${activityHour}:${activityMinutes}`
    }
    if (currentHour - activityHour === 3 || currentHour - activityHour === 2) {
        return `${cameWord} ${currentHour - activityHour} часа назад`
    }
    if (currentHour - activityHour === 1 && currentMinutes - activityMinutes >= 0) {
        return `${cameWord} час назад`
    }


    const minuteWord = declOfNum(subtractionResult, ['минуту', 'минуты', 'минут'])
    if (currentHour - activityHour === 0 && currentMinutes - activityMinutes >= 5) {
        return `${cameWord} ${currentMinutes - activityMinutes} ${minuteWord} назад`
    }
    if (currentHour - activityHour === 1 && currentMinutes - activityMinutes < 0 && 60 - Math.abs(currentMinutes - activityMinutes) >= 5) {
        return `${cameWord} ${60 - Math.abs(currentMinutes - activityMinutes)} ${minuteWord} назад`
    }
    return 'online'
}