


function concatenateArrays<T> (...arrays: T[][]) : T[]{
    return  arrays.flat()
  }





function formatCoordinate (
    coordinate : readonly [number, number, string]
): string {
 const [latitude, longitude, locationName] = coordinate;
 return `Location:  ${locationName} (${latitude} , ${longitude})`
}






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





function multiplyValue(value: number, multiplier?: number): number {
    if (multiplier === undefined) {
        return value * 2;
    }

    return value * multiplier;
}
