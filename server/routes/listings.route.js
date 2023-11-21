import express from 'express';
import {
  getListing,
  createListing,
  deleteListing,
  updateListing,
  getAllListings
} from '../controllers/listings.controller.js';


const router = express.Router();

router.get("/", getAllListings);
router.get("/:id", getListing);
router.post("/", createListing);
router.delete("/:id", deleteListing);
router.patch("/:id", updateListing);

export default router;
