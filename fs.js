import fs from "fs";

const result = fs.readFile("./hello.txt", "utf8", (err, data) => {
  if (err) console.log(err);
  else console.log(data);
});

console.log(result)

const addSomeDetail = fs.writeFile("./helso.txt", " new", {flag: "a"}, (err) => {
    if (err) {
        console.log(err)
    }
})
console.log(addSomeDetail)