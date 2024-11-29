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
    const {id, name, age} = req.body;

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


export default userRoute;