import express from 'express';
import {
  getCompletedAuction,
  createCompletedAuction,
  deleteCompletedAuction,
  updateCompletedAuction,
  getAllCompletedAuctions
} from '../controllers/completedAuctions.controller.js';


const router = express.Router();

router.get("/", getAllCompletedAuctions);
router.get("/:id", getCompletedAuction);
router.post("/", createCompletedAuction);
router.delete("/:id", deleteCompletedAuction);
router.patch("/:id", updateCompletedAuction);

export default router;
