import { Router } from "express";
import passport from "passport";
import {
  getCartByUserId,
  createCart,
  addProductToCart,
  purchaseCart,
} from "../controllers/cart.controller.js";
import { isUser } from "../middlewares/auth.js";

const router = Router();

router.get(
  "/",
  passport.authenticate("jwt", { session: false }),
  getCartByUserId
);

router.post("/", passport.authenticate("jwt", { session: false }), createCart);

router.post(
  "/add",
  passport.authenticate("jwt", { session: false }),
  isUser,
  addProductToCart
);

router.post(
  "/:cid/purchase",
  passport.authenticate("jwt", { session: false }),
  isUser,
  purchaseCart
);

export default router;
