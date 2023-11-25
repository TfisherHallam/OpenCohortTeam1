import express from 'express';
import {
  getAllUsers,
  getuser,
  deleteUser,
  updateUser
} from '../controllers/admin.controller.js';


const router = express.Router();

router.get("/", getAllUsers);
router.get("/:id", getuser);
router.delete("/:id", deleteUser);
router.patch("/:id", updateUser);

export default router;
