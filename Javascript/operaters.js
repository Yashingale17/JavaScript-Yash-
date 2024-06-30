// == is a comparesion operates that compares two values and resultes in boolean falue ie true or false 
// This line uses the loose equality operator (==). In JavaScript, == attempts to convert both values to a common type before comparing them.

//console.log("2" == 2);

// === tripple equal to is a strict comparesion operater in this this checks the data type as well 

//console.log("2" === 2); 
// false   because it compares datatype as well so both are not same datatype one is string and other one is nunber

//console.log( 2 === 2 ); 
// true  both the data is same and equal 


console.log(null == 0);
console.log(null > 0);
console.log(null < 0);


console.log(null <= 0);
console.log(null >= 0);
/* These comparisons show a peculiarity in JavaScript. While null usually doesn't convert for strict equality (===), there's an exception for comparison operators like <= and >=.
In these cases, null is also converted to 0.
Since 0 is less than or equal to itself (0 <= 0) and greater than or equal to itself (0 >= 0), both comparisons yield true. */

/* IMPORTANT 
To avoid these surprises, it's generally recommended to use the strict equality operator (===) for type-safe comparisons. It checks for both value and type equality.
If you specifically want to check if a value is null, use value === null. */

/* Why is this so?
JavaScript's type coercion is designed to make comparisons more convenient in some situations, but it can lead to unexpected results if not understood.
The behavior differs between equality (==) and comparison operators (<, >, <=, >=) because historical reasons and compatibility with older code. */