import { Router } from "express";
import { isLoggedIn } from "../lib/auth.js";
// import { isLoggedIn } from "../lib/auth.js";
import {
    renderUser,
    deleteUser,
    renderEditUser, 
    editUser
} from "../controllers/user.controller.js";

const router = Router();
// Authorization
router.use(isLoggedIn);
// Routes
router.get("/", renderUser);
router.get("/delete/:id", deleteUser)
router.get("/edit/:id", renderEditUser);
router.post("/edit/:id", editUser);
export default router;