import { Router } from "express";

import ToolController from "./app/controllers/ToolController";

const routes = new Router();

routes.post("/register", ToolController.store);

export default routes;
