

// Problem 3:
function formatCoordinate (
    coordinate : readonly [number, number, string]
): string {
 const [latitude, longitude, locationName] = coordinate;
 return `Location:  ${locationName} (${latitude} , ${longitude})`
}





// Problem 2:
function processInput(value: number | string | boolean): string | number | boolean {

    if( typeof  value === "string"){
        return value.trim().toLowerCase();
    }
    else if ( typeof value === "number") {
        return value * 10;
    }
 
    else{
        return value ? "Active" : "Inactive"
    }



}




// Problem 1:
function multiplyValue(value: number, multiplier?: number): number {
    if (multiplier === undefined) {
        return value * 2;
    }

    return value * multiplier;
}
