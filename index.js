/* Your Code Here */

/*
 We're giving you this function. Take a look at it, you might see some usage
 that's new and different. That's because we're avoiding a well-known, but
 sneaky bug that we'll cover in the next few lessons!

 As a result, the lessons for this function will pass *and* it will be available
 for you to use if you need it!
 */

let allWagesFor = function () {
    let eligibleDates = this.timeInEvents.map(function (e) {
        return e.date
    })

    let payable = eligibleDates.reduce(function (memo, d) {
        return memo + wagesEarnedOnDate.call(this, d)
    }.bind(this), 0) // <== Hm, why did we need to add bind() there? We'll discuss soon!

    return payable
}

let createEmployeeRecord = function(array) {
    const employee = {
        firstName: `${array[0]}`,
        familyName: `${array[1]}`,
        title: `${array[2]}`,
        payPerHour: array[3],
        timeInEvents: [],
        timeOutEvents: []
    }
    return employee
}

let createEmployeeRecords = function(array) {
    return array.map(createEmployeeRecord)
}

let createTimeInEvent = function(dateStamp) {
    const [date, hour] = dateStamp.split(' ')
    this.timeInEvents.push({
        type: 'TimeIn',
        date: date,
        hour: parseInt(hour, 10)
    })
    return this
}

let createTimeOutEvent = function(dateStamp) {
    const [date, hour] = dateStamp.split(' ')
    this.timeOutEvents.push({
        type: 'TimeOut',
        date: date,
        hour: parseInt(hour, 10)
    })
    return this
}

let hoursWorkedOnDate = function(date) {
    const timeIn = this.timeInEvents.find(event => event.date === date)
    const timeOut = this.timeOutEvents.find(event => event.date === date)

    return (timeOut.hour - timeIn.hour) / 100
}

let wagesEarnedOnDate = function(date) {
    const wages = hoursWorkedOnDate.call(this, date) * this.payPerHour

    return wages
}

let calculatePayroll = function(srcArray) {
    const payroll = srcArray.map(employee => allWagesFor.call(employee))
    return payroll.reduce(function(total, wage) {
        return total = total + wage
    }, 0)
}

let findEmployeeByFirstName = function(srcArray, firstName) {
    const employee = srcArray.find(function(employeeRecord){
        return employeeRecord.firstName === firstName
    })
    return employee
}