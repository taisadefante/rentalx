import { CategoriesResponsitory } from "../repositories/CategoriesRepository";

interface IRequest {
  name: string;
  description: string;
}

class CreateCategoryService {
  constructor(private categoriesResponsitory: CategoriesResponsitory) {}

  execute({ name, description }: IRequest): void {
    const categoryAlreadyExists = this.categoriesResponsitory.findByName(name);

    if (categoryAlreadyExists) {
      throw new Error("Category already exists!");
    }

    this.categoriesResponsitory.create({ name, description });
  }
}

export { CreateCategoryService };
