import { Router } from "express";

import { getAll } from "../controllers/movies";

export default (router: Router) => {
  router.get("/movies", getAll);
};
