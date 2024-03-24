// function computeDemeritPoints that takes one parameter which is speed
function computeDemeritPoints(speed) {
    // A variable demeritPoint which will hold the demerit points
    let demeritPoints = 0;

    // check if speed is less than or equal to 70 
    if (speed <= 70) {
   //if speed is less than or equal to 70 return Ok 
        return "Ok";

    }  else {
    // Calculate demerit points by subtracting 70 km/s from the current speed, dividing the result by 5, and then rounding down to the nearest whole number
        demeritPoints = Math.floor((speed - 70) / 5);

    // check if demerit point is greater than 12
        if (demeritPoints > 12) {
    //if demerit point is greater 12 return License suspended 
            return "License suspended";
        } else {
    // If the demerit points are not greater than 12, demerit points which is 0 plus the points accumulated
            return "Points: " + demeritPoints;
        }
    }
}

// testing for output 
console.log(computeDemeritPoints(180))
console.log(computeDemeritPoints(120))
console.log(computeDemeritPoints(80))
console.log(computeDemeritPoints(75))
console.log(computeDemeritPoints(70))
console.log(computeDemeritPoints(60))


