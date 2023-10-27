import express from "express";
import { deleteUser, getUser, getUserListings, test, updateUser } from "../controllers/user.controller.js";
import { verifyToken } from "../utils/verifyUser.js";

const router = express.Router();

// to get information on web page use router.get
router.get('/test',test)
// it verify token to update the user
router.post('/update/:id',verifyToken, updateUser)
router.delete('/delete/:id', verifyToken, deleteUser)
router.get('/listings/:id', verifyToken, getUserListings)
router.get('/:id', verifyToken, getUser)

export default router;