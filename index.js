const addDays = require('days-fns/addDays')
const getDateAfter = days => {
  const newDate = addDays(new Date(2024, 3, 11), days)
  console.log(`${date.getDate()}-${date.getMonth() + 1}-${date.getFullYear()}`)
}
module.exports = getDateAfter
