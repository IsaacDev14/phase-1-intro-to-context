// Your code here

// let testEmployee = ["Gray", "Worm", "Security"]

function createEmployeeRecord(testEmployee) {
    return {
        firstName: testEmployee[0],
        familyName: testEmployee[1],
        title: testEmployee[2],
        payPerHour: 0,
        timeInEvents: [],
        timeOutEvents: []
    }
}

// console.log(createEmployeeRecord(testEmployee))

function createEmployeeRecord(employeeArray) {
    return {
      firstName: employeeArray[0],
      familyName: employeeArray[1],
      title: employeeArray[2],
      payPerHour: employeeArray[3],  // <-- Ensure this is correctly assigned
      timeInEvents: [],
      timeOutEvents: []
    };
  }

function createEmployeeRecords(employeeArrays) {
    return employeeArrays.map(employeeArray => createEmployeeRecord(employeeArray));
}

// console.log(createEmployeeRecords([["Gray", "Worm", "Security", 1], ["Blue", "Worm", "Security", 1]]))

function createTimeInEvent(employeeRecord, dateStamp) {
    const [date, hour] = dateStamp.split(" ");
    employeeRecord.timeInEvents.push({
        type: "TimeIn",
        hour: parseInt(hour, 10),
        date
    });
    return employeeRecord;
}

// console.log(createTimeInEvent(createEmployeeRecord(testEmployee), "2014-02-28 1400"))

function createTimeOutEvent(employeeRecord, dateStamp) {   
    const [date, hour] = dateStamp.split(" ");
    employeeRecord.timeOutEvents.push({
        type: "TimeOut",
        hour: parseInt(hour, 10),
        date
    });
    return employeeRecord;
}

// console.log(createTimeOutEvent(createEmployeeRecord(testEmployee), "2014-02-28 1400"))

function hoursWorkedOnDate(employeeRecord, date) {
    const timeIn = employeeRecord.timeInEvents.find(event => event.date === date);
    const timeOut = employeeRecord.timeOutEvents.find(event => event.date === date);
    return (timeOut.hour - timeIn.hour) / 100;
}

// console.log(hoursWorkedOnDate(createEmployeeRecord(testEmployee), "2014-02-28"))

function wagesEarnedOnDate(employeeRecord, date) {
    return hoursWorkedOnDate(employeeRecord, date) * employeeRecord.payPerHour;
}

// console.log(wagesEarnedOnDate(createEmployeeRecord(testEmployee), "2014-02-28"))

function allWagesFor(employeeRecord) {
    return employeeRecord.timeInEvents.reduce((totalWages, timeInEvent) => totalWages + wagesEarnedOnDate(employeeRecord, timeInEvent.date), 0);
}

// console.log(allWagesFor(createEmployeeRecord(testEmployee)))

function findEmployeeByFirstName(srcArray, firstName) {     
    return srcArray.find(employeeRecord => employeeRecord.firstName === firstName);
}

// console.log(findEmployeeByFirstName([createEmployeeRecord(testEmployee)], "Gray"))

function calculatePayroll(employeeRecords) {
    return employeeRecords.reduce((totalPayroll, employeeRecord) => totalPayroll + allWagesFor(employeeRecord), 0);
}




  
