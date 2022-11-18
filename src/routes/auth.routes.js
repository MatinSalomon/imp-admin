import { Router } from "express";
import { isLoggedIn, isNotLoggedIn} from "../lib/auth.js";
const router = Router();

import {renderSignUp, signUp, renderSignIn, signIn, logout} from "../controllers/auth.controller.js"

import { signupSchema } from "../validators/signup.validator.js";

// SIGNUP
router.get("/signup",isLoggedIn, renderSignUp);
router.post("/signup",isLoggedIn,  signupSchema, signUp);

// SINGIN
router.get("/signin",isNotLoggedIn, renderSignIn);
router.post("/signin", signIn);

router.get("/logout",isLoggedIn, logout);
export default router;