// Користувач іде у відпустку на 56 днів. Визначити дату на момент його повернення.

function getVacationEndDate(days) {
   let currentDate = new Date()
   currentDate.setDate(currentDate.getDate() + days)
   return currentDate
}

const vacationEndDate = getVacationEndDate(56)

document.querySelector('.block__container').append(`Дата повернення з відпустки: ${vacationEndDate.toLocaleDateString()}`)
