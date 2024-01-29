import { Router } from "express";
import { v4 as uuidv4 } from "uuid";
import { Category } from "../model/category";

const categoriesRoutes = Router();

const categories: Category[] = [];

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

export { categoriesRoutes };
