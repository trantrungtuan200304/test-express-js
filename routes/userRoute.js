import express from 'express';
import userData from '../data/UserData.js';
const userRoute = express.Router();

// Get all users
userRoute.get('/', (req, res) => {
    res.status(200).json(userData);
});

// Get user by id 
userRoute.get('/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const user = userData.find((user) => user.id === id);

    if (!user) {
        return res.status(404).json({ message: "user not found"});
    }

    res.status(200).json(user);
})


export default userRoute;