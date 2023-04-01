import { Router } from "express";
import { authorization } from "../auth/middleware";
import * as personController from "./controller";

const router = Router();

router.get("/persons", authorization, personController.getPersons);
router.post("/person", personController.addPersons);
router.put("/person/:personId", authorization, personController.updatePerson);
router.delete(
  "/person/:personId",
  authorization,
  personController.deletePerson
);

export default router;
