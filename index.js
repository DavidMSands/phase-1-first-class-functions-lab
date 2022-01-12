const returnFirstTwoDrivers = function(drivers){
    return drivers.slice(0,2)
}

const returnLastTwoDrivers = function(drivers){
    return drivers.slice(-2)
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

const createFareMultiplier = function(x) {
    return function () {
        return x * x;
    }
}

const fareDoubler = fare => createFareMultiplier(fare)() / 5;

const fareTripler = fare => createFareMultiplier(fare)() / 4;

const selectDifferentDrivers = function(drivers, returnFirstTwoDrivers) {
    return returnFirstTwoDrivers(drivers);
}