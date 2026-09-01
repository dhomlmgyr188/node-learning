export function add(num1, num2) {
    return num1 + num2;
}

export const multiply = (num1, num2) => num1 * num2;

export const PI = 3.14;

export let me = "abdulrahman";
me = "mohammed";

// يمكن تصدير عنصر واحد فقط افتراضي لكل وحدة 
export default function info() {
    console.log("This module is for dealing with number and string");
} 