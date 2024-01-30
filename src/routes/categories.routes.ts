import { Router } from "express";
import { v4 as uuidv4 } from "uuid";
import { CategoriesResponsitory } from "../repositories/CategoriesRepository";
import { CreateCategoryService } from "../services/createCategoryService";

const categoriesRoutes = Router();

const categoriesResponsitory = new CategoriesResponsitory();

// CREATE CATEGORY - POST
categoriesRoutes.post("/", (req, res) => {
  const { name, description } = req.body;
  const createCategoryService = new CreateCategoryService(
    categoriesResponsitory
  );

  createCategoryService.execute({ name, description });
  return res.status(201).send();
});

// CONSULTA CATEGORIES - GET
categoriesRoutes.get("/", (req, res) => {
  // return res.status(200).json({ categoriesResponsitory });
  const all = categoriesResponsitory.list();
  return res.json(all);
});

export { categoriesRoutes };
