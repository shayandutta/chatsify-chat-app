import express from 'express';
import protectRoute from '../middleware/protectRoute.js';
import { gerUsersForSidebar } from '../controllers/user.controller.js';

const router = express.Router();

router.get("/", protectRoute , gerUsersForSidebar);

export default router;