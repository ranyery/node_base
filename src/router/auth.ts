import { Router } from "express";

import { getAll } from "../controllers/users";

export default (router: Router) => {
  router.get("/auth", getAll);
};
