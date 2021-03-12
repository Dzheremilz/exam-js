const isLeapYear = (year) => {
  if (((year % 4) == 0 && (year % 100) != 0) || (year % 400) == 0) {
    return true;
  } else {
    return false;
  }
}

for (let i = 2000; i <= 2100; i++) {
  if (isLeapYear(i)) {
    console.log(`${i} est une année bissextile`)
  }
}