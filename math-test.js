// import { add, multiply, PI, me } from "./math.js"

// console.log(add(2, 3));

// console.log(multiply(3,3));

// console.log(PI);

// if (me === "mohammed") {
//     console.log(`${me} age is: (${add(2, 21)})`);
// } 

// استيراد العنصر الافتراضي من الوحدة
// استيراد جميع العناصر المصدرة من الوحدة
import myMath, * as mathLib from "./math.js"

console.log(mathLib.add(2, 3));

console.log(mathLib.multiply(3,3));

console.log(mathLib.PI);

if (mathLib.me === "mohammed") {
    console.log(`${mathLib.me} age is: (${mathLib.add(2, 21)})`);
} 

console.log(myMath());