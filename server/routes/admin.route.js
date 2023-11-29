import express from 'express';
import {getAllUsers, getUser, deleteUser, updateUser} from '../controllers/admin.controller.js';
import { verifyToken } from '../helpers/verifyUser.js';


const router = express.Router();

router.get("/",  getAllUsers);
router.get("/:id",  getUser);
router.delete("/:id", deleteUser);
router.patch("/:id", updateUser);

export default router;
