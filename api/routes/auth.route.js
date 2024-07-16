import express from "express";
import {
  signup,
  signin,
  // forgetPassword,
} from "../controller/auth.controller.js";

const router = express.Router();

router.post("/signup", signup);
router.post("/signin", signin);
export default router;
