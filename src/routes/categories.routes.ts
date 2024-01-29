import { Router } from "express";
import { v4 as uuidv4 } from "uuid";
import { Category } from "../model/category";

const categoriesRoutes = Router();

const categories: Category[] = [];

// CREATE CATEGORY - POST
categoriesRoutes.post("/", (req, res) => {
  const { name, description } = req.body;

  const category = new Category(); // Correct instantiation

  Object.assign(category, {
    name,
    description,
    created_at: new Date(),
  });

  categories.push(category); // Push the instance, not the class

  return res.status(201).json({ category });
});

// CONSULTA CATEGORIES - GET
categoriesRoutes.get("/", (req, res) => {
  return res.status(200).json({ categories });
});

export { categoriesRoutes };
