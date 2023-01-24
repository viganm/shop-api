import { Router } from "express";
import * as personController from "./controller";

const router = Router();

router.get("/persons", personController.getPersons);
router.post("/person", personController.addPersons);
router.put("/person/:personId", personController.updatePerson);
router.delete("/person/:personId", personController.deletePerson);

export default router;
