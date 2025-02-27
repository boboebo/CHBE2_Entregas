import express from "express";
import passport from "passport";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import connect from "./config/database.js";
import initializePassport from "./config/passport.config.js";

import userRoutes from "./routes/user.routes.js";
import productRoutes from "./routes/product.routes.js";
import cartRoutes from "./routes/cart.routes.js";
import ticketRoutes from "./routes/ticket.routes.js";

// Configuración
dotenv.config();
connect(process.env.MONGODB_URI);
initializePassport();

const app = express();
app.set("PORT", process.env.PORT || 3000);

// Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(passport.initialize());
app.use(cookieParser());

// Rutas
app.use("/api/users", userRoutes);
app.use("/api/products", productRoutes);
app.use("/api/carts", cartRoutes);
app.use("/api/tickets", ticketRoutes);

// Ruta principal
app.get("/", (req, res) => res.json({ title: "Home Page" }));

// Listener
app.listen(app.get("PORT"), () => {
  console.log(`Server on port http://localhost:${app.get("PORT")}`);
});
