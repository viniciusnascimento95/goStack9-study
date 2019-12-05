import { Router } from "express";

const routes = new Router();

routes.get("/", (req, res) => {
  return res.json({ message: "deu tudo certo campeão" });
});

export default routes;
