import { Router } from "express";
import passport from "passport";
import { createTicket } from "../controllers/ticket.controller.js";
import { isUser } from "../middlewares/auth.js";

const router = Router();

router.post(
  "/",
  passport.authenticate("jwt", { session: false }),
  isUser,
  createTicket
);

export default router;
