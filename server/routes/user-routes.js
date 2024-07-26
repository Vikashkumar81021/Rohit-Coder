import express from "express";
import { login, register } from "../controllers/user-controller.js";
import signUpSchema from "../validator/user-validator.js";
import validate from "../middlewares/validate-middleware.js";
const router = express.Router();

router.post("/register", validate(signUpSchema), register);
router.post("/login", login);
export default router;
