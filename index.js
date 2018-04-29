// Code your solution in this file.
function lowerCaseDrivers (drivers) {
  return drivers.map(function (driver) {
    return driver.toLowerCase();
  });
}

function nameToAttributes (drivers) {
  return drivers.map(function (driver) {
    let driverArr = driver.split(" ")
    return { firstName: driverArr[0], lastName: driverArr[1] };
  });
}

function attributesToPhrase (drivers) {
  return drivers.map(function (driver) {
    return `${driver.name} is from ${driver.hometown}`;
  });
}
