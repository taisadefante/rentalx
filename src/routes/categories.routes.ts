import { Router } from "express";
import { v4 as uuidv4 } from "uuid";
import { CategoriesResponsitory } from "../repositories/CategoriesRepository";

const categoriesRoutes = Router();

const categoriesResponsitory = new CategoriesResponsitory();

// CREATE CATEGORY - POST
categoriesRoutes.post("/", (req, res) => {
  const { name, description } = req.body;

  const categoryAlreadyExists = categoriesResponsitory.findByName(name);

  if (categoryAlreadyExists) {
    return res.status(400).json({ error: "Category already exists!" });
  }

  categoriesResponsitory.create({ name, description });

  return res.status(201).send();
});

// CONSULTA CATEGORIES - GET
categoriesRoutes.get("/", (req, res) => {
  // return res.status(200).json({ categoriesResponsitory });
  const all = categoriesResponsitory.list();
  return res.json(all);
});

export { categoriesRoutes };
