function computeNetSalary(basicSalary, benefits) {
    // KRA tax rates
    const taxRate = 0.03 
    // NHIF deductions rates
    const NHIF = 0.02;
     // NSSF deductions rates
    const NSSF = 0.06; 
// Compute gross salary
    const grossSalary = basicSalary + benefits;
       
// Compute tax, NHIF, and NSSF deductions    
    const tax = grossSalary * taxRate;
    const NHIFDeductions = basicSalary * NHIF;
    const NSSFDeductions = basicSalary * NSSF;

// compute netsalary
    const netSalary = grossSalary - tax - NHIFDeductions - NSSFDeductions;

// Return the calculated values  
    return {
        grossSalary,
        tax,
        NHIFDeductions,
        NSSFDeductions,
        netSalary
    };
}
// testing for output
console.log(computeNetSalary(35000, 2100));