import { Router } from "express";
import { isLoggedIn } from "../lib/auth.js";
import { renderUserProfile } from "../controllers/profile.controller.js";

const router = Router();

router.get("/profile", isLoggedIn, renderUserProfile);

export default router;