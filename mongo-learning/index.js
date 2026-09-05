import mongoose from "mongoose";

mongoose.connect("mongodb://localhost:27017/test").then(() => {
    console.log("Connection database has successfull");
}).catch(() => {
    console.log("Unable To connect database, please try again!");
});

const User = mongoose.model("users", { name: String, email: String, age: Number } )

// Create, 1 row by adding save after new User
async function createUser(name, email, age) {
    const user = new User({ name, email, age });
    await user.save();
}

// Read, get 1 row by findById in mongoose model.
async function getUserById(id) {
    const user = await User.findById(id);
    return user;
}

// Read, get 1 row by findOne with column name and value in mongoose model.
async function getUserByProp(prop, value) {
    const user = await User.findOne( { [prop]: value } );
    return user;
}

// Read, get all rows by find from users table in mongoose model.
async function getAllUsers() {
    const users = await User.find();
    return users
}

// Read, get all rows with some condition Comparison by $gt that is built in function in mongodb.
async function getByCondition(prop, conditionValue) {
    const user = await User.find({[prop]: { $gt: conditionValue } });
    return user
}

// Update, 1 prop value with some id by updateOne in mongoose model.
async function updateUser(id, prop, value) {
    await User.updateOne({_id: id}, {[prop]: value});
}

// Update, Many prop value with condition by updateMany in mongoose model.
async function updateUsers(prop, conditionValue, value){
    await User.updateMany({ [prop]: {$lt: conditionValue} }, { [prop]: value })
}

// Delete, 1 prop with some id by deleteOne in mongoose model.
async function deleteUser(id) {
    await User.deleteOne({_id: id});
}

// Delete, Many prop value with condition by deleteMany in mongoose model.
async function deleteUsers(prop, conditionValue, value) {
    await User.deleteMany({ [prop]: { $lt: conditionValue } }, { [prop]: value })
}

async function main() {
    try {
        // await createUser("saleh", "sal5523@gmail.com", 26);
        // const user = await getUserById('6a9b75cce7d4e1cef7e5491d');
        // const user = await getUserByProp("email", "dhomlmgyr@gmail.com");
        // console.log(user)
        // const users = await getAllUsers();
        // console.log(users);
        // const user = await getByCondition("age", 22);
        // console.log(user);
        // await updateUser('6a9b75cce7d4e1cef7e5491d', "age", 23);
        // await updateUsers("age", 24, 34);
        // await deleteUser('6a9b81e076ce786e230aa4a0');
    } catch (e) {
        console.log(e)
    }
}

main();