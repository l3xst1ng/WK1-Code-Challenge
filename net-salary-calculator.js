function calculateNetSalary() {
  const basicSalary = +prompt("Enter your basic salary:");
  const benefits = +prompt("Enter your benefits:");

  // Calculates Gross Salary
  const grossSalary = basicSalary + benefits;

  // Calculates PAYE  based on the provided rates
  let payee = 0;
  if (grossSalary <= 24000) {
    payee = grossSalary * 0.1;
  } else if (grossSalary <= 32333) {
    payee = grossSalary * 0.25;
  } else if (grossSalary <= 500000) {
    payee = grossSalary * 0.3;
  } else if (grossSalary <= 800000) {
    payee = grossSalary * 0.325;
  } else {
    payee = grossSalary * 0.35;
  }

  // Calculates NHIF Deductions based on the provided rates
  let nhifDeductions = 0;
  if (grossSalary <= 5999) {
    nhifDeductions = 150;
  } else if (grossSalary <= 7999) {
    nhifDeductions = 300;
  } else if (grossSalary <= 11999) {
    nhifDeductions = 400;
  } else if (grossSalary <= 14999) {
    nhifDeductions = 500;
  } else if (grossSalary <= 19999) {
    nhifDeductions = 600;
  } else if (grossSalary <= 24999) {
    nhifDeductions = 750;
  } else if (grossSalary <= 29999) {
    nhifDeductions = 850;
  } else if (grossSalary <= 34999) {
    nhifDeductions = 900;
  } else if (grossSalary <= 34999) {
    nhifDeductions = 950;
  } else if (grossSalary <= 44999) {
    nhifDeductions = 1000;
  } else if (grossSalary <= 49999) {
    nhifDeductions = 1100;
  } else if (grossSalary <= 59999) {
    nhifDeductions = 1200;
  } else if (grossSalary <= 69999) {
    nhifDeductions = 1300;
  } else if (grossSalary <= 79999) {
    nhifDeductions = 1400;
  } else if (grossSalary <= 89999) {
    nhifDeductions = 1500;
  } else if (grossSalary <= 99999) {
    nhifDeductions = 1600;
  } else {
    nhifDeductions = 1700;
  }

  // Calculates NSSF Deductions based on the provided rates
  let nssfDeductions = 0;
  if (basicSalary <= 7000) {
    nssfDeductions = basicSalary * 0.06;
  } else if (basicSalary <= 36000) {
    nssfDeductions = basicSalary * 0.06;
  }

  // Calculates Net Salary
  const netSalary = grossSalary - payee - nhifDeductions - nssfDeductions;

  alert(
    `Gross Salary: ${grossSalary} Ksh\nPAYE (Tax): ${payee} Ksh\nNHIF Deductions: ${nhifDeductions} Ksh\nNSSF Deductions: ${nssfDeductions} Ksh\nNet Salary: ${netSalary} Ksh`
  );
}

calculateNetSalary();
