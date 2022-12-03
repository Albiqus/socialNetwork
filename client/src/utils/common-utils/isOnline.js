import {
    getCurrentTime
} from "./getCurrentTime"

export const isOnline = (lastActivityTime) => {
    if (!lastActivityTime) return
    const currentTime = getCurrentTime()

    const [currentDay, currentMonth, currentYear, currentHour, currentMinutes] = currentTime.split(' ').map(period => Number(period))
    const [activityDay, activityMonth, activityYear, activityHour, activityMinutes] = lastActivityTime.split(' ').map(period => Number(period))

    if (currentYear === activityYear && currentMonth === activityMonth && currentDay === activityDay && currentHour === activityHour && currentMinutes - activityMinutes < 5) {
        return true
    }
}