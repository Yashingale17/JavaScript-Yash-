let num = [ 1,2,3,4,5,6,7,8,9,10];

let newnum0 = num.map( (nums) => {return nums * 10})
console.log(newnum0);

let newnum = num
                .map( (nums) => {return nums * 10})
                .map((nums ) => nums + 1)
                .filter((nums) => { return nums >=43}); // this is called chainging 

console.log(newnum);