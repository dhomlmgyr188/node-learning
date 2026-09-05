import { DataTypes, QueryTypes, Sequelize } from 'sequelize';

const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: './db.sqlite'
});

const User = sequelize.define("users", {
    name: {
        type: DataTypes.STRING
    },
    email: {
        type: DataTypes.STRING
    }
}, {
    timestamps: false
});

// CRUD Opeations In Sequelize, Create, Read, Update, Delete.

// Create, In Sequelize Modal.
function createUsers(name, email) {
    const newUser = new User( { name, email } );
    return newUser.save();
}

// Read, In Sequelize Modal.
function getUsers() {
    // findAll, that get all rows from "users" table.
    return User.findAll();
}
function getUser(id) {
    // findByPK, that get 1 row from "users" table.
    return User.findByPk(id);
}

// Update, In Sequelize Modal.
function updateUser(id, name, email) {
    return User.update( { name, email }, { where: { id } } );
}

// Delete, In Sequelize Modal.
function deleteUser(id) {
    return User.destroy( { where: { id } } );
}

async function main() {
    try {
        await sequelize.authenticate();
        // await createUsers("Abdulrahman", "dhomlmgyr@gmail.com");
        // await updateUser(2, "Fahad", "fhfh2233@gmail.com.com");
        // await deleteUser(3);
        // const users = await getUsers();
        // console.log(users);
        const user = await getUser(4);
        console.log(user)
        // const users = await getUsers();
        // console.log(users)
        // await deleteUsers();
        console.log("Connecting database has been successfull!");
    } catch (e) {
        console.log("Unable To Connect Database", e)
    }
}

main()