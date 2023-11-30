import express from 'express';
import { getAllUsers, deleteUser, updateUser } from '../controllers/admin.controller.js';
import { verifyToken } from '../helpers/verifyUser.js';

const router = express.Router();

router.get("/", verifyToken, getAllUsers);
router.delete("/:id", verifyToken, deleteUser);
router.patch("/:id", verifyToken, updateUser);

export default router;