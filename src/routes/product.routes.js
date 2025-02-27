import { Router } from "express";
import passport from "passport";  // ✅ Asegúrate de que esta línea está presente
import { getAllProducts, createProduct } from "../controllers/product.controller.js";
import { isAdmin } from "../middlewares/auth.js";

const router = Router();

router.get("/", getAllProducts);
router.post("/", passport.authenticate("jwt", { session: false }), isAdmin, createProduct);

export default router;
