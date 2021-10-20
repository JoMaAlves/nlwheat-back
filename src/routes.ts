import { Router } from "express";
import { ensureAuthenticated } from "./middleware/ensureAuthenticated";
import { CreateMessageController } from "./controllers/CreateMessageController";
import { AuthenticateUserController } from "./controllers/AuthenticateUserController";

const router = Router();

router.post("/authenticate", new AuthenticateUserController().handle);

router.post("/messages", ensureAuthenticated, new CreateMessageController().handle);

export { router }