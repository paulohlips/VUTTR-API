import { Router } from "express";

import ToolController from "./app/controllers/ToolController";
import UserController from "./app/controllers/UserController";
import SessionController from "./app/controllers/SessionController";

const routes = new Router();

routes.get("/users", UserController.index);
routes.get("/tools", ToolController.index);
routes.post("/users", UserController.store);
routes.post("/tools", ToolController.store);

routes.post("/session", SessionController.store);

routes.put("/users", UserController.update);
routes.delete("/tools/:id", ToolController.delete);

export default routes;
