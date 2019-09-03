import { Router } from "express";

import ToolController from "./app/controllers/ToolController";
import UserController from "./app/controllers/UserController";
import SessionController from "./app/controllers/SessionController";
import AuthMiddleware from "./app/middleware/auth";

const routes = new Router();

routes.get("/", (req, res) => res.send("Welcome to VUTTR API!!"));

routes.get("/users", UserController.index);
routes.post("/users", UserController.store);

routes.get("/tools", ToolController.index);
routes.post("/tools", ToolController.store);

routes.post("/session", SessionController.store);

routes.use(AuthMiddleware);

routes.put("/users/:id", UserController.update);
routes.delete("/users/:id", UserController.delete);

routes.put("/tools/:id", ToolController.update);
routes.delete("/tools/:id", ToolController.delete);

export default routes;
