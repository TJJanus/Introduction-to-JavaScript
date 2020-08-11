/************************************************************** Task 1: Warm-up! **************************************************************/
//Task a: declare a variable called votingAge, console log true if age > 18 (no function required)

let votingAge = 20;
if (votingAge > 18)
    
    console.log('true');





//Task b: declare a variable and then use a conditional to change the value of that variable based on the value assigned to a second variable (no function required)

let drivingAge = '17';
let legality = 'legal';

if (legality === 'not legal'){
    drivingAge ='16';
    }else if (legality === 'legal'){
        drivingAge = '20'
        }
    console.log(drivingAge);


//Task c: Convert string ("1999") to integer (1999)  (no function required) // hint look up the Number method
let x = '1999';
x.toString();
('1999').toString();
(1999).toString();

console.log(x);





//Task d: Write a function to multiply a*b 

function multiplyNumbers(x,y){
        return x*y;
}

console.log(multiplyNumbers(4,8));
    



/************************************************************** Task 2 **************************************************************/
//Age in Dog years
//write a function that takes your age and returns it to you in dog years - they say that 1 human year is equal to seven dog years 

function dogYears (x,y){
    return x*y
}
console.log(dogYears(23,7));


/************************************************************** Task 3 **************************************************************/
//Dog feeder 
//takes weight in pounds and age in years (note if the dog is a puppy the age will be a decimal) and returns the number of pounds of raw food to feed in a day.

//feeding requirements
// adult dogs at least 1 year 
// up to 5 lbs - 5% of their body weight
// 6 - 10 lbs - 4% of their body weight 
// 11 - 15 lbs - 3% of their body weight 
// > 15lbs - 2% of their body weight 

// Puppies less than 1 year
// 2 - 4 months 10% of their body weight
// 4 - 7 months 5% of their body weight 
// 7 - 12 months 4% of their body weight

// when you are finished invoke your function with the weight of 15 lbs and the age of 1 year - if your calculations are correct your result should be 0.44999999999999996
  
function dogFeeder(amount){
    console.log('The dog needs',amount,'lbs of food')
}

function adult (weight){
    if (weight <= 5){
        dogFeeder(weight * .05);
    }
    else if (weight <= 10){
        dogFeeder(weight * 0.4);
    }
    else if (weight <= 15){
        dogFeeder(weight * .03);
    }
    else {
        dogFeeder(weight * .02);
    }
}

function puppy(age,weight){
    if (age >= .166666 && age <= .333333){
        dogFeeder(weight * .10);
    }
    if (age > .333333 && age <= .58333333){
        dogFeeder(weight * .05);
    }
    else {
        dogFeeder (weight * .04);
    }
}

function input (age,weight){
    if (age < 1){
        puppy(age,weight);
    }
    else {
        adult(weight);
    }
}

input(1,15)



/************************************************************** Task 4 **************************************************************/
// Rock, Paper, Sissors
// Your function should take a string (either rock paper or sissors)
// it should return you won or you lost based on the rules of the game (you may need to look up the rules if you have not played before)
// use math.random to determine the computers choice 
// hint while you can complete this with only conditionals based on strings it may help to equate choice to a number   

function rps (){
    let random = Math.random()
    if (random < .5) {
        console.log('Won')
    }
    if (random > .5) {
        console.log('Lost')
    }    
}
rps()


/************************************************************** Task 5 **************************************************************/
//Metric Converter
//a. KM to Miles - should take the number of kilometers and convert it to the equal number of miles

function toMiles (n,j){
    return n*j
}
console.log(toMiles(0.621371,7));





//b. Feet to CM - should take the number of feet and convert it to the equal number of centimeters
  
function toCM (c,f){
    return c*f
}
console.log(dogYears(30.48,1));



/************************************************************** Task 6 **************************************************************/
// 99 bottles of soda on the wall
// create a function called annoyingSong
// the function should take a starting number as an argument and count down - at each iteration it should log (number) bottles of soda on the wall, (number) bottles of soda, take one down pass it around (number left over) bottles of soda on the wall`

function annoyingSong (){
    for (i = 6; i > 1; i--)
    console.log('bottles of soda on the wall');
}

annoyingSong()

/* function (annoyingSong)
for loop iterating down instad of up
have to exit the loop */


/************************************************************** Task 7 **************************************************************/
//Grade Calculator
//write a javaScript program that takes a mark out of 100 and returns a corisponding letter grade 
//90s should be A 
//80s should be B 
//70s should be Cs 
//60s should be D 
//and anything below 60 should be F
  
let score = '59';

if (score >= 90){
    console.log('A')
} else if (score >= 80){
    console.log('B')
} else if (score >= 70){
    console.log('C')
} else if (score >= 60){
    console.log('D')
} else (score < 60)
    console.log('F')
  
  

/************************************************************** Stretch **************************************************************/
//Create a function that counts the number of vowels within a string. It should handle both capitalized and uncapitalized vowels.
// Hint - you may need to study tomorrow's traning kit on arrays 
// try looking up the .includes() method





/************************************************************** Stretch **************************************************************/
//Take Rock, Paper, Sissors further
//update your rock papers sissors code below to take a prompt from a user using the window object





