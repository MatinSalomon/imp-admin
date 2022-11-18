import { Router } from "express";
import auth from "./auth.routes.js";
import user from "./users.routes.js"
import Profile  from "./profile.routes.js";
import index from './index.routes.js'
const router = Router();

router.use(index)
router.use(auth);
router.use("/user", user)
router.use(Profile)

export default router;