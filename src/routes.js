import { Router } from "express";

import ToolController from "./app/controllers/ToolController";
import UserController from "./app/controllers/UserController";

const routes = new Router();

routes.post("/users", UserController.store);

routes.get("/tools", ToolController.index);
routes.post("/tools", ToolController.store);
routes.delete("/tools/:id", ToolController.delete);

export default routes;
