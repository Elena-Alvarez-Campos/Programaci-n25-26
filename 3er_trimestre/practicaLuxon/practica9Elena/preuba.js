
const { DateTime, Interval } = require("luxon");
let dt=DateTime.local(2000,5,10,10,30)
let fechaE=DateTime.fromObject({ year: 2000, month: 5, day: 10, hour:20 ,minute: 30});
//fechaE.toISO()
dt.toISO()

console.log(dt.plus({minutes: 151}))

console.log(dt)
