import express from 'express';
import userList from '../data/UserData.js';
const userRoute = express.Router();

// Get all users
userRoute.get('/', (req, res) => {
    res.status(200).json(userList);
});

// Get user by id 
userRoute.get('/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const user = userList.find((user) => user.id === id);

    if (!user) {
        return res.status(404).json({ message: "user not found"});
    }

    res.status(200).json(user);
})

// create user
userRoute.post('/', (req, res) => {
    const id = parseInt(req.body.id);
    const name = req.body.name;
    const age = parseInt(req.body.age);

    // check if user already exists
    const userExist = userList.find((user) => user.id === id);
    if (userExist) {
        return res.status(409).json({message: "User already exists"})
    }

    const newUser = {
        id: id,
        name: name,
        age: age,
    }

    userList.push(newUser);
    res.status(201).json({message: "Create successfully", user: newUser});
})

// update user
userRoute.put('/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const name = req.body.name;
    const age = parseInt(req.body.age);

    let user = userList.find((user) => user.id === id);

    if (!user) {
        return res.status(404).json({message: "user not found"})
    }

    const newUser = {...user, name, age};
    const userIndex = userList.findIndex((user) => user.id === id);
    userList[userIndex] = newUser;
    res.status(200).json(userList);
})

// delete user 
userRoute.delete('/:id', (req, res) => {
    const id = parseInt(req.params.id);

    const user = userList.find((user) => user.id === id);

    if (!user) {
        return res.status(404).json({ message: "user not found"})
    }

    res.status(200).json({message: "user has been deleted"})

})
export default userRoute;