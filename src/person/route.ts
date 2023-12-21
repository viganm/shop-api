import { Router } from "express";
import * as personController from "./controller";
import { authorization, restrict } from "../auth/middleware";

const router = Router();

router.get(
  "/persons",
  authorization,
  restrict("admin"),
  personController.getPersons
);
router.post("/person", personController.addPersons);
router.put(
  "/person/:personId",
  authorization,
  restrict("admin"),
  personController.updatePerson
);
router.delete(
  "/person/:personId",
  authorization,
  restrict("admin"),
  personController.deletePerson
);

export default router;
