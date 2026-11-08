"use strict";
// Problem 3:
function formatCoordinate(coordinate) {
    const [latitude, longitude, locationName] = coordinate;
    return `Location:  ${locationName} (${latitude} , ${longitude})`;
}
// Problem 2:
function processInput(value) {
    if (typeof value === "string") {
        return value.trim().toLowerCase();
    }
    else if (typeof value === "number") {
        return value * 10;
    }
    else {
        return value ? "Active" : "Inactive";
    }
}
// Problem 1:
function multiplyValue(value, multiplier) {
    if (multiplier === undefined) {
        return value * 2;
    }
    return value * multiplier;
}
