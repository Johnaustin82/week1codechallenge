// function studentGrade that takes one parameter which is marks
function studentGrade(marks){
    // check if marks is 79
    if (marks>79)
    // if marks is greater than 79 return the string 'A'
    return 'A'

    // check if marks is greater than or equal to 60
    else if (marks >=60)
    // if marks is greater than 60 return the string 'B'
    return 'B'
    
    // check if marks is greater than or equal to 49
    else if (marks >=49)
    // if marks is greater than 49 return the string 'C'
    return 'C'

     // check if marks is greater than or equal to 40
    else if (marks >=40)
    // if marks is greater than 40 return the string 'D'
    return 'D'

    // check if marks is less than 40
    else (marks <40)
    // if marks is than 40 return the string 'E'
    return 'E'
}
// testing for output
console.log(studentGrade(0))  
console.log(studentGrade(41)) 
console.log(studentGrade(50))
console.log(studentGrade(60))  
console.log(studentGrade(80)) 