export const getCurrentTime = () => {
    const currentTime = new Date();

    const year = currentTime.getFullYear();
    const month = currentTime.getMonth();
    const day = currentTime.getDate();
    const hours = currentTime.getHours()
    const minutes = currentTime.getMinutes();

    return `${day} ${month} ${year} ${hours} ${minutes}`
};