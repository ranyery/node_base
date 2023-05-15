import express, { Router } from "express";

import auth from "./auth";
import movies from "./movies";

const router = express.Router();

export default (): Router => {
  movies(router);
  auth(router);

  return router;
};
