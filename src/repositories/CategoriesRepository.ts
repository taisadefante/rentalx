import { Category } from "../model/category";

//DTO - DATA TRANSFER OBJECT
interface ICreateCategoryDTO {
  name: string;
  description: string;
}

class CategoriesResponsitory {
  private categories: Category[];

  constructor() {
    this.categories = [];
  }

  create({ description, name }: ICreateCategoryDTO): void {
    const category = new Category(); // Correct instantiation

    Object.assign(category, {
      name,
      description,
      created_at: new Date(),
    });

    this.categories.push(category); // Push the instance, not the class
  }

  list(): Category[] {
    return this.categories;
  }

  findByName(name: string): Category {
    const category = this.categories.find((category) => category.name === name);
    return category;
  }
}

export { CategoriesResponsitory };
