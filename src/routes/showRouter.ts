import { ShowController } from "../controller/ShowController"
import express from "express"

export const showRouter = express.Router()

const showController = new ShowController()

showRouter.get("/", showController.getAllShowsOnDate);
showRouter.post("/sign-show", showController.signShow);