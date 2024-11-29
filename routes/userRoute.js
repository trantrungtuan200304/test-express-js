import express from 'express';
import userData from '../data/UserData.js';
const userRoute = express.Router();

// Get all users
userRoute.get('/', (req, res) => {
    res.status(200).json(userData);
});


export default userRoute;