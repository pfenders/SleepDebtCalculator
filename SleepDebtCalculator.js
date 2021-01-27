// Declaring function
const getSleepHours = day => {

if(day === 'Monday'){
  return 8;
} else if (day === 'Tuesday'){
  return 7;
} else if (day === 'Wednesday'){
  return 5;
} else if (day === 'Thursday') {
  return 6;
} else if (day === 'Friday'){
  return 4; 
} else if (day === 'Saturday') {
  return 10;
} else if( day === 'Sunday') {
  return 9;
}

};

// Testing getSleepHours function
console.log(getSleepHours('Wednesday'));
console.log(getSleepHours('Sunday'));
console.log(getSleepHours('Friday'));

// Actual Sleep Function
const getActualSleepHours = () => 
getSleepHours('Monday') +  getSleepHours('Tuesday') +  getSleepHours('Wednesday') +  getSleepHours('Thursday') +  getSleepHours('Friday') +  getSleepHours('Saturday') +  getSleepHours('Sunday');
;

//Ideal Sleep Hours Function
const getIdealSleepHours = () => {
  let idealHours = 8;
  return idealHours * 7 ;
};

//Test Actual and Ideal Functions
console.log(getActualSleepHours());
console.log(getIdealSleepHours());

//Calculating Sleep Debt Function
const calculateSleepDebt = ()  => {
const actualSleepHours = getActualSleepHours();
const idealSleepHours = getIdealSleepHours();

if (actualSleepHours === idealSleepHours) {
console.log('You got the perfect amount of sleep:' + (idealSleepHours - actualSleepHours));
} else if (actualSleepHours > idealSleepHours) {
console.log('You got more sleep than needed.');
} else if (actualSleepHours < idealSleepHours) {
console.log('You need more sleep.');
}
};

calculateSleepDebt();